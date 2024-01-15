<script>
	import Fade from '$lib/Fade.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div>
	<div class="h-screen flex flex-col justify-center items-center">
		<Fade>
			<div class="flex flex-col gap-7 pt-16 px-5">
				<!-- <img src="/group-pic.jpeg" class="m-auto absolute -z-10" /> -->
				<h1 class="text-6xl dark:text-white text-center font-bold">Calendar</h1>
				<div class="my-10 m-auto">
					<h1 class=" dark:text-white h2 font-bold">Recruitment</h1>
					<br />
					<li class="h4">Jan 15 - 30, Tabling (Catch us on Sproul in a Purple Tent!)</li>
					<li class="h4">TBD, Infosession 1</li>
					<li class="h4">TBD Infosession 2</li>
					<li class="h4">TBD URM Infosession</li>
					<li class="h4">Jan 30, Application Due</li>
					<li class="h4">Feb 12, Retreat</li>
				</div>
			</div>
		</Fade>
		<Fade>
			<div class="flex">
				<a
					class="btn m-auto bg-primary-500 text-center font-bold hover:bg-primary-700 duration-200"
					href="https://docs.google.com/forms/d/e/1FAIpQLSdlxeB7aDMPkHUXnDDHZGcB_OpDgPYVqu5dYh933HKwOiDK_w/viewform?usp=sf_link"
					>Join Us</a
				>
			</div>
		</Fade>
	</div>
	<Footer />
</div>
