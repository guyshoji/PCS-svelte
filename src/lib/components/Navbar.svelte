<script lang='ts'>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, 
        DropdownHeader, DropdownDivider, Button } from 'flowbite-svelte';
    import { supabase } from '$lib/supabaseClient.js';
    import { onMount } from 'svelte';

    let session = null;

    onMount(async () => {
        session = await supabase.auth.getSession();
    });
</script>
  
<Navbar let:hidden let:toggle>
<NavBrand href="/">
    <img src="/pcs-logo.png" class="mr-3 h-6 sm:h-9" alt="PCS Logo"/>
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Political Computer Science @ Berkeley</span>
</NavBrand>
{#if session?.user != null}
    <div class="flex items-center md:order-2">
        <Avatar id="avatar-menu" src="/anonUser.png" />
        <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
        <DropdownHeader>
        <span class="block text-sm"> Bonnie Green </span>
        <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
        </DropdownHeader>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
{:else}
    <div class="flex items-center md:order-2">
        <Button href="/login" color="purple">Login</Button>
    </div>
{/if}
<NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About Us</NavLi>
    <NavLi href="/projects">Projects</NavLi>
    <NavLi href="/editorials">Editorials</NavLi>
    <NavLi href="/calendar">Calendar</NavLi>
    <NavLi href="/join">Join Us</NavLi>
</NavUl>
</Navbar>