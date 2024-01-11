<script>
	import Typewriter from 'svelte-typewriter';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/SplashScene.svelte';
	import Fade from '$lib/Fade.svelte';

	let platitudes = [
		'A community dedicated to diverse thought.',
		'A community built for equity. ',
		'A community of innovators.',
		'A community for everyone.',
		'A community paving the path for ethical computing'
	];
</script>

<div class="block">
	<div class="animation">
		<Canvas>
			<Scene />
		</Canvas>
	</div>
	<div
		class="typewriter pointer-events-none select-none flex flex-col bg-primary-700 gap-2 p-10 bg-opacity-30"
	>
		<Fade>
			<h1 class="text-7xl font-bold">Politcal Computer Science Berkeley:</h1>
			<Typewriter mode={'loopOnce'} interval={50}>
				{#each platitudes as platitude}
					<h1 class=" text-primary-500 font-bold text-lg drop-shadow-xl">{platitude}</h1>
				{/each}
			</Typewriter>
			<a
				class=" align-middle btn variant-filled-primary"
				href="https://docs.google.com/forms/d/e/1FAIpQLSdLTjL76KESHNkkE-H5BRoGimma8ja0H55lt1-8KsSIzirRdQ/viewform"
				>Join Us</a
			>
		</Fade>
	</div>
</div>

<style>
	.animation {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.typewriter {
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
