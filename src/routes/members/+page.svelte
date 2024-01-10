<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import members from './members.json';

	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-wrap">
{#each members as person}
	<div class="flex flex-col card w-1/6 m-3 p-3 gap-2">
		<!-- <img src="/group-pic.jpeg" alt="{person.name} image" /> -->
		<img src="pcs-logo.png" class="w-1/2 m-auto" alt="{person.name} image" />
		<h1 class="text-center h2">{person.name}</h1>
		<h1 class="text-center h3">{person.title}</h1>
		<a class=" flex justify-center content-center">
			<Icon icon="mdi:linkedin" width="50" />
		</a>
	</div>
{/each}
</div>
