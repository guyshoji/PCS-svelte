<script>
	import Fa from 'svelte-fa';
	import IconCard from '$lib/IconCard.svelte';
	import { faComputer, faLandmark, faHandshake, faUser } from '@fortawesome/free-solid-svg-icons'
	let iconCards = [{
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
		message: "It's no secret that there are plenty of problems with policy and the political system. Our projects and initiatives allow members to explore current policy, analyze its effectiveness, and even propose and discuss their own solutions to the current system's shortcomings.",
	},
	{
		icon: faUser,
		header: "Find a Community",
		message: "Political Computer Science hosts some of the most diverse, broad ranged in study, and interesting people you will ever meet. It's a great place to meet individuals you wouldn't always meet in your normal classes and have fun at social events."
	}];
</script>

<div class="h-full flex flex-col px-48 py-11 mt-36">
	<div class="flex flex-col gap-7">
		<h4 class="h4 smallHeader">About Us</h4>
		<h1 class="text-6xl text-center font-bold">Our Mission Statement</h1>
		<div class="flex px-56">
			<p class="h5 text-secondary-300 leading-10 text-center">
				Political Computer Science strives to better understand the intersection of policy and
				technology. From analyzing algorithmic bias to evaluating tech policy, our club recognizes the
				imperfections within the tech industry and fosters conversations about how we can become
				better computer scientists, data scientists, lawyers, and people. We are fueled by passion,
				education, and conversation.
			</p>
		</div>
	</div>
	<div class="mt-32 flex flex-col gap-16">
		<h1 class=" h4 smallHeader">A Space For Students to...</h1>
		<div class="flex flex-row justify-center gap-20 text-center items-center content-center">
			<!--<div class="w-2/5 border p-3">
				<h1>Explore their <b>interest in the intersection between politics and technology</b></h1>
			</div>
			<div class="w-2/5 border p-3">
				Develop skills in <b>computing</b>, <b>political analysis</b>, and <b>problem solving</b>
			</div>
			<div class="w-2/5 border p-3">
				Work with <b>diverse teams</b> on projects that explore <b>solutions</b> to issues in our
				<b>political systems</b>
			</div>
			<div class="w-2/5 border p-3">
				Meet like-minded individuals from <b>various backgrounds</b> and <b>fields of study</b>
			</div>-->
			{#each iconCards as { icon, header, message }}
				<IconCard {icon} {header} {message} />
			{/each}
		</div>
	</div>

	<div>
		<h1 class="h1 mb-6">Time Commitment</h1>
		<div class="flex flex-wrap justify-center gap-4 items-center content-center">
			<div class="border p-3">
				<h2 class="h3">Weekly General Meetings</h2>
				<h3 class="h4">(Thursdays, 8-9 PM)</h3>
				<li>discussions/debates about current events</li>
				<li>guest speaker presentations</li>
				<li>project updates</li>
			</div>
			<div class="border p-3">
				<h2 class="h3">Weekly Project Meetings</h2>
				<h3 class="h4">(varies by project)</h3>
				<li>time, duration, location, and agenda set by your project manager(s)</li>
				<li>changes per semester*</li>
			</div>
			<div class="border p-3">
				<h2 class="h3">Development Workshops</h2>
				<h3 class="h4">(optional)</h3>
				<li>real world CS basics</li>
				<li>data science</li>
				<li>political science</li>
				<li>résumés, internship search assistance</li>
			</div>
			<div class="border p-3">
				<h2 class="h3">Socials</h2>
				<h3 class="h4">(multiple times a year)</h3>
				<li>introduction retreat</li>
				<li>election/debate watch parties</li>
				<li>hikes, biking, excursions</li>
				<li>get together, parties</li>
				<li>end of semester banquet</li>
			</div>
		</div>
	</div>
</div>

<style>
	.smallHeader {
		text-align: center;
		font-weight: bold;
		color: rgb(253 224 71);
	}
</style>
