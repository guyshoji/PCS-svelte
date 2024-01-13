<script lang="ts">
	import Fa from 'svelte-fa';
	import { faInstagram, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="w-full flex flex-col justify-between pt-20">
	<div class="w-full bg-primary-700 h-px"></div>
	<div class="flex container justify-evenly a">
		<div class="flex flex-col gap-6 p-10 font-bold">
			<a class="hover:font-normal dark:text-white" href="/"> <p>Home</p></a>
			<a class="hover:font-normal dark:text-white" href="/about"> <p>About Us</p></a>
			<a class="hover:font-normal dark:text-white" href="/projects"> <p>Projects</p></a>
			<a class="hover:font-normal dark:text-white" href="/members"> <p>Members</p></a>
			<a class="hover:font-normal dark:text-white" href="/editorials"> <p>Editorials</p></a>
			<a class="hover:font-normal dark:text-white" href="/calendar"> <p>Calendar</p></a>
			<div>
				<a
				class="bg-primary-500 py-2 px-4 w-auto rounded-full"
				href="https://docs.google.com/forms/d/e/1FAIpQLSdLTjL76KESHNkkE-H5BRoGimma8ja0H55lt1-8KsSIzirRdQ/viewform"
				>Join Us</a
			>
			</div>
		</div>
        <div class="flex flex-col gap-5 p-10">
            <p class="p font-bold">CONTACT</p>
            <p class="p">pcsberkeley@gmail.com</p>
            <p class="p">University of California, Berkeley</p>
            <p class="p">Berkeley, CA</p>
        </div>
	</div>
	<div class="w-full bg-primary-700 h-px"></div>
	<div class="flex container justify-around pt-6">
		<p class="p text-center">Copyright @ 2024 Political Computer Science @ Berkeley. All rights reserved</p>
		<div class="flex flex-row justify-center items-center gap-8">
			<a href="https://www.instagram.com/pcs_berkeley/" target="blank">
				<Fa class="h3 p-0 dark:text-white" icon={faInstagram} />
			</a>
			<a href="https://medium.com/@pcsberkeley" target="blank">
				<Fa class="h3 p-0 dark:text-white" icon={faMedium} />
			</a>
			<a href="https://www.linkedin.com/company/political-computer-science" target="blank">
				<Fa class="h3 p-0 dark:text-white" icon={faLinkedin} />
			</a>
		</div>
	</div>
</div>

<style>
	@media (max-width: 580px) {
		.a {
			gap: 0.5rem;
		}
	}

	@media (max-width: 800px) {
		.container {
			flex-direction: column;
			gap: 2rem;
		}
	}
	@media (min-width: 800px) {
		.container {
			flex-direction: row;
			gap: 5rem;
		}
	}
</style>