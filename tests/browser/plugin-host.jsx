import React from 'react';
import { createRoot } from 'react-dom/client';

// Only the DSH slot/loader boundary is simulated. The tested code is client.js,
// including createPlugin, SectionModelViewer, LessonHost and the real renderer.
window.__ModuleLoader__ = {
  load({ factory }) {
    const components = [];
    const plugin = factory((name) => {
      if (name !== 'react') throw new Error('Unexpected host dependency: ' + name);
      return React;
    });
    plugin.apply({
      get: () => null,
      effect: (fn) => fn(),
      slots: {
        inject: (_, fn) => fn(),
        register: (slot, Component) => {
          components.push({ id: slot.id || slot.name, Component });
          return () => {};
        },
      },
    });
    createRoot(document.getElementById('plugin-root')).render(
      <React.StrictMode>{components.map(({ id, Component }) => <Component key={id} />)}</React.StrictMode>
    );
  },
};
