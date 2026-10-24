import { createPlugin } from './plugin.jsx';

window.__ModuleLoader__.load({
  id: '@local/cell-atlas',
  factory(require) {
    // Keep `require` behind a local alias so the bundler does not try to
    // resolve the host-provided React module at build time.
    const load = require;
    return createPlugin(load('react'));
  },
});
