# Cell Atlas · HarmonyOS 多设备外壳

这个工程把现有的 `docs/` 网页课程装进 HarmonyOS `Web` 组件，目标是：

- `phone`：手机全屏，自动旋转
- `tablet`：平板全屏
- `2in1`：HarmonyOS PC / 二合一

网页、3D 模型、互动课、localStorage 进度全部复用现有 `docs/`，不复制第二套课程逻辑。

## 目录

```text
harmony/
  AppScope/                 app 名称、版本、图标
  entry/
    src/main/ets/
      entryability/        沉浸式窗口
      pages/Index.ets      Web 组件
    src/main/resources/
      rawfile/www/         由 docs/ 复制而来
  build-harmony.ps1        ASCII 临时目录 + hvigor 构建
  dist/                    构建产物
```

## 构建

DevEco Studio 的工程路径不能包含中文。仓库路径含 `细胞图谱`，所以请用脚本复制到 ASCII 路径构建：

```powershell
powershell -ExecutionPolicy Bypass -File .\harmony\build-harmony.ps1
```

脚本默认：

- DevEco：`D:\HarmoneyOs\DevEco Studio`
- 构建目录：`D:\AI\DSH\cell-atlas-harmony-build`
- 产物：`harmony\dist\CellAtlas-unsigned.hap`

如果 DevEco 安装在其他位置：

```powershell
.\harmony\build-harmony.ps1 -DevEcoHome 'C:\Program Files\Huawei\DevEco Studio'
```

## 安装到真机 / 模拟器

当前 HAP 是 **unsigned**，只能证明工程可编译，不能直接安装。

在 DevEco Studio 中：

1. 用 ASCII 路径打开 `D:\AI\DSH\cell-atlas-harmony-build`
2. `File > Project Structure > Signing Configs`
3. 勾选自动签名，登录华为开发者账号
4. 连接手机 / 平板 / 2in1，或启动模拟器
5. Run

## 当前范围

- HarmonyOS 手机 / 平板 / 2in1：此工程
- Android / iOS / Windows / macOS：直接使用现有浏览器版 `https://herryatlas.github.io/cell-atlas/`
- DSH 桌面：现有插件
- 若要上架 AppGallery，还需要签名、隐私声明、权限说明和应用市场审核

## 已验证

- ArkTS 编译通过
- HAP 打包通过（unsigned）
- Web 资源已打进 `resources/rawfile/www`
- 未在真机 / 模拟器上验证 WebGL 与触控，因为当前环境没有已启动的 HarmonyOS 设备
