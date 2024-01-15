import { a as animationSetup, r as runOnEveryParentUntil } from './animationSetup-aNfz-FCS.js';
import { w as writeEffect, t as typingInterval } from './writeEffect-67NF-G-T.js';
import { u as unwriteEffect } from './unwriteEffect-AS24-mqP.js';
import './ssr-8MCLeM_r.js';

const loopOnce = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  for (const element of elements) {
    const { currentNode, text } = element;
    await writeEffect(element, options);
    const textWithUnescapedAmpersands = text.replaceAll("&", "&amp;");
    const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands;
    if (fullyWritten) {
      options.dispatch("done");
      await typingInterval(options.wordInterval);
      const isLastElement = elements.indexOf(element) === elements.length - 1;
      if (!isLastElement) {
        await unwriteEffect(currentNode, options);
        runOnEveryParentUntil(currentNode, options.parentElement, (element2) => {
          currentNode === element2 ? element2.classList.remove("typing") : element2.classList.remove("finished-typing");
        });
      }
      runOnEveryParentUntil(currentNode, options.parentElement, (element2) => {
        const cursorHasTimeout = typeof options.keepCursorOnFinish === "number";
        cursorHasTimeout && setTimeout(() => {
          element2.classList.replace("typing", "finished-typing");
        }, options.keepCursorOnFinish);
      });
    }
  }
  return {
    update() {
    },
    destroy() {
    }
  };
};

export { loopOnce as default };
//# sourceMappingURL=loopOnce-k0Vqk8nr.js.map
