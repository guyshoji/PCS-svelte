<script lang="ts">
	export let img: string;
	export let title: string;
	export let timeInfo: string;
	export let description: string;
</script>

<div
	class="flex flex-col gap-5
	rounded-xl bg-surface-500 items-start hover:bg-primary-800 
	flex-1 duration-300 overflow-hidden"
>
	<div class="w-full">
		<img class="overflow-hidden" src={img} alt={title} />
	</div>
	<div class="flex justify-end flex-col gap-6 px-8 pb-8 h-full">
		<h2 class="h3 dark:text-white font-bold">{title}</h2>
		<h3 class="p font-bold">{timeInfo}</h3>
		<p class="p">{description}</p>
	</div>
</div>

<style>
</style>
