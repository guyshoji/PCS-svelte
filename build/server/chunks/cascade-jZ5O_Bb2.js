import { w as writeEffect } from './writeEffect-67NF-G-T.js';
import { a as animationSetup } from './animationSetup-aNfz-FCS.js';
import './ssr-8MCLeM_r.js';

const cleanChildText = (elements) => elements.forEach((element) => element.currentNode.textContent = "");
const cascade = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  cleanChildText(elements);
  for (const element of elements) {
    await writeEffect(element, options);
    if (options.keepCursorOnFinish) {
      const isLastElement = elements.indexOf(element) === elements.length - 1;
      !isLastElement && element.currentNode.classList.replace("typing", "finished-typing");
    } else {
      element.currentNode.classList.replace("typing", "finished-typing");
    }
    const cursorHasTimeout = typeof options.keepCursorOnFinish === "number";
    cursorHasTimeout && setTimeout(() => {
      element.currentNode.classList.replace("typing", "finished-typing");
    }, options.keepCursorOnFinish);
  }
  options.dispatch("done");
  return {
    update() {
    },
    destroy() {
    }
  };
};

export { cascade as default };
//# sourceMappingURL=cascade-jZ5O_Bb2.js.map
