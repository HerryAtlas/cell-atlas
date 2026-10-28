# Architecture · Course Engine First

Cell Atlas uses a deliberately small **course engine** at the center. The visual scene, an AI tutor, Jarvis, and a memory service are optional layers around it.

```text
Course definition  →  CourseEngine  →  UI / 3D scene
                         │
                         └─ readonly context ──→ optional AI tutor
                                             optional Jarvis bridge
                                             optional memory service
```

## 1. Core principle

A lesson must remain completable when every AI service is offline.

- The engine owns stage navigation, evidence, completion and snapshots. Free browsing is allowed; completing the lesson requires evidence for every stage.
- The UI owns presentation and 3D interaction.
- An AI tutor may explain, ask a follow-up or suggest a hint.
- An AI tutor **cannot** mark a step complete or bypass an exercise.
- The public site remains static and requires no account, backend or model key.

## 2. Layers

| Layer | Responsibility | Current files |
|---|---|---|
| Course content | objectives, structures, mechanism text, experiments, exercises | `src/transport-lesson.js`, `src/frap-lesson.js` |
| Course flow | declarative step requirements | `src/transport-flow.js`, `src/frap-flow.js` |
| Experiment | condition validation and task-specific prediction feedback | `src/transport-experiment.js`, `src/frap-experiment.js` |
| Engine | deterministic state machine, evidence, completion, snapshot | `src/course-engine.js` |
| Scene | pickable structures, highlight, mechanism state, experiment state | `src/models-scene.js` |
| Lesson UI | shared stages, playback, exercises, mobile peek; per-lesson experiment presenters | `src/lesson-ui/*.js`, `src/lesson-host.jsx` |
| Local persistence | validated snapshots, view drafts, course-isolated records | `src/lesson-progress.js`, `src/transport-progress.js`, `src/frap-progress.js` |
| Tests | engine, experiment and lesson UI regressions | `tests/*.test.mjs` |

The engine has no DOM, Three.js, React, network or LLM dependency.

The standalone gallery and plugin each own one lesson controller at a time.
The plugin's React `LessonHost` mounts the shared trusted HTML shell in a scoped
DOM root and owns controller cleanup, keyboard focus and internal book navigation.
React does not reconcile the presenter's inner DOM. `SectionModelViewer` keeps
its real model scene and forwards picks to the active controller; it releases the
controller before disposing the scene. React is still supplied by DSH, not bundled.
The plugin never embeds an iframe or loads a lesson from an external origin.

The shared `src/lesson-ui/` directory holds the controller, experiment presenters,
shell and CSS. Demo modules remain compatibility re-exports. Both build targets
consume the same shell/styles; the static build expands markers in demo/models.
Selectors are scoped to the lesson root so another plugin's IDs or buttons cannot
receive course handlers. Timers and media listeners are removed on unmount.

The gallery owns one lesson controller at a time. Switching models disposes the
old controller, flushes its pending save, stops timers and removes shell/media
listeners before mounting the next lesson. Tutors receive only the same read-only
observer API. Lesson-specific experiment presenters never receive network or shell
capabilities.

Both lessons keep the version-1 local save envelope. Transport keeps its original
key and flow revision; FRAP uses `cell-atlas.lesson.frap.progress`, stable flow ID
`frap-lesson-v1` and flow revision 1. The shared validator derives condition keys,
ordering length and result fields from each lesson. A foreign lesson snapshot is
rejected even if stored under the wrong key; clearing one key preserves the other.

FRAP has four mechanism states and a target of mobile fraction 40% / exchange
rate 100%. `frapIntensity()` is shared by its 3D display and result curve. The
scene receives raw condition percentages and `{ active, mode, step,
experimentResult }`; each run includes a sequence ID to replay identical
conditions, while edits send a null result. Experiment playback is finite and
never grants mechanism evidence. Long-time plateau and finite-window intensity
are labeled separately. Reduced motion displays the observation endpoint. See
`FRAP-SOURCES.md` for scientific assumptions and sources.

## 3. Evidence-based completion

The flow lists required events rather than calling UI callbacks “complete”:

```js
{
  id: 'recognize',
  requirements: [
    { type: 'structure.selected', match: { id: 'membrane' } },
    { type: 'structure.selected', match: { id: 'channel' } },
    { type: 'structure.selected', match: { id: 'pump' } },
    { type: 'structure.selected', match: { id: 'atp' } }
  ]
}
```

The UI dispatches evidence:

- `structure.selected`
- `mechanism.step`
- `experiment.prediction`
- `experiment.run`
- `exercise.answer`

Evidence is scoped to its stage and attempt. `revoke()` marks matching evidence inactive without deleting previous answers or experiment conditions. Only active evidence in the current attempt contributes to progress. `reset()` starts a new attempt, preserving previous attempts in memory. The standalone lesson automatically saves a versioned engine snapshot and a minimal view draft to one origin-local browser key via src/transport-progress.js; nothing is uploaded. Restore validates lesson evidence and derives feedback from answers rather than trusting saved display labels. Mechanism playback resumes paused. Restart requires confirmation and preserves history; the separate confirmed clear action discards all attempts and removes only this lesson key. Failed writes are visible. Incompatible saves are preserved until explicitly cleared, and stale pages cannot overwrite a changed storage value. The experiment table shows the latest 20 runs across attempts; reusing conditions never counts as running an experiment.

