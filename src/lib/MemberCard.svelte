<script lang="ts">
	export let img: string;
	export let roles: string[] = ['Member'];
	export let classYear: string;
	export let linkedin: string;
	export let major: string;
	export let layer: string = "500";
	import Icon from '@iconify/svelte';
	import Fade from './Fade.svelte';

	const determineColor = (role: string) => {
		if (role == 'Member') {
			return ' bg-primary-800';
		} else if (role == 'Project Manager') {
			return ' bg-success-800';
		} else {
			return ' bg-warning-800';
		}
	};
</script>

<Fade
	visibleOnPageLoad={false}
	classes={`rounded-xl bg-surface-${layer} flex flex-col gap-5 justify-between items-center p-6 h-full`}
>
	<h2 class="h3 dark:text-white font-bold"><slot /></h2>
	<img src={img} class="rounded-full w-3/4" alt="Person Professional Headshot" />
	<div class="flex flex-row flex-wrap">
		{#each roles as role}
			<div class="px-2 pt-2 text-center">
				<p class={'role'.concat(determineColor(role))}>{role}</p>
			</div>
		{/each}
	</div>
	<div class="flex flex-row gap-3 justify-between w-full px-2">
		<div class="flex flex-col">
			<p class="text-primary-500 font-bold">Class of {classYear}</p>
			<p class="italic dark:text-white">{major}</p>
		</div>
		<a
			class="flex justify-center content-center items-center hover:text-primary-500 duration-200"
			href={linkedin}
			target="_blank"
		>
			<Icon
				icon="mdi:linkedin"
				width="50"
				class="dark:text-white hover:text-primary-500 hover:color-primary-500 duration-200"
			/>
		</a>
	</div>
</Fade>

<style>
	.role {
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		border-radius: 3rem;
	}
</style>
