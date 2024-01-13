<script>
	import Typewriter from 'svelte-typewriter';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/SplashScene.svelte';
	import Fade from '$lib/Fade.svelte';
	import { onMount } from 'svelte';
	import Footer from '$lib/Footer.svelte';

	let platitudes = [
		'A community dedicated to diverse thought.',
		'A community built for equity. ',
		'A community of innovators.',
		'A community for everyone.',
		'A community paving the path for ethical computing'
	];
</script>

<div class="w-full h-full">
	<div
		class="typewriter pointer-events-none select-none flex flex-col gap-20 pl-16 justify-center items-center"
	>
		<Fade>
			<div class="flex flex-col gap-6 justify-center items-start text-left">
				<h1 class="text-7xl dark:text-white font-bold">Political Computer Science @ Berkeley</h1>
				<Typewriter mode={'loop'} interval={70}>
					{#each platitudes as platitude}
						<h1 class=" font-bold text-lg m-3 drop-shadow-xl">{platitude}</h1>
					{/each}
				</Typewriter>
				<a
					class="btn bg-primary-600 text-center font-bold flex"
					href="https://docs.google.com/forms/d/e/1FAIpQLSdLTjL76KESHNkkE-H5BRoGimma8ja0H55lt1-8KsSIzirRdQ/viewform"
					>Join Us</a
				>
			</div>
		</Fade>
	</div>
	<div class="animation">
		<Canvas>
			<Scene />
		</Canvas>
	</div>
</div>
	<Footer />


<style>
	@media screen and (min-width: 2200px) {
		.animation {
			position: absolute;
			top: 10vh;
			right: 0;
			width: 70%;
			height: 80vh;
			overflow: hidden;
			z-index: 20;
			/*background: radial-gradient(circle at var(--radial-gradient-position), rgba(var(--color-secondary-800)), transparent 30%);*/
		}

		.typewriter {
			width: 30%;
			height: 100vh;
			margin: 0;
			position: absolute;
			top: 0%;
			left: 0;
			z-index: 100;
		}
	}
	@media screen and (max-width: 2200px) and (min-width: 1500px) {
		.animation {
			position: absolute;
			top: 25vh;
			right: 0;
			width: 50%;
			height: 50vh;
			overflow: hidden;
			z-index: 20;
			/*background: radial-gradient(circle at var(--radial-gradient-position), rgba(var(--color-secondary-800)), transparent 30%);*/
		}

		.typewriter {
			width: 50%;
			height: 100vh;
			margin: 0;
			position: absolute;
			top: 0%;
			left: 0;
			z-index: 100;
		}
	}

	@media screen and (max-width: 1500px) {
		.animation {
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			height: 100vh;
			overflow: hidden;
			z-index: 20;
			/*background: radial-gradient(circle at var(--radial-gradient-position), rgba(var(--color-secondary-800)), transparent 30%);*/
		}

		.typewriter {
			width: 100%;
			height: 100vh;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 100;
			transform: translate(50% 50%);
		}
	}
</style>
