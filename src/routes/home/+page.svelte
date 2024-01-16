<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/SplashScene.svelte';
	import Fade from '$lib/Fade.svelte';
	import Footer from '$lib/Footer.svelte';
	import TiltDivider from '$lib/TiltDivider.svelte';
	import Fa from 'svelte-fa';
	import {
		faGoogle,
		faApple,
		faAndroid,
		faMicrosoft,
		faCcVisa
	} from '@fortawesome/free-brands-svg-icons';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let platitudes = [
		'A community dedicated to diverse thought.',
		'A community built for equity. ',
		'A community of innovators.',
		'A community for everyone.',
		'A community paving the path for ethical computing'
	];

	let memberDestinations = [faGoogle, faApple, faAndroid, faMicrosoft, faCcVisa];

	let scrollToElement: HTMLDivElement;

	const handleClick = () => {
		// Scroll to the specified element when the button is clicked
		scrollToElement.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<div class="w-full h-screen absolute z-0">
	<div class="animation">
		<Canvas>
			<Scene />
		</Canvas>
	</div>
</div>
<div class="w-full h-screen relative z-10">
	<div class="typewriter select-none flex flex-col gap-20 pl-16 justify-center items-center">
		<Fade>
			<div class="flex flex-col gap-4 justify-center items-start text-left">
				<h1 class="pcsHeader dark:text-white font-bold">Political Computer Science @ Berkeley</h1>
				<Typewriter mode={'loop'} interval={70}>
					{#each platitudes as platitude}
						<h1 class=" font-bold text-lg my-3 mr-3 ml-1 drop-shadow-xl">{platitude}</h1>
					{/each}
				</Typewriter>
				<div class="flex flex-row justify-center items-start gap-4">
					<a
						class="bg-primary-600 text-center font-bold flex cursor-pointer rounded-full px-4 py-2 hover:bg-primary-700 duration-200"
						href="https://docs.google.com/forms/d/e/1FAIpQLSdLTjL76KESHNkkE-H5BRoGimma8ja0H55lt1-8KsSIzirRdQ/viewform"
						>Join Us</a
					>
					<button
						class="bg-primary-600 text-center font-bold flex cursor-pointer rounded-full px-4 py-2 hover:bg-primary-700 duration-200"
						on:click={handleClick}
					>
						Learn More
					</button>
				</div>
			</div>
		</Fade>
	</div>
	<TiltDivider />
</div>
<div
	class="flex flex-col justify-center items-center text-center w-full relative bg-surface-900 z-50 gap-10 py-20"
	bind:this={scrollToElement}
>
	<div class="flex text-image justify-evenly gap-10">
		<div class="flex flex-col gap-10 px-12 flex-1 text-center justify-center items-center">
			<h1 class="h1 font-bold">Who Are We?</h1>
			<p class="p leading-10">
				Political Computer Science @ Berkeley is a club dedicated to exploring interdisciplinary
				work connecting the technology and political fields. Don't be fooled, we have plenty of
				individuals with a strong tech background and host several web development/data science
				project each semester, but we also have room for individuals to explore non-technical
				projects relating to tech policy, and even code tools to help inform others about
				government.
			</p>
			<div>
				<a
					class="bg-primary-600 text-center font-bold flex cursor-pointer rounded-full px-4 py-2 hover:bg-primary-700 duration-200"
					href="/about">About Us</a
				>
			</div>
		</div>
		<div class="p-10 flex-1 flex flex-col justify-center items-center">
			<img src="/meetings.png" alt="General Meetings" />
		</div>
	</div>
	<div class="flex flex-col gap-10 w-3/4 items-center justify-center text-center">
		<div class="w-1/6 bg-primary-500 h-0.5 mt-12"></div>
		<h1 class="h1 font-bold pt-20 leading-10">Spring 2024 Recruitment</h1>
		<p class="p leading-10">
			Spring 2024 recruitment has started, and applications will open soon! See the info below and
			feel free to explore our virtual recruitment carrd, and feel free to fill out our interest form for updates!
		</p>
		<img src="/recruitment.png" alt="Recruitment card" />
		<div class="flex flex-row gap-10">
			<a
				class="bg-primary-600 text-center font-bold flex cursor-pointer rounded-full px-4 py-2 hover:bg-primary-700 duration-200"
				href="https://pcs-spring2024.carrd.co/">Virtual Carrd</a
			>
            <a
				class="bg-primary-600 text-center font-bold flex cursor-pointer rounded-full px-4 py-2 hover:bg-primary-700 duration-200"
				href="https://forms.gle/T37mbnapmyJXqgCf9">Interest Form</a
			>
		</div>
	</div>
</div>
<div
	class="flex flex-col gap-10 p-5 items-center justify-center text-center w-full z-50 relative bg-surface-900"
>
	<div class="w-1/6 bg-primary-500 h-0.5 mb-12"></div>

	<h1 class="h1 font-bold">Why Join?</h1>
	<div class="joinContainer flex">
		<div class="flex flex-col gap-10 px-10 justify-start items-center text-center flex-1">
			<h2 class="h2 font-bold">Our Culture</h2>
			<p class="leading-10">
				PCS strives to offer an inclusive, diverse, and interesting community. We host regular
				workshops and are sure to discuss the important currents at meetings! Our socials are an
				absolute blast, and through projects, initiatives, and more, we prepare our members well for
				the future, giving them valuable mentorship and experience in both technical and
				non-technical work!
			</p>
			<div>
				<a
					class="bg-primary-600 text-center font-bold flex cursor-pointer rounded-full px-4 py-2 hover:bg-primary-700 duration-200"
					href="/projects">Projects & Initiatives</a
				>
			</div>
		</div>
		<div class="flex-1 flex flex-col items-center justify-start text-center gap-5">
			<h2 class="h2 font-bold">Where Our Members Go</h2>
			<div class="flex flex-wrap p-5 gap-16">
				{#each memberDestinations as destination}
					<Fa class="h3 p-0 dark:text-white" icon={destination} />
				{/each}
			</div>
		</div>
	</div>
</div>
<Footer />

<style>
	@media screen and (min-width: 2200px) {
		.animation {
			top: 10vh;
			right: 0;
			width: 70%;
			height: 80vh;
			overflow: hidden;
			/*background: radial-gradient(circle at var(--radial-gradient-position), rgba(var(--color-secondary-800)), transparent 30%);*/
		}

		.typewriter {
			width: 30%;
			height: 100vh;
			margin: 0;
			position: relative;
			z-index: 100;
		}
	}
	@media screen and (max-width: 2200px) and (min-width: 1500px) {
		.animation {
			top: 25vh;
			right: 0;
			width: 50%;
			height: 50vh;
			overflow: hidden;
			/*background: radial-gradient(circle at var(--radial-gradient-position), rgba(var(--color-secondary-800)), transparent 30%);*/
		}

		.typewriter {
			width: 50%;
			height: 100vh;
			position: relative;
			z-index: 100;
		}
	}

	@media screen and (max-width: 1500px) {
		.animation {
			top: 0;
			right: 0;
			width: 100%;
			height: 100vh;
			overflow: hidden;
			/*background: radial-gradient(circle at var(--radial-gradient-position), rgba(var(--color-secondary-800)), transparent 30%);*/
		}

		.typewriter {
			width: 100%;
			height: 100vh;
			margin: 0;
			position: relative;
			z-index: 100;
		}
	}
	.typewriter {
		position: relative;
		width: 100%;
		height: 100vh;
		z-index: 100;
	}

	.animation {
		position: relative;
		z-index: auto;
		pointer-events: none;
	}

	@media (min-width: 1200px) {
		.text-image {
			flex-direction: row;
		}
		.pcsHeader {
			font-size: 4.5rem;
			line-height: 1.5;
		}
		.joinContainer {
			flex-direction: row;
		}
		.destinationGrid {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	@media (max-width: 1200px) {
		.text-image {
			flex-direction: column;
		}
		.pcsHeader {
			font-size: 3rem;
			line-height: 1.5;
		}
		.joinContainer {
			flex-direction: column;
		}
		.destinationGrid {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
