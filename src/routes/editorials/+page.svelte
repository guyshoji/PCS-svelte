<script lang="ts">
	import { onMount } from 'svelte';
	import Loading from '$lib/Loading.svelte';
	import Footer from '$lib/Footer.svelte';

	interface ArticleProps {
		link: string;
		title: string;
		description: string;
		thumbnail: string;
	}

	let articles: ArticleProps[] = [];
	let isLoading: boolean = true; // Add a loading state
	import Fade from '$lib/Fade.svelte';
	import Article from '$lib/Article.svelte';

	onMount(async () => {
		try {
			const response = await fetch(
				'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pcsberkeley'
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
	<div class="w-full h-full flex flex-col justify-center items-center">
		<Fade classes="flex flex-col gap-8 justify-center items-center w-3/4 text-center h-[90vh]">
			<h4 class="h4 text-primary-500 smallHeader">Editorials</h4>
			<h1 class="text-6xl font-bold">Our Medium</h1>
			<h3 class="p pt-4 leading-10">
				We publish a variety of different editorials recapping our projects and other experiences on
				our club's Medium account! Feel free to read a few or visit online. We always love feedback
				on what we write and hope we can keep you entertained!
			</h3>
			<a
				href="https://medium.com/@pcsberkeley"
				class="bg-primary-500 py-2 px-4 rounded-full hover:bg-primary-700 duration-200"
				target="blank">Visit Our Medium!</a
			>
			<div class="w-1/6 bg-primary-500 h-0.5 mt-12"></div>
		</Fade>
		<Fade>
			<h1 class="text-6xl font-bold">Articles</h1>
		</Fade>
		<div class="w-1/6 bg-primary-500 h-0.5 mt-12"></div>
		<div class="grid articleGrid gap-10 p-14">
			{#each articles as { title, description, link }}
				<!--<a class="card m-3 p-3" href={article.link}>-->
				<!--<h2 class="text-xl dark:text-white font-bold">{article.title}</h2>
				<h3 class="line-clamp-4 dark:text-white p-3 overflow-hidden">
					{@html article.description}
				</h3>
			</a>-->
				<Article {title} {description} {link}></Article>
			{/each}
		</div>
		<Footer />
	</div>
{/if}

<style>
	.smallHeader {
		text-align: center;
		font-weight: bold;
	}
	.articleContainer {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
	@media (min-width: 1200px) {
		.articleGrid {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	@media (max-width: 1200px) and (min-width: 1000px) {
		.articleGrid {
			grid-template-columns: 1fr 1fr 1fr;
		}
	} 
	@media (max-width: 1000px) and (min-width: 600px) {
		.articleGrid {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 600px) {
		.articleGrid {
			grid-template-columns: 1fr;
		}
	}
</style>
