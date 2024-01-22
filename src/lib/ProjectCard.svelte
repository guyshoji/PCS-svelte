<script lang="ts">
	import MemberCard from './MemberCard.svelte';

	interface ProjectManager {
		name: string;
		roles: string[];
		linkedin: string;
		img: string;
		imgSilly: string;
		major: string;
		graduation: string;
	}

	export let projectManagers: ProjectManager[];
	export let name: string;
	export let description: string;
	let pmClass = 'pm';

	if (projectManagers.length != 1) {
		pmClass = 'pms';
	}
</script>

<div
	class="flex justify-between align-center bg-surface-600 rounded-xl gap-10 p-10 w-full fullContainer"
>
	<div class={`flex flex-col justify-start align-left gap-10`}>
		<h2 class="h2 font-bold">{@html name}</h2>
		<h3 class="p leading-10">{description}</h3>
	</div>
	<div class={`flex justify-center align-right gap-10 ${pmClass}`}>
		{#each projectManagers as { name, roles, linkedin, img, major, graduation }}
			<MemberCard {img} {roles} classYear={graduation} {linkedin} {major} layer="500"
				>{name}</MemberCard
			>
		{/each}
	</div>
</div>

<style>
	@media (max-width: 1080px) {
		.fullContainer {
			flex-direction: column;
		}
		.pm,
		.pms {
			flex-direction: column;
			max-width: 100%;
		}
	}
	@media (max-width: 1300px) and (min-width: 1080px) {
		.fullContainer {
			flex-direction: row
		}
		.pm {
			max-width: 33.3%;
		}
		.pms {
			max-width: 66.7%;
		}
	}
	@media (min-width: 1100px) {
		.fullContainer {
			flex-direction: row;
		}
		.pm {
			max-width: 25%;
		}
		.pms {
			max-width: 50%;
		}
	}
</style>
