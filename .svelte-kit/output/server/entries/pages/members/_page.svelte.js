import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, t as each } from "../../../chunks/ssr.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { F as Fade, a as Footer } from "../../../chunks/Footer.js";
import "../../../chunks/Icon.js";
import { M as MemberCard } from "../../../chunks/MemberCard.js";
const members = [
  {
    name: "Miller Jaquet",
    roles: [
      "President",
      "Member"
    ],
    linkedin: "https://www.linkedin.com/in/miller-jaquet/",
    img: "/Members/miller-prof.png",
    imgSilly: "/group-pic.jpeg",
    major: "Interdisciplinary Studies",
    graduation: "2025"
  },
  {
    name: "Rohit Jha",
    roles: [
      "External Vice President",
      "Member"
    ],
    linkedin: "https://www.linkedin.com/in/rohitjha2003/",
    img: "/pcs-logo.png",
    imgSilly: "/group-pic.jpeg",
    major: "Computer Science, Data Science, Statistics",
    graduation: "2025"
  },
  {
    name: "Iman Qureshi",
    roles: [
      "Internal Vice President",
      "Member"
    ],
    linkedin: "",
    img: "/pcs-logo.png",
    imgSilly: "/group-pic.jpeg",
    major: "",
    graduation: "2025"
  },
  {
    name: "Noah Abji",
    roles: [
      "Projects Vice President",
      "Member"
    ],
    linkedin: "https://www.linkedin.com/in/noah-abji-418b7321b",
    img: "/Members/noah-prof.png",
    imgSilly: "/noah-prof.png",
    major: "Computer Science",
    graduation: "2026"
  },
  {
    name: "Carisma De Anda",
    roles: [
      "Development Vice President",
      "Member"
    ],
    linkedin: "",
    img: "/pcs-logo.png",
    imgSilly: "/group-pic.jpeg",
    major: "",
    graduation: "2026"
  },
  {
    name: "Anya Danes",
    roles: [
      "Recruitment & Retention Chair",
      "Member"
    ],
    linkedin: "",
    img: "/pcs-logo.png",
    imgSilly: "/group-pic.jpeg",
    major: "",
    graduation: "2027"
  },
  {
    name: "Gisele DeWitt",
    roles: [
      "Social Chair",
      "Member"
    ],
    linkedin: "https://www.linkedin.com/in/gisele-dewitt-55b75a210/",
    img: "/Members/gisele-prof.jpg",
    imgSilly: "/group-pic.jpeg",
    major: "Political Economy & Statistics",
    graduation: "2025"
  },
  {
    name: "Stephen Okita",
    roles: [
      "Workshops Chair",
      "Member"
    ],
    linkedin: "https://www.linkedin.com/in/stephen-okita-a9427b1b2/",
    img: "/Members/stephen-prof.jpg",
    imgSilly: "/Members/stephen-silly.jpg",
    major: "Philosophy & CS",
    graduation: "2027"
  },
  {
    name: "Divit Chopra",
    roles: [
      "Initiatives Chair",
      "Project Manager",
      "Member"
    ],
    linkedin: "",
    img: "/pcs-logo.png",
    imgSilly: "/group-pic.jpeg",
    major: "MET",
    graduation: "2027"
  },
  {
    name: "Billy Pierce",
    roles: [
      "Not Our President",
      "Project Manager",
      "Member"
    ],
    linkedin: "",
    img: "/pcs-logo.png",
    imgSilly: "/group-pic.jpeg",
    major: "MET",
    graduation: "2024"
  },
  {
    name: "Kailen Grottel-Brown",
    title: [
      "Member"
    ],
    linkedin: "www.linkedin.com/in/kailen-gbrown",
    img: "/Members/kailen-prof.jpeg",
    imgSilly: "/Members/Kailen-silly.jpg",
    major: "Political Science, Public Policy (Minor)",
    graduation: "2025"
  },
  {
    name: "Emile Shah",
    title: [
      "Member"
    ],
    linkedin: "https://www.linkedin.com/in/emile-shah/",
    img: "/Members/emile-prof.jpg",
    imgSilly: "/Members/emile-prof.jpg",
    major: "Data Science & Political Science",
    graduation: "2027"
  },
  {
    name: "Andrew Chen",
    title: [
      "Senior Member"
    ],
    linkedin: "https://www.linkedin.com/in/andrewchen04",
    img: "/Members/andrew-prof.jpeg",
    imgSilly: "/Members/andrew-prof.jpeg",
    major: "Political Science & Psychology",
    graduation: "2024"
  },
  {
    name: "Carolyn Wang",
    title: [
      "Member"
    ],
    linkedin: "https://www.linkedin.com/in/carolyn-wang-jy/",
    img: "/Members/carolyn-prof.jpg",
    imgSilly: "/Members/carolyn-prof.jpg",
    major: "Computer Science",
    graduation: "2027"
  },
  {
    name: "Mark Verzhbinsky",
    title: [
      "Member"
    ],
    linkedin: "https://www.linkedin.com/in/mark-verzhbinsky-920059232",
    img: "/Members/mark-prof.jpeg",
    imgSilly: "/Members/mark-prof.jpeg",
    major: "Political Science",
    graduation: "2025"
  }
];
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classes = "h1 font-bold text-primary-500" } = $$props;
  let { startingNum = 0 } = $$props;
  let { targetNum } = $$props;
  let { countTime = 3e3 } = $$props;
  let { suffix = "" } = $$props;
  let displayedNum = startingNum;
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.startingNum === void 0 && $$bindings.startingNum && startingNum !== void 0)
    $$bindings.startingNum(startingNum);
  if ($$props.targetNum === void 0 && $$bindings.targetNum && targetNum !== void 0)
    $$bindings.targetNum(targetNum);
  if ($$props.countTime === void 0 && $$bindings.countTime && countTime !== void 0)
    $$bindings.countTime(countTime);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  return `${validate_component(Fade, "Fade").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col gap-4 justify-center items-center text-center"><h1${add_attribute("class", classes, 0)}>${escape(displayedNum)}${escape(suffix)}</h1> <h2 class="h3">${slots.default ? slots.default({}) : ``}</h2></div>`;
    }
  })}`;
});
const css = {
  code: ".ca.svelte-1cd5inn{grid-template-columns:repeat(auto-fill, 25%)}@media(max-width: 580px){.ca.svelte-1cd5inn{display:flex;flex-direction:column}.statsContainer.svelte-1cd5inn{flex-direction:column}.groupImg.svelte-1cd5inn{display:none}.txt.svelte-1cd5inn{padding-left:2rem;padding-right:2rem}}@media(min-width: 580px){.ca.svelte-1cd5inn{grid-template-columns:repeat(2, 1fr)}.statsContainer.svelte-1cd5inn{flex-direction:column}.groupImg.svelte-1cd5inn{display:none}.txt.svelte-1cd5inn{padding-left:2rem;padding-right:2rem}}@media(min-width: 700px){.ca.svelte-1cd5inn{grid-template-columns:repeat(2, 1fr)}.statsContainer.svelte-1cd5inn{flex-direction:column}.groupImg.svelte-1cd5inn{display:none}.txt.svelte-1cd5inn{padding-left:5rem;padding-right:5rem}}@media(min-width: 930px){.ca.svelte-1cd5inn{grid-template-columns:repeat(3, 1fr)}.statsContainer.svelte-1cd5inn{flex-direction:row}.groupImg.svelte-1cd5inn{display:none}.txt.svelte-1cd5inn{padding-left:8rem;padding-right:8rem}}@media(min-width: 1300px){.ca.svelte-1cd5inn{grid-template-columns:repeat(4, 1fr)}.groupImg.svelte-1cd5inn{display:block}.txt.svelte-1cd5inn{padding-left:8rem;padding-right:8rem}}@media(min-width: 1600px){.ca.svelte-1cd5inn{grid-template-columns:repeat(5, 1fr)}.txt.svelte-1cd5inn{padding-left:8rem;padding-right:8rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="w-full flex flex-col justify-start items-center gap-10"><div class="w-full flex flex-row justify-between txt svelte-1cd5inn"><div class="w-full flex flex-col justify-center items-center gap-10 txt text-center svelte-1cd5inn">${validate_component(Fade, "Fade").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="h1 font-bold pt-20" data-svelte-h="svelte-5587uh">OUR MEMBERS</h1>`;
    }
  })} ${validate_component(Fade, "Fade").$$render($$result, {}, {}, {
    default: () => {
      return `<p class="text-center leading-9" data-svelte-h="svelte-1yf5bh6">We&#39;re a bustling student-run organization who started in 2018 out of a passion for
					interdisciplinary work, given Cal&#39;s rich history of political activism and current
					dominance in the technology industries! We&#39;ve since been home to over 100 members and are
					so excited to welcome new faces each semester!</p>`;
    }
  })} <div class="w-full flex statsContainer justify-between gap-10 svelte-1cd5inn">${validate_component(Counter, "Counter").$$render(
    $$result,
    {
      targetNum: 70,
      countTime: 3e3,
      suffix: "+"
    },
    {},
    {
      default: () => {
        return `Alumni`;
      }
    }
  )} ${validate_component(Counter, "Counter").$$render(
    $$result,
    {
      targetNum: 45,
      countTime: 2200,
      suffix: "+"
    },
    {},
    {
      default: () => {
        return `Active Members`;
      }
    }
  )} ${validate_component(Counter, "Counter").$$render(
    $$result,
    {
      targetNum: 13,
      countTime: 2600,
      suffix: ""
    },
    {},
    {
      default: () => {
        return `Semesters`;
      }
    }
  )}</div></div> <div class="w-full pt-20 groupImg svelte-1cd5inn" data-svelte-h="svelte-1560d0e"><img src="/group-pic.jpeg" alt="Retreat!" class="rounded-2xl w-full"></div></div> ${validate_component(Fade, "Fade").$$render($$result, { visibleOnPageLoad: false }, {}, {
    default: () => {
      return `<h1 class="h1 font-bold pt-20" data-svelte-h="svelte-nbayjm">MEET OUR TEAM</h1>`;
    }
  })}  <div class="w-full grid ca gap-10 px-20 svelte-1cd5inn">${each(members, ({ name, linkedin, img, imgSilly, major, graduation, roles }) => {
    return `${validate_component(MemberCard, "MemberCard").$$render(
      $$result,
      {
        img,
        classYear: graduation,
        linkedin,
        major,
        roles
      },
      {},
      {
        default: () => {
          return `${escape(name)}`;
        }
      }
    )}`;
  })}</div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
