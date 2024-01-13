<script lang="ts">
	import { onMount } from 'svelte';
	import Fade from './Fade.svelte';

	export let link: string;
	export let title: string;
	export let description: string;
	let images: (null | string)[] = [];
	let imageHtml: string = '';

	onMount(() => {
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = description;

		const imageElements = tempDiv.querySelectorAll('img');
		images = Array.from(imageElements).map((img) => img.getAttribute('src'));

		if (!images[0]?.startsWith('https://medium.c')) {
			// If there's an image, create an HTML string
			imageHtml = `<img class="w-full h-full object-cover object-top" src="${images[0]}" alt="Thumbnail">`;
		} else {
			imageHtml = `<img class="w-full h-full object-cover object-top" src="/pcs-logo.png" alt="PCS Logo">`;
		}

		imageElements.forEach((img) => img.remove());

		description = tempDiv.innerHTML;
	});
</script>

<Fade classes="flex flex-col gap-5 justify-between align-center w-full bg-surface-500 rounded-xl overflow-hidden" visibleOnPageLoad={false}>
	<a href={link} target="blank">
		<div class="aspect-video w-full img-container">
			{@html imageHtml}
		</div>
        <div class="flex flex-col gap-5 p-5">
		<h1 class="h3 font-bold leading-10">{title}</h1>
		<p class="p leading-10">{@html description.slice(0, 300) + '...'}</p>
    </div>
	</a>
</Fade>

<style>
	.image-container * {
		/* Ensure images fill the container */
		width: 100%;
		height: 100%;
		object-fit: cover; /* Maintain aspect ratio and cover container */
	}
</style>
