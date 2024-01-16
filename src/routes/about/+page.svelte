<script>
	import IconCard from '$lib/IconCard.svelte';
	import { faComputer, faLandmark, faHandshake, faUser } from '@fortawesome/free-solid-svg-icons';
	import Fade from '$lib/Fade.svelte';
	import EventCard from '$lib/EventCard.svelte';
	import Footer from '$lib/Footer.svelte';

	import Icon from '@iconify/svelte';

	let iconCards = [
		{
			icon: faLandmark,
			header: 'Be Interdisciplinary',
			message:
				'Club members can explore their interest in the intersection between politics and technology! We offer a wide range of projects, general meeting topics, and external speakers who have a large breadth of knowledge in interdisciplinary work!'
		},
		{
			icon: faComputer,
			header: 'Develop Technical Skills',
			message:
				'Political Computer Science offers various workshops so members can learn about web development and data analysis tools, how to use git and collaborate on technical projects, and we have many members who are experienced industry. No coding experience required to join!'
		},
		{
			icon: faHandshake,
			header: 'Explore Political Problems',
			message:
				"It's no secret that there are plenty of problems with policy and the political system. Our projects and initiatives allow members to explore current policy, analyze its effectiveness, and even propose and discuss their own solutions to the current system's shortcomings."
		},
		{
			icon: faUser,
			header: 'Find a Community',
			message:
				"Political Computer Science hosts some of the most diverse, broad ranged in study, and interesting people you will ever meet. It's a great place to meet individuals you wouldn't always meet in your normal classes and have fun at social events."
		}
	];

	let eventCards = [
		{
			img: '/meetings.png',
			title: 'General Meetings',
			timeInfo: 'Thursday 8 - 9 PM',
			description:
				'At GMs, we host discussions and debates about current events, often relating to AI and tech policy, have guest speaker presentations, and share project updates with the group.'
		},
		{
			img: '/project.png',
			title: 'Project Meetings',
			timeInfo: 'Weekly, varying by project',
			description:
				'The time requirement, duration, locations, and agenda can vary from project to project. They are a great way to gain experience in technical work, research, or policy analysis!'
		},
		{
			img: '/workshop.JPG',
			title: 'Development Workshops',
			timeInfo: '2 - 3 / month, (optional, but highly recommended)',
			description:
				"We host a few workshops each month focusing on improving our members' skillsets, including resumé and career workshops, data science, web development, and much more!"
		},
		{
			img: '/group-pic.jpeg',
			title: 'Socials',
			timeInfo: '2 - 3 / month, (optional, but highly recommended)',
			description:
				'Socials can vary in type, like watching debates together, hiking, biking, excursions, parties, and of course we have a retreat each semester!'
		}
	];
</script>

<div class="flex ab flex-col px-10">
	<Fade>
		<div class="flex flex-col gap-7">
			<!-- <img src="/group-pic.jpeg" class="m-auto absolute -z-10" /> -->
			<h4 class="h4 text-primary-500 smallHeader">About Us</h4>
			<h1 class="text-6xl text-center font-bold">Our Mission Statement</h1>
			<div class="flex px-10">
				<p class="h5 text-secondary-100 leading-10 text-center">
					Political Computer Science strives to better understand the intersection of policy and
					technology. From analyzing algorithmic bias to evaluating tech policy, our club recognizes
					the imperfections within the tech industry and fosters conversations about how we can
					become better computer scientists, data scientists, lawyers, and people. We are fueled by
					passion, education, and conversation.
				</p>
			</div>
		</div>
	</Fade>
	<Fade visibleOnPageLoad={false}>
		<div class="mt-60 flex flex-col gap-10">
			<h1 class="h4 text-primary-500 smallHeader">A Space For Students to...</h1>
			<div class="cardsGrid p-4 gap-20 text-center">
				{#each iconCards as { icon, header, message }}
					<IconCard {icon} {header} {message} />
				{/each}
			</div>
		</div>
	</Fade>
	<Fade visibleOnPageLoad={false}>
		<div class="mt-48 flex flex-col gap-10">
			<h1 class="h4 text-primary-500 smallHeader">Time Commitment</h1>
			<div class="cardsGrid p-4 gap-20">
				{#each eventCards as { img, title, timeInfo, description }}
					<EventCard {img} {title} {timeInfo} {description} />
				{/each}
			</div>
		</div></Fade
	>

	<Fade visibleOnPageLoad={false}>
		<div class="mt-48 flex flex-col gap-10">
			<h1 class="h4 text-primary-500 smallHeader">Technologies we use</h1>
			<div
				class="flex flex-col gap-5
	rounded-xl bg-surface-500 items-start hover:bg-primary-800
	flex-1 duration-300 overflow-hidden"
			>
				<div class="flex justify-end flex-col gap-6 p-8 h-full">
					<h3 class="p font-bold">
						For those more technical inclined here are the main technologies we use
					</h3>
					<div class="flex flex-wrap gap-2 align-middle">
						<Icon icon="ri:svelte-fill" width="50" />
						<Icon icon="mdi:react" width="50" />
						<Icon icon="ri:supabase-fill" width="50" />
					</div>
				</div>
			</div>
		</div>
	</Fade>
	<Footer />
</div>

<style>
	.smallHeader {
		text-align: center;
		font-weight: bold;
	}

	@media (min-width: 1080px) {
		.ab {
			margin-top: 15%;
		}
	}

	@media (max-width: 1000px) {
		.cardsGrid {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (min-width: 1000px) {
		.cardsGrid {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	@media (max-width: 580px) {
		.ab {
			margin-top: 3rem;
		}
		.cardsGrid {
			grid-template-columns: 1fr;
			/* display: flex; */
			/* flex-direction: column; */
		}
	}
</style>
