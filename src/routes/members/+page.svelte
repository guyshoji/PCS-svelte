<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import members from './members.json';
	import Fade from '$lib/Fade.svelte';
	import Icon from '@iconify/svelte';
	import Counter from '$lib/Counter.svelte';
	import MemberCard from '$lib/MemberCard.svelte';
	import Footer from '$lib/Footer.svelte';

	// Function to change the image on hover
	/*function setHoverImage(event, imgSilly) {
		event.currentTarget.style.backgroundImage = `url(${imgSilly})`;
	}

	// Function to revert the image on mouse out
	function setOriginalImage(event, img) {
		event.currentTarget.style.backgroundImage = `url(${img})`;
	}*/
</script>

<div class="w-full flex flex-col justify-start items-center gap-10">
	<div class="w-full flex flex-row justify-between txt pt-16">
		<div class="w-full flex flex-col justify-center items-center gap-10 txt text-center">
			<Fade>
				<h1 class="h1 font-bold pt-20">OUR MEMBERS</h1>
			</Fade>
			<Fade>
				<p class="text-center leading-9">
					We're a bustling student-run organization who started in 2018 out of a passion for
					interdisciplinary work, given Cal's rich history of political activism and current
					dominance in the technology industries! We've since been home to over 100 members and are
					so excited to welcome new faces each semester!
				</p>
			</Fade>
			<div class="w-full flex statsContainer justify-between gap-10">
				<Counter targetNum={70} countTime={3000} suffix="+">Alumni</Counter>
				<Counter targetNum={45} countTime={2200} suffix="+">Active Members</Counter>
				<Counter targetNum={13} countTime={2600} suffix="">Semesters</Counter>
			</div>
		</div>
		<div class="w-full pt-20 groupImg">
			<img src="/group-pic.jpeg" alt="Retreat!" class="rounded-2xl w-full" />
		</div>
	</div>
	<Fade visibleOnPageLoad={false}>
		<h1 class="h1 font-bold pt-20">MEET OUR TEAM</h1>
	</Fade>
		<!--{#each members as person}
			<div
				class="c rounded border m-3 flex-col
			 p-3 gap-2"
			>
				<div
					class="bg-cover h-56 w-56 bg-no-repeat bg-center m-auto ig border rounded"
					style="background-image: url({person.img});"
					on:mouseover={(event) => setHoverImage(event, person.imgSilly)}
					on:mouseout={(event) => setOriginalImage(event, person.img)}
				></div>
				<br />
				<h1 class=" dark:text-white text-center font-bold h2">{person.name}</h1>
				<h1 class="h4 dark:text-white text-center">{person.title}</h1>
				<p class="dark:text-white text-center">
					{person.major} <br />Class of {person.graduation}
				</p>
				<a class="flex justify-center content-center" href={person.linkedin} target="_blank">
					<Icon icon="mdi:linkedin" width="50" class="dark:text-white" />
				</a>
			</div>
		{/each}-->
		<div class="w-full grid ca gap-10 px-20">
			{#each members as { name, linkedin, img, imgSilly, major, graduation, roles }}
				<MemberCard {img} classYear={graduation} {linkedin} {major} {roles}>{name}</MemberCard>
			{/each}
		</div>
</div>
<Footer />

<style>
	.ca {
		grid-template-columns: repeat(auto-fill, 25%);
	}
	.ig {
	}
	@media (max-width: 580px) {
		.ca {
			display: flex;
			flex-direction: column;
		}
		.statsContainer {
			flex-direction: column;
		}
		.groupImg {
			display: none;
		}
		.txt {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}

	@media (min-width: 580px) {
		.ca {
			grid-template-columns: repeat(2, 1fr);
		}
		.statsContainer {
			flex-direction: column;
		}
		.groupImg {
			display: none;
		}
		.txt {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
	@media (min-width: 700px) {
		.ca {
			grid-template-columns: repeat(2, 1fr);
		}
		.statsContainer {
			flex-direction: column;
		}
		.groupImg {
			display: none;
		}
		.txt {
			padding-left: 5rem;
			padding-right: 5rem;
		}
	}

	@media (min-width: 930px) {
		.ca {
			grid-template-columns: repeat(3, 1fr);
		}
		.statsContainer {
			flex-direction: row;
		}
		.groupImg {
			display: none;
		}
		.txt {
			padding-left: 8rem;
			padding-right: 8rem;
		}
	}
	@media (min-width: 1300px) {
		.ca {
			grid-template-columns: repeat(4, 1fr);
		}
		.groupImg {
			display: block;
		}
		.txt {
			padding-left: 8rem;
			padding-right: 8rem;
		}
	}
	@media (min-width: 1600px) {
		.ca {
			grid-template-columns: repeat(5, 1fr);
		}
		.txt {
			padding-left: 8rem;
			padding-right: 8rem;
		}
	}
</style>
