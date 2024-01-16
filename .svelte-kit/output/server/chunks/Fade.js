import { c as create_ssr_component, e as escape } from "./ssr.js";
const Fade = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let opacity = 0;
  let transformPos = -20;
  let { visibleOnPageLoad = true } = $$props;
  let { fadeTime = 1e3 } = $$props;
  if ($$props.visibleOnPageLoad === void 0 && $$bindings.visibleOnPageLoad && visibleOnPageLoad !== void 0)
    $$bindings.visibleOnPageLoad(visibleOnPageLoad);
  if ($$props.fadeTime === void 0 && $$bindings.fadeTime && fadeTime !== void 0)
    $$bindings.fadeTime(fadeTime);
  return `<div id="container" style="${"opacity: " + escape(opacity, true) + "; transition-duration: 0.7s; transform: translateY(" + escape(transformPos, true) + "px)"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Fade as F
};
