<script lang="ts">
	import type { IconDefinition, faIcons } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let icon: IconDefinition;
	export let header: string;
	export let message: string;
</script>

<div
	class="flex flex-col gap-5 bg-surface-500 rounded-xl p-8 hover:bg-primary-900 items-start h-full flex-1 duration-300"
>
	<div class="bg-primary-700 m-auto rounded-md p-4">
		<Fa class="h3 p-0 dark:text-white" {icon} />
	</div>
	<h1 class="h3 text-left font-bold">{header}</h1>
	<h4 class="p dark:text-white text-left leading-7">{message}</h4>
</div>
