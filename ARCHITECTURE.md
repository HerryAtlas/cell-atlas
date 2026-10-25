# Architecture · Course Engine First

Cell Atlas uses a deliberately small **course engine** at the center. The visual scene, an AI tutor, Jarvis, and a memory service are optional layers around it.

```text
Course definition  →  CourseEngine  →  UI / 3D scene
                         │
                         └─ event stream ──→ optional AI tutor
                                             optional Jarvis bridge
                                             optional memory service
```

## 1. Core principle

A lesson must remain completable when every AI service is offline.

- The engine owns step order, evidence, completion and snapshots.
- The UI owns presentation and 3D interaction.
- An AI tutor may explain, ask a follow-up or suggest a hint.
- An AI tutor **cannot** mark a step complete or bypass an exercise.
- The public site remains static and requires no account, backend or model key.

## 2. Layers

| Layer | Responsibility | Current files |
|---|---|---|
| Course content | objectives, structures, mechanism text, experiments, exercises | `src/transport-lesson.js` |
| Course flow | declarative step requirements | `src/transport-flow.js` |
| Engine | deterministic state machine, evidence, completion, snapshot | `src/course-engine.js` |
| Scene | pickable structures, highlight, mechanism state, experiment state | `src/models-scene.js` |
| Lesson UI | four stages, playback, prediction form, exercises, mobile peek | `demo/transport-lesson-ui.js` |
| Tests | engine unit tests | `tests/course-engine.test.mjs` |

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

If an experiment is re-run after a slider changes, the UI revokes the old `experiment.run` evidence first. Completion always reflects the current attempt.

## 4. AI boundary

A future tutor adapter can subscribe to engine events:

```js
engine.subscribe((event, state) => {
  // send a redacted summary to Jarvis or another tutor
});
```

Allowed AI behaviour:

- explain the current structure or mechanism step;
- ask a Socratic follow-up;
- give a graduated hint;
- summarise a misconception after an attempt.

Not allowed:

- dispatch completion events on the learner's behalf;
- write to textbook content without review;
- run shell commands from the public web UI;
- send raw student conversations to a cloud memory service without explicit consent.

If the tutor is unavailable, the static lesson continues normally.

## 5. Jarvis and memory

Jarvis should be a **separate local service**, not part of the public static bundle. A future bridge can expose a narrow API:

```text
GET  /lesson/context
POST /lesson/event
POST /lesson/hint
```

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
