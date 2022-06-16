<script lang="ts">
	import '../app.css';

  // Importing modules
  import { onMount } from "svelte/internal";
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Selector, Check, Server } from '@steeze-ui/heroicons';
	import { BarLoader } from 'svelte-loading-spinners';
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/Layout/Header.svelte';

  // ...and stores
  import { ProfileStore } from "$lib/services/Profile/Profile.store";
	import { page } from '$app/stores';

  // variables
  let loading = false;
  
  onMount(async () => {
		if (!$page.url.pathname.includes('login')) {
			// Fetching user account
			await ProfileStore.fetchMe()
			
			loading = false;
		};
  });
</script>

{ #if loading }
	<div out:fade class="absolute z-50 w-full min-h-screen bg-gray-100 flex flex-col justify-center items-center">
		<!-- Logotype -->
		<img class="w-10 h-10 mb-6 opacity-80" src="https://res.cloudinary.com/lococovu-cdn/image/upload/v1636810372/bluk-studio-black.svg" alt="">

		<!-- Loader -->
		<BarLoader color="#262b3f" />
	</div>
{ /if }

<main id="container" class="w-full min-h-screen bg-gray-100">
	<Header />

	<!-- Content -->
	<div class="px-4">
		<slot />
	</div>
</main>