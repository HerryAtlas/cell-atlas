import { createTransportLessonUI } from './lesson-ui/transport-lesson-ui.js';
import { createFrapLessonUI } from './lesson-ui/frap-lesson-ui.js';
import shell from './lesson-ui/shell.html';
import lessonCSS from './lesson-ui/lesson.css';
import hostCSS from './lesson-host.css';

const factories = { transport: createTransportLessonUI, frap: createFrapLessonUI };
export const hasGuidedLesson = (modelId) => Object.hasOwn(factories, modelId);
const markup = '<button type="button" id="cmLearnEntry" hidden><b></b><em></em></button>' + shell;

// React owns this component's lifecycle. The same deterministic presenter used
// by the standalone site owns only the inner shell; React never reconciles it.
// React comes from DSH, so the production bundle adds no second React runtime.
export function LessonHost({ react: React, modelId, getEngine, controllerRef, onClose, onBook }) {
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    const root = rootRef.current;
    const create = factories[modelId];
    if (!create || !getEngine()) return;
    let mounted = true;
    // A native button keeps modifier/middle clicks inside the plugin as well.
    const bookLink = root.querySelector('#cmLessonBook');
    if (bookLink.tagName === 'A') {
      const bookButton = document.createElement('button');
      bookButton.type = 'button';
      bookButton.id = bookLink.id;
      bookButton.className = bookLink.className;
      bookLink.replaceWith(bookButton);
    }
    const controller = create({ root, getEngine, onBook,
      onClose: () => { if (mounted) onClose(); } });
    // This in-place guide already contains the full lesson rules. The plugin's
    // full manual is available from its own header; never link to a remote site.
    root.querySelector('.cm-lesson-help-link')?.remove();
    root.querySelector('#cmLessonClose').textContent = '返回模型';
    root.querySelector('#cmLessonClose').setAttribute('aria-label', '关闭导学，返回模型');
    controller.open();
    root.querySelector('#cmLessonHelpToggle').focus({ preventScroll: true });
    const shortcut = (event) => {
      // Prevent the atlas's window shortcuts from closing a parent overlay.
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopImmediatePropagation();
        controller.dismiss();
      } else if (event.key === 'Tab') {
        const focusable = [...root.querySelectorAll('button:not(:disabled), input:not(:disabled), a[href], [tabindex="0"]')]
          .filter((element) => element.getClientRects().length > 0);
        const first = focusable[0];
        const last = focusable.at(-1);
        if (first && (!root.contains(document.activeElement)
          || (event.shiftKey ? document.activeElement === first : document.activeElement === last))) {
          event.preventDefault();
          (event.shiftKey ? last : first).focus();
        }
      }
    };
    window.addEventListener('keydown', shortcut, true);
    const release = () => {
      if (!mounted) return;
      mounted = false;
      window.removeEventListener('keydown', shortcut, true);
      controllerRef.current = null;
      controller.dispose(); // flush the final draft; stop timers and listeners
    };
    controllerRef.current = { handlePick: controller.handlePick, dispose: release };
    return release;
  }, [modelId, getEngine, controllerRef, onClose, onBook]);

  return <div className="ca-lesson-host" data-lesson={modelId}>
    <style>{lessonCSS + '\n' + hostCSS}</style>
    <div ref={rootRef} dangerouslySetInnerHTML={{ __html: markup }} />
  </div>;
}
