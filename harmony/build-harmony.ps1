param(
  [string]$DevEcoHome = 'D:\HarmoneyOs\DevEco Studio',
  [string]$BuildRoot = 'D:\AI\DSH\cell-atlas-harmony-build'
)

$ErrorActionPreference = 'Stop'
$source = $PSScriptRoot
if ($BuildRoot -match '[^A-Za-z0-9\\/_:.\-() @]') {
  throw 'BuildRoot must be an ASCII-only path; DevEco rejects non-ASCII project paths.'
}
if (-not (Test-Path -LiteralPath $DevEcoHome)) { throw "DevEco Studio not found: $DevEcoHome" }
$hvigor = Join-Path $DevEcoHome 'tools\hvigor\bin\hvigorw.bat'
$sdk = Join-Path $DevEcoHome 'sdk'
$jbr = Join-Path $DevEcoHome 'jbr'
if (-not (Test-Path $hvigor)) { throw "hvigorw not found: $hvigor" }

if (Test-Path -LiteralPath $BuildRoot) {
  Remove-Item -LiteralPath $BuildRoot -Recurse -Force
}
New-Item -ItemType Directory -Path $BuildRoot | Out-Null
# Copy only source; never copy build output or the previous dist folder.
$rc = robocopy $source $BuildRoot /E /XD dist build .hvigor /NFL /NDL /NJH /NJS /NP
if ($LASTEXITCODE -ge 8) { throw "robocopy failed: $LASTEXITCODE" }

# Always refresh the embedded web shell from the built docs output.
$docs = Join-Path (Split-Path $source -Parent) 'docs'
$www = Join-Path $BuildRoot 'entry\src\main\resources\rawfile\www'
if (-not (Test-Path -LiteralPath $docs)) { throw "docs not found: $docs" }
if (Test-Path -LiteralPath $www) { Remove-Item -LiteralPath $www -Recurse -Force }
New-Item -ItemType Directory -Path $www -Force | Out-Null
Copy-Item -Path (Join-Path $docs '*') -Destination $www -Recurse -Force
Set-Content -LiteralPath (Join-Path $BuildRoot 'local.properties') -Value "sdk.dir=$($sdk.Replace('\','\\'))" -Encoding utf8

$env:DEVECO_SDK_HOME = $sdk
$env:JAVA_HOME = $jbr
$env:PATH = "$jbr\bin;$(Join-Path $DevEcoHome 'tools\node');$(Join-Path $DevEcoHome 'tools\ohpm\bin');$(Join-Path $DevEcoHome 'tools\hvigor\bin');$env:PATH"

Push-Location $BuildRoot
try {
  & $hvigor --mode module -p product=default assembleHap --no-daemon
  if ($LASTEXITCODE -ne 0) { throw "hvigor exited with $LASTEXITCODE" }
} finally {
  Pop-Location
}

$hap = Get-ChildItem -LiteralPath $BuildRoot -Recurse -File -Filter '*-unsigned.hap' | Select-Object -First 1
if (-not $hap) { throw 'Build succeeded but no unsigned HAP was produced.' }
$dist = Join-Path $source 'dist'
New-Item -ItemType Directory -Path $dist -Force | Out-Null
$target = Join-Path $dist 'CellAtlas-unsigned.hap'
Copy-Item -LiteralPath $hap.FullName -Destination $target -Force
Write-Output "HAP: $target"
Write-Output "UNSIGNED: open the project in DevEco Studio and generate a signing profile before installing on a device."
