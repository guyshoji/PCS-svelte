<script>
	import Fa from 'svelte-fa';
	import IconCard from '$lib/IconCard.svelte';
	import { faComputer, faLandmark, faHandshake, faUser } from '@fortawesome/free-solid-svg-icons';
	import Fade from '$lib/Fade.svelte';
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
</script>

<div class="h-full flex ab flex-col px-1/4 py-1/4">
	<Fade>
		<div class="flex flex-col gap-7">
			<!-- <img src="/group-pic.jpeg" class="m-auto absolute -z-10" /> -->
			<h4 class="h4 dark:text-white color-primary-500 smallHeader">About Us</h4>
			<h1 class="text-6xl dark:text-white text-center font-bold">Our Mission Statement</h1>
			<div class="flex px-10">
				<p class="h5 text-secondary-500 dark:text-secondary-100 leading-10 text-center">
					Political Computer Science strives to better understand the intersection of policy and
					technology. From analyzing algorithmic bias to evaluating tech policy, our club recognizes
					the imperfections within the tech industry and fosters conversations about how we can
					become better computer scientists, data scientists, lawyers, and people. We are fueled by
					passion, education, and conversation.
				</p>
			</div>
		</div>
	</Fade>
	<Fade>
		<div class="mt-60 flex flex-col gap-16">
			<h1 class=" h4 dark:text-white font-bold text-center text-2xl">A Space For Students to...</h1>
			<div class="flex flex-row flex-wrap p-4 gap-20 text-center">
				{#each iconCards as { icon, header, message }}
					<IconCard {icon} {header} {message} />
				{/each}
			</div>
		</div>
	</Fade>
	<Fade>
		<div class="mt-20 flex flex-col gap-16">
			<h1 class=" h4 dark:text-white font-bold text-center text-2xl">Time Commitment</h1>
			<div class="flex flex-row flex-wrap p-4 gap-20">
				<div
					class="flex flex-col gap-5 bg-primary-700 rounded-xl p-8 hover:bg-primary-900 items-start flex-1 duration-300"
				>
					<img src="/meetings.png" class="rounded-xl" />
					<h2 class="h3 dark:text-white font-bold">Weekly General Meetings</h2>
					<h3 class="">(Thursdays, 8-9 PM)</h3>
					<li>discussions/debates about current events</li>
					<li>guest speaker presentations</li>
					<li>project updates</li>
				</div>
				<div
					class="flex flex-col gap-5 bg-primary-700 rounded-xl p-8 hover:bg-primary-900 items-start flex-1 duration-300"
				>
					<img src="/project.png" class="rounded-xl" />
					<h2 class="h3 dark:text-white font-bold">Weekly Project Meetings</h2>
					<h3 class="">(varies by project)</h3>
					<li>time, duration, location, and agenda set by your project manager(s)</li>
					<li>changes per semester*</li>
				</div>
				<div
					class="flex flex-col gap-5 bg-primary-700 rounded-xl p-8 hover:bg-primary-900 items-start flex-1 duration-300"
				>
					<img src="/workshop.JPG" class="rounded-xl" />
					<h2 class="h3 dark:text-white font-bold">Development Workshops</h2>
					<h3 class="">(optional but recomended)</h3>
					<li>real world CS basics</li>
					<li>data science</li>
					<li>political science</li>
					<li>résumés, internship search assistance</li>
				</div>
				<div
					class="flex flex-col gap-5 bg-primary-700 rounded-xl p-8 hover:bg-primary-900 items-start flex-1 duration-300"
				>
					<img src="/group-pic.jpeg" class="rounded-xl" />
					<h2 class="h3 dark:text-white font-bold">Socials</h2>
					<h3 class="">(multiple times a year)</h3>
					<li>introduction retreat</li>
					<li>election/debate watch parties</li>
					<li>hikes, biking, excursions</li>
					<li>get together, parties</li>
					<li>end of semester banquet</li>
				</div>
			</div>
		</div></Fade
	>
</div>

<style>
	.smallHeader {
		text-align: center;
		font-weight: bold;
	}
	@media (min-width: 580px) {
		.ab {
			margin-top: 3rem;
		}
	}
	@media (min-width: 1080px) {
		.ab {
			margin-top: 15%
		}
	}
</style>
