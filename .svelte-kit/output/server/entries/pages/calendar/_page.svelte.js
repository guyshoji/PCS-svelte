import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { a as Fade, b as Footer } from "../../../chunks/Footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="px-10 py-32"><div class="h-screen flex flex-col justify-center items-center px-10">${validate_component(Fade, "Fade").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col gap-7 pt-16 px-5"> <h1 class="text-6xl dark:text-white text-center font-bold" data-svelte-h="svelte-138nse0">Calendar</h1> <p data-svelte-h="svelte-155wak5">Applications will open soon! In the meantime, feel free to fill out our interest form</p> ${validate_component(Fade, "Fade").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="flex flex-row gap-10 justify-center items-center text-center" data-svelte-h="svelte-1sp3z4z"><a class="btn m-auto bg-primary-500 text-center font-bold hover:bg-primary-700 duration-200" href="https://forms.gle/T37mbnapmyJXqgCf9">Interest Form</a> <a class="btn m-auto bg-primary-500 text-center font-bold hover:bg-primary-700 duration-200" href="https://pcs-spring2024.carrd.co/">Virtual Flyer</a></div>`;
        }
      })} <img src="/recruitment.png" alt="Recruitment card"></div>`;
    }
  })}</div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
