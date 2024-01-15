import { c as create_ssr_component, v as validate_component, a as add_attribute, i as each, e as escape, x as null_to_empty } from './ssr-8MCLeM_r.js';
import { I as Icon } from './Icon-W_KqShZy.js';
import { F as Fade } from './Footer-J0UkeKLz.js';

const css = {
  code: ".role.svelte-7lgwed{padding-top:0.2rem;padding-bottom:0.2rem;padding-left:0.5rem;padding-right:0.5rem;border-radius:3rem}",
  map: null
};
const MemberCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { roles = ["Member"] } = $$props;
  let { classYear } = $$props;
  let { linkedin } = $$props;
  let { major } = $$props;
  let { layer = "500" } = $$props;
  const determineColor = (role) => {
    if (role == "Member") {
      return " bg-primary-800";
    } else if (role == "Project Manager") {
      return " bg-success-800";
    } else {
      return " bg-warning-800";
    }
  };
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.roles === void 0 && $$bindings.roles && roles !== void 0)
    $$bindings.roles(roles);
  if ($$props.classYear === void 0 && $$bindings.classYear && classYear !== void 0)
    $$bindings.classYear(classYear);
  if ($$props.linkedin === void 0 && $$bindings.linkedin && linkedin !== void 0)
    $$bindings.linkedin(linkedin);
  if ($$props.major === void 0 && $$bindings.major && major !== void 0)
    $$bindings.major(major);
  if ($$props.layer === void 0 && $$bindings.layer && layer !== void 0)
    $$bindings.layer(layer);
  $$result.css.add(css);
  return `${validate_component(Fade, "Fade").$$render(
    $$result,
    {
      visibleOnPageLoad: false,
      classes: `rounded-xl bg-surface-${layer} flex flex-col gap-5 justify-between items-center p-6 h-full`
    },
    {},
    {
      default: () => {
        return `<h2 class="h3 dark:text-white font-bold">${slots.default ? slots.default({}) : ``}</h2> <img${add_attribute("src", img, 0)} class="rounded-full w-3/4" alt="Person Professional Headshot"> <div class="flex flex-row flex-wrap">${each(roles, (role) => {
          return `<div class="px-2 pt-2 text-center"><p class="${escape(null_to_empty("role".concat(determineColor(role))), true) + " svelte-7lgwed"}">${escape(role)}</p> </div>`;
        })}</div> <div class="flex flex-row gap-3 justify-between w-full px-2"><div class="flex flex-col"><p class="text-primary-500 font-bold">Class of ${escape(classYear)}</p> <p class="italic dark:text-white">${escape(major)}</p></div> <a class="flex justify-center content-center items-center hover:text-primary-500 duration-200"${add_attribute("href", linkedin, 0)} target="_blank">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "mdi:linkedin",
            width: "50",
            class: "dark:text-white hover:text-primary-500 hover:color-primary-500 duration-200"
          },
          {},
          {}
        )}</a></div>`;
      }
    }
  )}`;
});

export { MemberCard as M };
//# sourceMappingURL=MemberCard-GfDDX0Nq.js.map
