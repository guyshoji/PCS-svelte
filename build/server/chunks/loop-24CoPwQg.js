import { w as writeAndUnwriteText } from './writeAndUnwriteText-oVbP8G1s.js';
import { a as animationSetup, m as makeNestedStaticElementsVisible } from './animationSetup-aNfz-FCS.js';
import './writeEffect-67NF-G-T.js';
import './unwriteEffect-AS24-mqP.js';
import './ssr-8MCLeM_r.js';

const loop = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  while (true) {
    makeNestedStaticElementsVisible(node);
    for (const element of elements)
      await writeAndUnwriteText(element, options);
  }
  return {
    update() {
    },
    destroy() {
    }
  };
};

export { loop as default };
//# sourceMappingURL=loop-24CoPwQg.js.map
