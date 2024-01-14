import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, t as each } from "../../../chunks/ssr.js";
/* empty css                                                   */
import { b as Fa, F as Fade, a as Footer } from "../../../chunks/Footer.js";
import { faLandmark, faComputer, faHandshake, faUser } from "@fortawesome/free-solid-svg-icons";
const IconCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { header } = $$props;
  let { message } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  return `<div class="flex flex-col gap-5 bg-surface-500 rounded-xl p-8 items-start hover:bg-primary-700 h-full flex-1 duration-300"><div class="bg-primary-700 m-auto rounded-md p-4">${validate_component(Fa, "Fa").$$render($$result, { class: "h3 p-0 dark:text-white", icon }, {}, {})}</div> <h1 class="h3 text-left font-bold">${escape(header)}</h1> <h4 class="p dark:text-white text-left leading-7">${escape(message)}</h4></div>`;
});
const EventCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { title } = $$props;
  let { timeInfo } = $$props;
  let { description } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.timeInfo === void 0 && $$bindings.timeInfo && timeInfo !== void 0)
    $$bindings.timeInfo(timeInfo);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="flex flex-col gap-5 rounded-xl bg-surface-500 items-start hover:bg-primary-800 flex-1 duration-300 overflow-hidden"><div class="w-full"><img class="overflow-hidden"${add_attribute("src", img, 0)}${add_attribute("alt", title, 0)}></div> <div class="flex justify-end flex-col gap-6 px-8 pb-8 h-full"><h2 class="h3 dark:text-white font-bold">${escape(title)}</h2> <h3 class="p font-bold">${escape(timeInfo)}</h3> <p class="p">${escape(description)}</p></div> </div>`;
});
const css = {
  code: ".smallHeader.svelte-rces83{text-align:center;font-weight:bold}@media(min-width: 1080px){.ab.svelte-rces83{margin-top:15%}}@media(max-width: 1000px){.cardsGrid.svelte-rces83{display:grid;grid-template-columns:1fr 1fr}}@media(min-width: 1000px){.cardsGrid.svelte-rces83{display:grid;grid-template-columns:1fr 1fr 1fr 1fr}}@media(max-width: 580px){.ab.svelte-rces83{margin-top:3rem}.cardsGrid.svelte-rces83{grid-template-columns:1fr}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let iconCards = [
    {
      icon: faLandmark,
      header: "Be Interdisciplinary",
      message: "Club members can explore their interest in the intersection between politics and technology! We offer a wide range of projects, general meeting topics, and external speakers who have a large breadth of knowledge in interdisciplinary work!"
    },
    {
      icon: faComputer,
      header: "Develop Technical Skills",
      message: "Political Computer Science offers various workshops so members can learn about web development and data analysis tools, how to use git and collaborate on technical projects, and we have many members who are experienced industry. No coding experience required to join!"
    },
    {
      icon: faHandshake,
      header: "Explore Political Problems",
      message: "It's no secret that there are plenty of problems with policy and the political system. Our projects and initiatives allow members to explore current policy, analyze its effectiveness, and even propose and discuss their own solutions to the current system's shortcomings."
    },
    {
      icon: faUser,
      header: "Find a Community",
      message: "Political Computer Science hosts some of the most diverse, broad ranged in study, and interesting people you will ever meet. It's a great place to meet individuals you wouldn't always meet in your normal classes and have fun at social events."
    }
  ];
  let eventCards = [
    {
      img: "/meetings.png",
      title: "General Meetings",
      timeInfo: "Thursday 8 - 9 PM",
      description: "At GMs we host discussions and debates about current events, often relating to AI and Tech Policy, have guest speaker presentations, and share project updates with the group"
    },
    {
      img: "/project.png",
      title: "Project Meetings",
      timeInfo: "Weekly, varying by project",
      description: "The time requirement, duration, locations, and agenda can vary from project to project. They are a great way to gain experience in technical work, research, or policy analysis!"
    },
    {
      img: "/workshop.JPG",
      title: "Development Workshops",
      timeInfo: "2 - 3 / month, optional",
      description: "We host a few workshops each month focusing on improving our members' skillsets, including resumé and career workshops, data science, web development, and much more!"
    },
    {
      img: "/group-pic.jpeg",
      title: "Socials",
      timeInfo: "2 - 3 / month",
      description: "Socials can vary in type, like watching debates together, hiking, biking, excursions, parties, and of course we have a retreat each semester!"
    }
  ];
  $$result.css.add(css);
  return `<div class="flex ab flex-col px-10 svelte-rces83">${validate_component(Fade, "Fade").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col gap-7" data-svelte-h="svelte-g1ahrh"> <h4 class="h4 text-primary-500 smallHeader svelte-rces83">About Us</h4> <h1 class="text-6xl text-center font-bold">Our Mission Statement</h1> <div class="flex px-10"><p class="h5 text-secondary-100 leading-10 text-center">Political Computer Science strives to better understand the intersection of policy and
					technology. From analyzing algorithmic bias to evaluating tech policy, our club recognizes
					the imperfections within the tech industry and fosters conversations about how we can
					become better computer scientists, data scientists, lawyers, and people. We are fueled by
					passion, education, and conversation.</p></div></div>`;
    }
  })} ${validate_component(Fade, "Fade").$$render($$result, { visibleOnPageLoad: false }, {}, {
    default: () => {
      return `<div class="mt-60 flex flex-col gap-10"><h1 class="h4 text-primary-500 smallHeader svelte-rces83" data-svelte-h="svelte-4t7s7w">A Space For Students to...</h1> <div class="cardsGrid p-4 gap-20 text-center svelte-rces83">${each(iconCards, ({ icon, header, message }) => {
        return `${validate_component(IconCard, "IconCard").$$render($$result, { icon, header, message }, {}, {})}`;
      })}</div></div>`;
    }
  })} ${validate_component(Fade, "Fade").$$render($$result, { visibleOnPageLoad: false }, {}, {
    default: () => {
      return `<div class="mt-48 flex flex-col gap-10"><h1 class="h4 text-primary-500 smallHeader svelte-rces83" data-svelte-h="svelte-wj0jvv">Time Commitment</h1> <div class="cardsGrid p-4 gap-20 svelte-rces83">${each(eventCards, ({ img, title, timeInfo, description }) => {
        return `${validate_component(EventCard, "EventCard").$$render($$result, { img, title, timeInfo, description }, {}, {})}`;
      })}</div></div>`;
    }
  })} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
