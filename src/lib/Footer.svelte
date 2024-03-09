<script lang="ts">
	import Fa from 'svelte-fa';
	import { faInstagram, faMedium, faLinkedin, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';
</script>

<div class="w-full flex flex-col justify-between pt-20 pb-5 relative z-50 bg-surface-900">
	<div class="w-full bg-primary-700 h-px"></div>
	<div class="flex container justify-evenly a">
		<div class="flex flex-col gap-6 p-10 font-bold">
			<a class="hover:font-normal dark:text-white" href="/"> <p>Home</p></a>
			<a class="hover:font-normal dark:text-white" href="/about"> <p>About Us</p></a>
			<a class="hover:font-normal dark:text-white" href="/projects"> <p>Projects</p></a>
			<a class="hover:font-normal dark:text-white" href="/members"> <p>Members</p></a>
			<a class="hover:font-normal dark:text-white" href="/editorials"> <p>Editorials</p></a>
			<a class="hover:font-normal dark:text-white" href="/calendar"> <p>Recruitment Info</p></a>
			<div>
				<a
					class="bg-primary-500 py-2 px-4 w-auto rounded-full"
					href="https://pcs-spring2024.carrd.co/">Join Us</a
				>
			</div>
		</div>
		<div class="flex flex-col gap-5 p-10">
			<p class="p font-bold">CONTACT</p>
			<a
				href="mailto:pcs.berkeley@gmail.com"
				class="p underline hover:text-primary-500 duration-200">pcs.berkeley@gmail.com</a
			>
			<p class="p">University of California, Berkeley</p>
			<p class="p">Berkeley, CA</p>
		</div>
	</div>
	<div class="w-full bg-primary-700 h-px"></div>
	<div class="flex container justify-around pt-6">
		<p class="p text-center">
			Copyright @ 2024 Political Computer Science @ Berkeley. All rights reserved.
		</p>
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
			<a href="https://github.com/PoliticalComputerScience" target="blank">
				<Fa class="h3 p-0 dark:text-white" icon={faGithub} />
			</a>
			<a href="https://www.youtube.com/channel/UCCH2W56Oa8CNZcUTL2yeA2A" target="blank">
				<Fa class="h3 p-0 dark:text-white" icon={faGithub} />
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
