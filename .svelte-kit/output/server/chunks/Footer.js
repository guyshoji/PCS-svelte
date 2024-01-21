import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "./ssr.js";
/* empty css                                     */
import { faInstagram, faMedium, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Fade = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let opacity = 0;
  let transformPos = -20;
  let { visibleOnPageLoad = true } = $$props;
  let { fadeTime = 1e3 } = $$props;
  let { classes = "" } = $$props;
  visibleOnPageLoad = true;
  if ($$props.visibleOnPageLoad === void 0 && $$bindings.visibleOnPageLoad && visibleOnPageLoad !== void 0)
    $$bindings.visibleOnPageLoad(visibleOnPageLoad);
  if ($$props.fadeTime === void 0 && $$bindings.fadeTime && fadeTime !== void 0)
    $$bindings.fadeTime(fadeTime);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `<div id="container" style="${"opacity: " + escape(opacity, true) + "; transition-duration: 0.7s; transform: translateY(" + escape(transformPos, true) + "px)"}"${add_attribute("class", classes, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
function getFontSize(size) {
  if (size && size !== "lg" && size !== "sm" && size !== "xs") {
    return size.replace("x", "em");
  }
  return "";
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  if (typeof scale === "string") {
    scale = parseFloat(scale);
  }
  if (typeof translateX === "string") {
    translateX = parseFloat(translateX);
  }
  if (typeof translateY === "string") {
    translateY = parseFloat(translateY);
  }
  const x = `${translateX * translateTimes}${translateUnit}`;
  const y = `${translateY * translateTimes}${translateUnit}`;
  let output = `translate(${x},${y}) scale(${flipX * scale},${flipY * scale})`;
  if (rotate) {
    output += ` rotate(${rotate}${rotateUnit})`;
  }
  return output;
}
const css$1 = {
  code: ".svelte-fa-base{height:1em;overflow:visible;transform-origin:center;vertical-align:-0.125em}.svelte-fa-fw{text-align:center;width:1.25em}.svelte-fa-pull-left.svelte-bvo74f{float:left}.svelte-fa-pull-right.svelte-bvo74f{float:right}.svelte-fa-size-lg.svelte-bvo74f{font-size:1.33333em;line-height:0.75em;vertical-align:-0.225em}.svelte-fa-size-sm.svelte-bvo74f{font-size:0.875em}.svelte-fa-size-xs.svelte-bvo74f{font-size:0.75em}.spin.svelte-bvo74f{animation:svelte-bvo74f-spin 2s 0s infinite linear}.pulse.svelte-bvo74f{animation:svelte-bvo74f-spin 1s infinite steps(8)}@keyframes svelte-bvo74f-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let i;
  let transform;
  let fontSize;
  let fullStyle;
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = void 0 } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = void 0 } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css$1);
  i = icon && icon.icon || [0, 0, "", [], ""];
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  fontSize = getFontSize(size);
  fullStyle = (fontSize ? `font-size:${fontSize}` : "") + (style ? `; ${style}` : "");
  return `${i[4] ? `<svg${add_attribute("id", id || void 0, 0)} class="${[
    "svelte-fa svelte-fa-base " + escape(clazz, true) + " svelte-bvo74f",
    (pulse ? "pulse" : "") + " " + (size === "lg" ? "svelte-fa-size-lg" : "") + " " + (size === "sm" ? "svelte-fa-size-sm" : "") + " " + (size === "xs" ? "svelte-fa-size-xs" : "") + " " + (fw ? "svelte-fa-fw" : "") + " " + (pull === "left" ? "svelte-fa-pull-left" : "") + " " + (pull === "right" ? "svelte-fa-pull-right" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", fullStyle, 0)} viewBox="${"0 0 " + escape(i[0], true) + " " + escape(i[1], true)}" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g transform="${"translate(" + escape(i[0] / 2, true) + " " + escape(i[1] / 2, true) + ")"}" transform-origin="${escape(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>` : ` <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path> <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
const css = {
  code: "@media(max-width: 580px){.a.svelte-32c85l{gap:0.5rem}}@media(max-width: 800px){.container.svelte-32c85l{flex-direction:column;gap:2rem}}@media(min-width: 800px){.container.svelte-32c85l{flex-direction:row;gap:5rem}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="w-full flex flex-col justify-between pt-20 pb-5 relative z-50 bg-surface-900"><div class="w-full bg-primary-700 h-px"></div> <div class="flex container justify-evenly a svelte-32c85l" data-svelte-h="svelte-idaokw"><div class="flex flex-col gap-6 p-10 font-bold"><a class="hover:font-normal dark:text-white" href="/"><p>Home</p></a> <a class="hover:font-normal dark:text-white" href="/about"><p>About Us</p></a> <a class="hover:font-normal dark:text-white" href="/projects"><p>Projects</p></a> <a class="hover:font-normal dark:text-white" href="/members"><p>Members</p></a> <a class="hover:font-normal dark:text-white" href="/editorials"><p>Editorials</p></a> <a class="hover:font-normal dark:text-white" href="/calendar"><p>Recruitment Info</p></a> <div><a class="bg-primary-500 py-2 px-4 w-auto rounded-full" href="https://pcs-spring2024.carrd.co/">Join Us</a></div></div> <div class="flex flex-col gap-5 p-10"><p class="p font-bold">CONTACT</p> <a href="mailto:pcs.berkeley@gmail.com" class="p underline hover:text-primary-500 duration-200">pcs.berkeley@gmail.com</a> <p class="p">University of California, Berkeley</p> <p class="p">Berkeley, CA</p></div></div> <div class="w-full bg-primary-700 h-px"></div> <div class="flex container justify-around pt-6 svelte-32c85l"><p class="p text-center" data-svelte-h="svelte-14zj40v">Copyright @ 2024 Political Computer Science @ Berkeley. All rights reserved.</p> <div class="flex flex-row justify-center items-center gap-8"><a href="https://www.instagram.com/pcs_berkeley/" target="blank">${validate_component(Fa, "Fa").$$render(
    $$result,
    {
      class: "h3 p-0 dark:text-white",
      icon: faInstagram
    },
    {},
    {}
  )}</a> <a href="https://medium.com/@pcsberkeley" target="blank">${validate_component(Fa, "Fa").$$render(
    $$result,
    {
      class: "h3 p-0 dark:text-white",
      icon: faMedium
    },
    {},
    {}
  )}</a> <a href="https://www.linkedin.com/company/political-computer-science" target="blank">${validate_component(Fa, "Fa").$$render(
    $$result,
    {
      class: "h3 p-0 dark:text-white",
      icon: faLinkedin
    },
    {},
    {}
  )}</a></div></div> </div>`;
});
export {
  Fa as F,
  Fade as a,
  Footer as b
};
