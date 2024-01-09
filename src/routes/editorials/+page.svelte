<script lang="ts">
	import { onMount } from 'svelte';
	import Loading from '$lib/Loading.svelte';
	let articles = [];
	let isLoading: boolean = true; // Add a loading state

	onMount(async () => {
		try {
			const response = await fetch(
				'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/pcs-berkeley'
			);
			if (response.ok) {
				const data = await response.json();
				console.log(data.items);
				articles = data.items;
			} else {
				console.error('Error fetching articles:', response.status);
			}
		} catch (error) {
			console.error('Error fetching articles:', error);
		} finally {
			isLoading = false; // Set loading to false when the fetch is complete
		}
	});
</script>

{#if isLoading}
	<!-- If isLoading is true, show the loading message -->
	<Loading></Loading>
{:else}
	<!-- Once isLoading is false, render the articles -->
	<div class="h-full flex flex-col">
		<h1 class="text-l m-3">Here is a collection of medium articles we have published!</h1>

		{#each articles as article}
			<a class="card m-3 p-3" href={article.link}>
        <header>
{article.thumbnail}
        </header>
				<h2 class="text-xl">{article.title}</h2>
				<h3 class="line-clamp-2 overflow-hidden">{@html article.description}</h3>
			</a>
		{/each}
	</div>
{/if}

<style>
	img {
		margin: 3rem;
	}
</style>
