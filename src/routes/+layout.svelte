<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		autoModeWatcher,
		Drawer,
		LightSwitch,
		getDrawerStore,
		type DrawerSettings,
		type AutocompleteOption
	} from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	// Icons
	import Icon from '@iconify/svelte';

	function a() {
		alert('Not Implemented');
	}

	// Drawer
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	initializeStores();
	const drawerStrore = getDrawerStore();

	const drawerSettings: DrawerSettings = {
		position: 'right',
		width: 'fit',
		padding: 'p-2'
		// blur: "blur"
	};
	function triggerDrawer() {
		drawerStrore.open(drawerSettings);
	}
	onMount(() => {
		drawerStrore.open(drawerSettings);
	});
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	let currentTile: number = 0;

	// Language Settings
	const languageOptions: AutocompleteOption<string>[] = [
		{ label: 'Español', value: 'spanish' },
		{ label: 'Français', value: 'french' },
		{ label: '简体中文', value: 'chinese(simp)' },
		{ label: '繁體中文', value: 'chinese(traditional)' }
	];
</script>

<svelte:head
	>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head
>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<a href="/" class="w-1/6 flex text-center content-center"
					><img src="/pcs-logo.png" class="bg-white pcs-logo" alt="PCS Icon" />

					<span class="text-xl font-semibold mx-4 m-auto">PCS@Berkeley</span>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="default"></svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<button class="btn card-hover" on:click={a}><Icon icon="ion:language-outline" /></button>
				<!-- <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> -->
				<!-- <path d={languageSVG}></path> -->
				<!-- </svg> -->

				<button on:click={triggerDrawer}>
					<Icon icon="material-symbols:density-medium-rounded" />
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<Drawer>
		<div class="w-fit font-semibold flex flex-col p-3">
			<a class="hover:font-normal p-3" href="/about"> <p>About Us</p></a>
			<a class="hover:font-normal p-3" href="/projects"> <p>Projects</p></a>
			<a class="hover:font-normal p-3" href="/members"> <p>Members</p></a>
			<a class="hover:font-normal p-3" href="/editorials"> <p>Editorials</p></a>
			<a class="hover:font-normal p-3" href="/calendar"> <p>Calendar</p></a>
			<a
				class="btn variant-filled-primary"
				href="https://docs.google.com/forms/d/e/1FAIpQLSdLTjL76KESHNkkE-H5BRoGimma8ja0H55lt1-8KsSIzirRdQ/viewform"
				>Join Us</a
			>
		</div>
	</Drawer>
	<slot />
	<svelte:fragment slot="footer">
		<h1 class="text-right m-3">© PCS Berkeley 2023</h1>
	</svelte:fragment>
</AppShell>

<style>
	@media (max-width: 750px) {
		.pcs-logo {
			display: none;
		}
	}
</style>
