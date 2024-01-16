<script>
	import Fade from '$lib/Fade.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="px-10 py-32">
	<div class="h-screen flex flex-col justify-center items-center px-10">
		<Fade>
			<div class="flex flex-col gap-7 pt-16 px-5">
				<!-- <img src="/group-pic.jpeg" class="m-auto absolute -z-10" /> -->
				<h1 class="text-6xl dark:text-white text-center font-bold">Calendar</h1>
				<p>Applications will open soon! In the meantime, feel free to fill out our interest form</p>
				<Fade>
					<div class="flex flex-row gap-10 justify-center items-center text-center">
						<a
							class="btn m-auto bg-primary-500 text-center font-bold hover:bg-primary-700 duration-200"
							href="https://forms.gle/T37mbnapmyJXqgCf9"
							>Interest Form</a
						>
						<a
							class="btn m-auto bg-primary-500 text-center font-bold hover:bg-primary-700 duration-200"
							href="https://pcs-spring2024.carrd.co/">Virtual Flyer</a
						>
					</div>
				</Fade>
				<img src="/recruitment.png" alt="Recruitment card" />
			</div>
		</Fade>
	</div>
</div>
<Footer />
