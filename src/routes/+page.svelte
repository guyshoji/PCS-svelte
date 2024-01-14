<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/SplashScene.svelte';
	import Fade from '$lib/Fade.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Footer from '$lib/Footer.svelte';
	import TiltDivider from '$lib/TiltDivider.svelte';

	let platitudes = [
		'A community dedicated to diverse thought.',
		'A community built for equity. ',
		'A community of innovators.',
		'A community for everyone.',
		'A community paving the path for ethical computing'
	];

	onMount(() => {
		// Redirect to the desired URL after the component is mounted
        goto('/home', { replaceState: true });
	});

	let scrollToElement: HTMLDivElement;

	const handleClick = () => {
		// Scroll to the specified element when the button is clicked
		scrollToElement.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<div></div>