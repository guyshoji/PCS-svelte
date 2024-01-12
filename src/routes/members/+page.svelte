<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import members from './members.json';
	import Fade from '$lib/Fade.svelte';
	import Icon from '@iconify/svelte';

	// Function to change the image on hover
	function setHoverImage(event, imgSilly) {
		event.currentTarget.style.backgroundImage = `url(${imgSilly})`;
	}

	// Function to revert the image on mouse out
	function setOriginalImage(event, img) {
		event.currentTarget.style.backgroundImage = `url(${img})`;
	}
</script>

<Fade>
	<div class="ca grid grid-rows-3 m-3">
		{#each members as person}
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
				<br>
				<h1 class=" dark:text-white text-center font-bold h2">{person.name}</h1>
				<h1 class="h4 dark:text-white text-center">{person.title}</h1>
				<p class="dark:text-white text-center">
					{person.major} <br />Class of {person.graduation}
				</p>
				<a class="flex justify-center content-center" href={person.linkedin} target="_blank">
					<Icon icon="mdi:linkedin" width="50" class="dark:text-white" />
				</a>
			</div>
		{/each}
	</div>
</Fade>

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
	}

	@media (min-width: 580px) {
		.ca {
			grid-template-columns: repeat(auto-fill, 50%);
		}
	}
	@media (min-width: 700px) {
		.ca {
			grid-template-columns: repeat(auto-fill, 50%);
		}
	}

	@media (min-width: 930px) {
		.ca {
			grid-template-columns: repeat(auto-fill, 33.33%);
		}
	}
	@media (min-width: 1200px) {
		.ca {
			grid-template-columns: repeat(auto-fill, 25%);
		}
	}
	@media (min-width: 1380px) {
		.ca {
			grid-template-columns: repeat(auto-fill, 20%);
		}
	}
</style>
