import { c as create_ssr_component, e as escape, x as null_to_empty, t as each, v as validate_component } from "../../../chunks/ssr.js";
import { F as Fade, a as Footer } from "../../../chunks/Footer.js";
import { M as MemberCard } from "../../../chunks/MemberCard.js";
const projects = [
  {
    name: "Food Scarity Modeling Application",
    projectManagers: [
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
      }
    ],
    description: "TBD"
  },
  {
    name: "Caelyn's Project",
    projectManagers: [
      {
        name: "Caelyn Carlson",
        roles: [
          "Project Manager",
          "Member"
        ],
        linkedin: "",
        img: "/pcs-logo.png",
        imgSilly: "/group-pic.jpeg",
        major: "Rhetoric",
        graduation: "2024"
      }
    ],
    description: "TBD"
  },
  {
    name: "Data Science Circle",
    projectManagers: [
      {
        name: "Natasha Dhar",
        roles: [
          "Project Manager",
          "Member"
        ],
        linkedin: "",
        img: "/pcs-logo.png",
        imgSilly: "/group-pic.jpeg",
        major: "Data Science",
        graduation: "2025"
      },
      {
        name: "Mia Schwinghammer",
        roles: [
          "Project Manager",
          "Member"
        ],
        linkedin: "",
        img: "/pcs-logo.png",
        imgSilly: "/group-pic.jpeg",
        major: "Computer Science",
        graduation: "2025"
      }
    ],
    description: "The Data Science Circle is a project that is run every year that helps members who don't have experience break into the world of Data Science with weekly topics covered that would normally be found in Data 100 and above. Members get to work in smaller groups to pursue a data analysis project on a dataset of their choice and will gain industry level experience in python, with some experience in R and SQL as well!"
  },
  {
    name: "Tech Policy Pentagon",
    projectManagers: [
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
      }
    ],
    description: "The Tech Policy Pentagon is inspired by the Data Science Circle and new this semester. Members will have the opportunity to do a deep dive into tech policy in the US and abroad, and perform their own policy analysis project, presenting a deliverable of a policy proposal at the end of the semester!"
  }
];
const css$1 = {
  code: "@media(max-width: 1080px){.fullContainer.svelte-1mlcq6z{flex-direction:column}.pm.svelte-1mlcq6z,.pms.svelte-1mlcq6z{flex-direction:column;max-width:100%}}@media(max-width: 1300px) and (min-width: 1080px){.fullContainer.svelte-1mlcq6z{flex-direction:row\r\n		}.pm.svelte-1mlcq6z{max-width:33.3%}.pms.svelte-1mlcq6z{max-width:66.7%}}@media(min-width: 1100px){.fullContainer.svelte-1mlcq6z{flex-direction:row}.pm.svelte-1mlcq6z{max-width:25%}.pms.svelte-1mlcq6z{max-width:50%}}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectManagers } = $$props;
  let { name } = $$props;
  let { description } = $$props;
  let pmClass = "pm";
  if (projectManagers.length != 1) {
    pmClass = "pms";
  }
  if ($$props.projectManagers === void 0 && $$bindings.projectManagers && projectManagers !== void 0)
    $$bindings.projectManagers(projectManagers);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$1);
  return `<div class="flex justify-between align-center bg-surface-600 rounded-xl gap-10 p-10 w-full fullContainer svelte-1mlcq6z"><div class="${escape(null_to_empty(`flex flex-col justify-start align-left gap-10`), true) + " svelte-1mlcq6z"}"><h2 class="h2 font-bold">${escape(name)}</h2> <h3 class="p">${escape(description)}</h3></div> <div class="${escape(null_to_empty(`flex justify-center align-right gap-10 ${pmClass}`), true) + " svelte-1mlcq6z"}">${each(projectManagers, ({ name: name2, roles, linkedin, img, major, graduation }) => {
    return `${validate_component(MemberCard, "MemberCard").$$render(
      $$result,
      {
        img,
        roles,
        classYear: graduation,
        linkedin,
        major,
        layer: "500"
      },
      {},
      {
        default: () => {
          return `${escape(name2)}`;
        }
      }
    )}`;
  })}</div> </div>`;
});
const css = {
  code: ".smallHeader.svelte-jfaoe6{text-align:center;font-weight:bold}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="flex ab flex-col px-1/4 py-1/4 mt-36 gap-40 w-full">${validate_component(Fade, "Fade").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col gap-7 items-center" data-svelte-h="svelte-1s8gek3"><h4 class="h4 text-primary-500 smallHeader svelte-jfaoe6">Projects</h4>  <h1 class="text-6xl dark:text-white text-center font-bold">Our Projects System</h1> <div class="flex px-10 w-3/4"><p class="h5 text-secondary-500 dark:text-secondary-100 leading-10 text-center">Political Computer Science&#39;s projects system is quite special and different than many
					similar clubs at Berkeley. We put a strong emphasis on growth in an area that an
					individual wants to pursue, and we have opportunity for individual projects with the
					support of experienced/senior members.<br><br>Read about our two project opportunities
					below, as well as this semester&#39;s projects!</p></div></div>`;
    }
  })} ${validate_component(Fade, "Fade").$$render($$result, { visibleOnPageLoad: false }, {}, {
    default: () => {
      return `<div class="flex flex-row p-10 gap-10 justify-around items-start" data-svelte-h="svelte-19q1baw"><div class="flex flex-col gap-10 justify-between items-center text-center flex-1 p-12"><h1 class="h1 font-bold">Projects</h1> <p class="leading-10">Our &quot;Projects&quot; are the standard type of projects you may imagine that a club might pursue
					during a semester. We have 3 - 4 of these each semester and they range between highly
					technical and extremely interdisciplinary. In the past, projects have included developing
					full stack web applications, training complex models on geospatial data, performing text
					analysis on legislation, and doing research for policy institutions.
					<br> <br>
					The typical time commitment for projects will range between 3 - 6 hours per week, but they
					are extremely rewarding for members to learn about topics in which they are interested, gain
					industry experience, and get to collaborate with a diverse and interesting team! Feel free
					to read about the four projects that will be running in the Spring 2024 semester below.</p></div> <div class="flex flex-col gap-10 justify-between items-center text-center flex-1 p-12"><h1 class="h1 font-bold">Initiatives</h1> <p class="leading-10">Initiatives are what make our projects system special. They were introduced in the Fall
					2023 semester to provide a more individualistic approach for members who wanted to pursue
					their own ideas. Members who run an initiative can work alone or with a friend and will
					attend weekly &quot;accelerator meetings&quot; with our initiatives chair. They will also have
					mentors who are experienced in the areas of expertise required of their initative to help
					them reach their goals.
					<br> <br>
					Often, intiatives are great ways to allow members to break into the data science or computer
					science work while still allowing them to set their own pace, but with support. Past examples
					have included data scraping and analysis ideas, and even a food-scarcity analysis initiative
					which has evolved into one of the Spring 2024 semester&#39;s projects!</p></div></div>`;
    }
  })} <div data-svelte-h="svelte-4p08vb"><h1 class="text-6xl dark:text-white text-center font-bold">Current Projects</h1></div> <div class="flex flex-col gap-10 p-10 w-full">${each(projects, ({ name, projectManagers, description }) => {
    return `<div class="flex-1">${validate_component(ProjectCard, "ProjectCard").$$render($$result, { name, projectManagers, description }, {}, {})} </div>`;
  })}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
