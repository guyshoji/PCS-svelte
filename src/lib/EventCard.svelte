<script lang="ts">
	export let img: string;
	export let title: string;
	export let timeInfo: string;
	export let description: string;
</script>

<div
	class="flex flex-col gap-5 bg-secondary-100 dark:bg-surface-600
	rounded-xl hover:bg-primary-200 items-start dark:hover:bg-primary-700 
	flex-1 duration-300 overflow-hidden"
>
	<div class="w-full">
		<img class="overflow-hidden" src={img} alt={title} />
	</div>
	<div class="flex justify-end flex-col gap-6 px-8 pb-8 h-full">
		<h2 class="h3 dark:text-white font-bold">{title}</h2>
		<h3 class="p text-primary-400">{timeInfo}</h3>
		<p class="p">{description}</p>
	</div>
</div>

<style>
</style>
