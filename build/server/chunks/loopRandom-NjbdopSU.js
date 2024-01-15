import { w as writeAndUnwriteText } from './writeAndUnwriteText-oVbP8G1s.js';
import { a as animationSetup, m as makeNestedStaticElementsVisible, b as rng } from './animationSetup-aNfz-FCS.js';
import './writeEffect-67NF-G-T.js';
import './unwriteEffect-AS24-mqP.js';
import './ssr-8MCLeM_r.js';

let alreadyChoosenTexts = [];
const getRandomElement = (elements) => {
  while (true) {
    const randomIndex = rng(0, elements.length);
    const isTextDifferentFromPrevious = typeof alreadyChoosenTexts === "number" && randomIndex !== alreadyChoosenTexts;
    const isTextFirstTime = Array.isArray(alreadyChoosenTexts) && !alreadyChoosenTexts.includes(randomIndex);
    const hasSingleChildElement = elements.length === 1;
    const shouldAnimate = hasSingleChildElement || isTextFirstTime || isTextDifferentFromPrevious;
    if (shouldAnimate) {
      isTextDifferentFromPrevious && (alreadyChoosenTexts = []);
      alreadyChoosenTexts.push(randomIndex);
      const randomText = elements[randomIndex];
      return randomText;
    }
    const restartRandomizationCycle = alreadyChoosenTexts.length === elements.length;
    restartRandomizationCycle && (alreadyChoosenTexts = alreadyChoosenTexts.pop());
  }
};
const loopRandom = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  while (true) {
    makeNestedStaticElementsVisible(node);
    const element = getRandomElement(elements);
    await writeAndUnwriteText(element, options);
  }
  return {
    update() {
    },
    destroy() {
    }
  };
};

export { loopRandom as default };
//# sourceMappingURL=loopRandom-NjbdopSU.js.map
