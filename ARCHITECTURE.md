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
| Course content | objectives, structures, mechanism text, experiments, exercises | `src/transport-lesson.js` |
| Course flow | declarative step requirements | `src/transport-flow.js` |
| Experiment | condition validation and task-specific prediction feedback | `src/transport-experiment.js` |
| Engine | deterministic state machine, evidence, completion, snapshot | `src/course-engine.js` |
| Scene | pickable structures, highlight, mechanism state, experiment state | `src/models-scene.js` |
| Lesson UI | four stages, playback, prediction form, exercises, mobile peek | `demo/transport-lesson-ui.js` |
| Tests | engine, experiment and lesson UI regressions | `tests/*.test.mjs` |

The engine has no DOM, Three.js, React, network or LLM dependency.

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

Evidence is scoped to its stage and attempt. `revoke()` marks matching evidence inactive without deleting previous answers or experiment conditions. Only active evidence in the current attempt contributes to progress. `reset()` starts a new attempt, preserving previous attempts in memory. Nothing is persisted or uploaded automatically. Restart requires a separate confirmation, supports cancellation and Escape, and explains that history lasts only during the current page session; refresh discards it.

`goTo()` allows browsing any stage. The final `advance()` requires `canComplete()` to be true for the entire lesson. A completed lesson can be revisited without another completion notification; the UI also offers an explicit restart. Revoking required evidence invalidates completion until the learner supplies new evidence and finishes again.

The transport experiment predicts a fixed condition: ATP 0%, gradient 60%, no inhibitor. Other conditions remain available for exploration but neither grade that prediction nor complete the task. An incorrect prediction still counts as an attempt when followed by the specified experiment and its explanatory feedback. Changing parameters invalidates the previous run; running again is required.

The legacy flow id 'transport-lesson-v1' is stable identity, not a schema version. The flow's version describes its definition/requirements revision; ENGINE_VERSION describes the snapshot envelope. Snapshots use engine schema version 2 and a separate flow revision. Restore validates fields, event history and completion consistency; version 1 snapshots are rejected rather than silently reinterpreted. Exported snapshots and event payloads do not share mutable objects with the engine. This is data validation, not tamper-proof assessment; the static site is a self-study tool.

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
- persistent learner records and backup;
- multi-user/classroom auth.

The first integration milestone should be **authoring memory**, not student personal data: let Jarvis remember project decisions, course maps and review outcomes while the course engine remains the source of lesson truth.
