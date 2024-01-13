<script lang="ts">
	import { onMount } from 'svelte';
	import Fade from './Fade.svelte';

	export let classes: string = 'h1 font-bold text-primary-400';
	export let startingNum: number = 0;
	export let targetNum: number;
	export let countTime: number = 3000;
	export let suffix: string = '';
	let currSeconds = 0;
	let displayedNum = startingNum;

	onMount(() => {
		setInterval(() => {
			currSeconds += 20;
		}, 20);

		setInterval(() => {
			if (currSeconds > countTime) {
				displayedNum = targetNum;
			} else {
				const difference = targetNum - startingNum;
				const percentOfChange = currSeconds / countTime;
				const amtToIncrease = percentOfChange * difference;
				displayedNum = startingNum + Math.floor(amtToIncrease);
			}
		}, 20);
	});
</script>

<Fade>
	<div class="flex flex-col gap-4 justify-center items-center">
		<h1 class={classes}>{displayedNum}{suffix}</h1>
		<h2 class="h3"><slot /></h2>
	</div>
</Fade>

<style>
</style>
