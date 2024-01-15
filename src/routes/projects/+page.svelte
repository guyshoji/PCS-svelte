<script>
	import Fade from '$lib/Fade.svelte';
	import projects from './project.json';
	import Footer from '$lib/Footer.svelte';
	let slideNum = 0;

	const changeSlideNum = () => {
		slideNum = (slideNum + 1) % 4;
	};
	import ProjectCard from '$lib/ProjectCard.svelte';
</script>

<div class="flex ab flex-col px-1/4 py-1/4 mt-36 gap-40 w-full">
	<Fade>
		<div class="flex flex-col gap-7 items-center">
			<h4 class="h4 text-primary-500 smallHeader">Projects</h4>
			<!-- <img src="/group-pic.jpeg" class="m-auto absolute -z-10" /> -->
			<h1 class="text-6xl dark:text-white text-center font-bold">Our Projects System</h1>
			<div class="flex px-10 w-3/4">
				<p class="h5 text-secondary-500 dark:text-secondary-100 leading-10 text-center">
					Political Computer Science's projects system is quite special and different than many
					similar clubs at Berkeley. We put a strong emphasis on growth in an area that an
					individual wants to pursue, and we have opportunity for individual projects with the
					support of experienced/senior members.<br /><br />Read about our two project opportunities
					below, as well as this semester's projects!
				</p>
			</div>
		</div>
	</Fade>
	<Fade visibleOnPageLoad={false}>
		<div class="flex descriptionContainer p-10 gap-10 justify-around items-start">
			<div class="flex flex-col gap-10 justify-between items-center text-center flex-1 p-12">
				<h1 class="h1 font-bold">Projects</h1>
				<p class="leading-10">
					Our "Projects" are the standard type of projects you may imagine that a club might pursue
					during a semester. We have 3 - 4 of these each semester and they range between highly
					technical and extremely interdisciplinary. In the past, projects have included developing
					full stack web applications, training complex models on geospatial data, performing text
					analysis on legislation, and doing research for policy institutions.
					<br />
					<br />
					The typical time commitment for projects will range between 3 - 6 hours per week, but they
					are extremely rewarding for members to learn about topics in which they are interested, gain
					industry experience, and get to collaborate with a diverse and interesting team! Feel free
					to read about the four projects that will be running in the Spring 2024 semester below.
				</p>
			</div>
			<div class="flex flex-col gap-10 justify-between items-center text-center flex-1 p-12">
				<h1 class="h1 font-bold">Initiatives</h1>
				<p class="leading-10">
					Initiatives are what make our projects system special. They were introduced in the Fall
					2023 semester to provide a more individualistic approach for members who wanted to pursue
					their own ideas. Members who run an initiative can work alone or with a friend and will
					attend weekly "accelerator meetings" with our initiatives chair. They will also have
					mentors who are experienced in the areas of expertise required of their initative to help
					them reach their goals.
					<br />
					<br />
					Often, intiatives are great ways to allow members to break into the data science or computer
					science work while still allowing them to set their own pace, but with support. Past examples
					have included data scraping and analysis ideas, and even a food-scarcity analysis initiative
					which has evolved into one of the Spring 2024 semester's projects!
				</p>
			</div>
		</div>
	</Fade>
	<div>
		<h1 class="text-6xl dark:text-white text-center font-bold">Current Projects</h1>
	</div>
	<div class="flex flex-col gap-10 p-10 w-full">
		{#each projects as { name, projectManagers, description }}
		<div class="flex-1">
			<ProjectCard {name} {projectManagers} {description} />
		</div>
		{/each}
	</div>
	<Footer />
</div>


<style>
	.smallHeader {
		text-align: center;
		font-weight: bold;
	}

	@media (min-width: 1300px) {
		.descriptionContainer {
			flex-direction: row;
		}
	}
	@media (max-width: 1300px) {
		.descriptionContainer {
			flex-direction: column;
		}
	}
</style>