`goTo()` allows browsing any stage. The final `advance()` requires `canComplete()` to be true for the entire lesson. A completed lesson can be revisited without another completion notification; the UI also offers an explicit restart. Revoking required evidence invalidates completion until the learner supplies new evidence and finishes again.

The transport experiment predicts a fixed condition: ATP 0%, gradient 60%, no inhibitor. Other conditions remain available for exploration but neither grade that prediction nor complete the task. An incorrect prediction still counts as an attempt when followed by the specified experiment and its explanatory feedback. Changing parameters invalidates the previous run; running again is required.

The legacy flow id 'transport-lesson-v1' is stable identity, not a schema version. The flow's version describes its definition/requirements revision; ENGINE_VERSION describes the snapshot envelope. Snapshots use engine schema version 2 and a separate flow revision. Restore validates fields, event history and completion consistency; version 1 snapshots are rejected rather than silently reinterpreted. Exported snapshots and event payloads do not share mutable objects with the engine. This is data validation, not tamper-proof assessment; the static site is a self-study tool.

### Presentation timing

Mechanism playback supports normal (3.8 seconds per step) and slow (7.6 seconds per step) pacing without changing completion evidence. The UI passes only the last valid experiment result to the scene; editing conditions clears it immediately. Shared display bands in src/transport-motion.js map 0% to stopped, 1-34% to a slow cycle and 35-100% to a faster cycle. These are qualitative presentation timings, not molecular kinetics. Experiment animation never dispatches mechanism-completion events.

The renderer advances cycles by frame delta, resets ion positions at the start of each new cycle, and uses static experiment actors under the system reduced-motion preference. The mechanism defaults to slow under that preference; enabling it during playback pauses autoplay.

## 4. AI boundary

A future tutor receives only the restricted observer handle:

~~~js
const tutor = engine.getTutorObserver();
const context = tutor.getTutorContext();
const unsubscribe = tutor.subscribe((currentContext) => {
  // Only serialized, allowlisted context may cross the future bridge.
});
~~~

The deeply frozen context contains its schema version, flow identity/revision, current step id/label/kind and aggregate progress. It excludes answers, completion requirements, raw events, timestamps and previous attempts. Tutor listeners receive one context argument; synchronous and asynchronous failures do not interrupt learning.

Pass only this handle to a tutor, never the engine or the complete lesson UI object. The UI exposes it as its 'tutor' property. The existing engine.subscribe() and getSnapshot() remain trusted local diagnostic/control-side APIs and include detailed evidence; they must not be given to AI integrations.

The current context cannot support answer-specific misconception analysis. Adding that later requires an explicit data policy and a separate minimal, consented projection.

Allowed AI behaviour:

- explain the current structure or mechanism step;
- ask a Socratic follow-up;
- give a graduated hint;
- suggest a next learning activity from aggregate progress.

Not allowed:

- dispatch completion events on the learner's behalf;
- write to textbook content without review;
- run shell commands from the public web UI;
- send raw student conversations to a cloud memory service without explicit consent.

If the tutor is unavailable, the static lesson continues normally.

The observer interface exposes no `dispatch`, `goTo`, `reset` or completion setters. This limits accidental writes through that interface; it does not sandbox arbitrary JavaScript running in the same page. A future external tutor must receive serialized context and return validated hint data through a narrow adapter.

## 5. Jarvis and memory

Jarvis should be a **separate local service**, not part of the public static bundle. A future bridge can expose a narrow API:

```text
GET  /lesson/context
POST /lesson/hint
```

Evidence-writing stays inside the local lesson UI; no tutor event-write endpoint is proposed. This bridge is not implemented yet.

The bridge should bind to `127.0.0.1`, use a short-lived token, and expose no general shell/file tools to the lesson page.

TencentDB Agent Memory is optional and should be introduced behind an adapter:

- local Markdown memory is the default fallback;
- Tencent Memory is explicit opt-in;
- course knowledge and learner memory are separate namespaces;
- learner identifiers are pseudonymous;
- raw student conversations are not uploaded by default;
- retention, export and deletion are documented before launch.

## 6. Security invariants

- No API key in `docs/`, `client.js`, `demo/`, source maps or repository history.
- No Jarvis `config.json`, `secret.dat`, `memory/`, `outputs/` or `var/` in the public repository.
- No public Netlify page calls a local command-execution endpoint.
- The teacher/author mode and the student mode have separate permissions.
- The AI cannot publish textbook changes; human content review remains mandatory.

## 7. Current scope

Implemented:

- transport lesson flow and engine;
- evidence-based gating in the four-stage UI;
- engine tests and snapshot support;
- deterministic fallback when no AI is present.

Not implemented yet:

- AI tutor adapter;
- Jarvis bridge;
- Tencent Memory adapter;
- cloud synchronization and learner-record backup;
- multi-user/classroom auth.

The first integration milestone should be **authoring memory**, not student personal data: let Jarvis remember project decisions, course maps and review outcomes while the course engine remains the source of lesson truth.
