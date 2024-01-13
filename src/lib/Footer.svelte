<script lang="ts">
	import Fa from 'svelte-fa';
	import { faInstagram, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="w-full flex flex-col justify-between pt-20">
	<div class="w-full bg-primary-700 h-px"></div>
	<div class="flex flex-row justify-evenly gap-32">
		<div class="flex flex-col gap-5 p-10 font-bold">
			<a class="hover:font-normal dark:text-white" href="/"> <p>Home</p></a>
			<a class="hover:font-normal dark:text-white" href="/about"> <p>About Us</p></a>
			<a class="hover:font-normal dark:text-white" href="/projects"> <p>Projects</p></a>
			<a class="hover:font-normal dark:text-white" href="/members"> <p>Members</p></a>
			<a class="hover:font-normal dark:text-white" href="/editorials"> <p>Editorials</p></a>
			<a class="hover:font-normal dark:text-white" href="/calendar"> <p>Calendar</p></a>
			<a
				class="btn variant-filled-primary"
				href="https://docs.google.com/forms/d/e/1FAIpQLSdLTjL76KESHNkkE-H5BRoGimma8ja0H55lt1-8KsSIzirRdQ/viewform"
				>Join Us</a
			>
		</div>
        <div class="flex flex-col gap-5 p-10">
            <p class="p font-bold">CONTACT</p>
            <p class="p">pcsberkeley@gmail.com</p>
            <p class="p">University of California, Berkeley</p>
            <p class="p">Berkeley, CA</p>
        </div>
	</div>
	<div class="w-full bg-primary-700 h-px"></div>
	<div class="flex flex-row justify-around pt-6">
		<p class="p">Copyright @ 2024 Political Computer Science @ Berkeley. All rights reserved</p>
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
