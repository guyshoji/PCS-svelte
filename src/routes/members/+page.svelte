<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import members from './members.json';
	import Fade from '$lib/Fade.svelte';
	import Icon from '@iconify/svelte';
</script>

<Fade>
	<div class="flex flex-wrap gap-10 my-5 justify-center">
		{#each members as person}
			<div class="flex flex-col card p-3 gap-2">
				<!-- <img src="/group-pic.jpeg" alt="{person.name} image" /> -->
				<!-- <div
					class="bg-[url({person.img})] hover:bg-[url({person.imgSilly})] bg-cover h-48 w-48 rounded m-auto"
				/> -->

				<img src="{person.img}" alt="{person.name} image" class="object-contain h-48 w-48 rounded m-auto"
				>
				<h1 class="text-center dark:text-white font-bold h2">{person.name}</h1>
				<h1 class="text-center dark:text-white h5">{person.title}</h1>
				<a class=" flex justify-center content-center">
					<Icon icon="mdi:linkedin" width="50" class="dark:text-white"/>
				</a>
			</div>
		{/each}
	</div>
</Fade>
