import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { a as Fade, b as Footer } from "../../../chunks/Footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><div class="h-screen flex flex-col justify-center items-center">${validate_component(Fade, "Fade").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col gap-7 pt-16 px-5" data-svelte-h="svelte-148rted"> <h1 class="text-6xl dark:text-white text-center font-bold">Calendar</h1> <div class="my-10 m-auto"><h1 class="dark:text-white h2 font-bold">Recruitment</h1> <br> <li class="h4">Jan 15 - 30, Tabling (Catch us on Sproul in a Purple Tent!)</li> <li class="h4">TBD, Infosession 1</li> <li class="h4">TBD Infosession 2</li> <li class="h4">TBD URM Infosession</li> <li class="h4">Jan 30, Application Due</li> <li class="h4">Feb 12, Retreat</li></div></div>`;
    }
  })} ${validate_component(Fade, "Fade").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex" data-svelte-h="svelte-1ukcsw5"><a class="btn m-auto bg-primary-500 text-center font-bold hover:bg-primary-700 duration-200" href="https://docs.google.com/forms/d/e/1FAIpQLSdlxeB7aDMPkHUXnDDHZGcB_OpDgPYVqu5dYh933HKwOiDK_w/viewform?usp=sf_link">Join Us</a></div>`;
    }
  })}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
