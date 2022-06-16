<script lang="ts">
	import '../app.css';

  // Importing modules
  import { onMount } from "svelte/internal";
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Home, DotsHorizontal, Star, Fire, Collection } from '@steeze-ui/heroicons';
	import { BarLoader } from 'svelte-loading-spinners';
	import { fade } from 'svelte/transition';
	import ProfileBadge from '$lib/components/Special/ProfileBadge.svelte';
	import LoginBadge from '$lib/components/Special/LoginBadge.svelte';
	import SidebarFeaturedGames from '$lib/components/Special/SidebarFeaturedGames/index.svelte';

  // ...and stores
  import { ProfileStore } from "$lib/services/Profile/Profile.store";
	import { page } from '$app/stores';
import { goto } from '$app/navigation';

  // variables
  let loading = true;
  
	const pages = [
		{
			"id": "index",
			"icon": Home,
			"href": "/",

			"title": "Главная"
		}
	];

  onMount(async () => {
		if (!$page.url.pathname.includes('login')) {
			// Fetching user account
			await ProfileStore.fetchMe()
			
			loading = false;
		};
  });
</script>

{ #if loading }
	<div out:fade class="absolute z-50 w-full min-h-screen bg-container flex flex-col justify-center items-center">
		<!-- Logotype -->
		<img class="w-10 h-10 mb-6 opacity-40" src="https://res.cloudinary.com/lococovu-cdn/image/upload/v1636815887/bluk-studio-white.svg" alt="">

		<!-- Loader -->
		<BarLoader color="#262b3f" />
	</div>
{ /if }

<main id="container" class="w-full min-h-screen bg-container">
	<main class="w-full h-min-screen relative flex">
		<!-- Sidebar -->
		<sidebar style="z-index: 1;" class="h-screen w-1/5 pt-6 flex flex-col items-center relative">
			<!-- Background -->
			<div style="z-index: 0;" class="absolute inset-0 w-full h-full bg-input opacity-80 rounded-md"></div>
		
			<!-- Logotype -->
			<div style="z-index: 1;" class="px-8 my-1 w-full flex items-center justify-between">
				<img class="w-8" src="https://res.cloudinary.com/lococovu-cdn/image/upload/v1636815887/bluk-studio-white.svg" alt="">
			
				<!-- More services -->
				<button on:click={() => {
					window.location.href = 'https://odzi.dog';
				}} class="w-8 h-8 rounded-md bg-icon-button flex items-center justify-center">
					<Icon src={Collection} size="20" class="text-white" />
				</button>
			</div>
		
			{ #if $ProfileStore?.user != null }
				<ProfileBadge />
			{ :else }
				<LoginBadge />
			{ /if }

			<!-- Links -->
			<div class="px-4 w-full relative">
				{ #each pages.filter((x) => x.id != null) as page }
					<button on:click={() => {
						goto(page.href);
					}} class="cursor-pointer hover:bg-icon-button hover:bg-opacity-50 transition-all duration-200 ease-in-out w-full flex items-center rounded-md opacity-80 py-3 px-4 my-2 relative">
						<!-- Icon -->
						<Icon src={page.icon} class="text-white" size="20" />

						<!-- Text -->
						<p class="ml-2 text-white">{ page.title }</p>
					</button>
				{ /each }
			</div>
		
			<!-- Divider -->
			<div style="height: .15rem" class="w-4/5 my-2 bg-icon-button opacity-70 rounded-md"></div>
		
			<!-- Last Actions -->
			<div style="overflow: hidden; overflow-y: auto;" class="px-4 flex-grow w-full relative">
				<SidebarFeaturedGames />

				<!-- Discord -->
				<div class="px-4 py-3 my-2 cursor-pointer rounded-md border border-dashed border-gray-700 flex items-center justify-center opacity-80">
					<!-- Texts -->
					<div>
						<!-- Title -->
						<h1 class="text-sm text-white font-medium">Наш Дискорд</h1>
	
						<!-- Subtitle -->
						<p class="text-extra-xs text-gray-100 opacity-80">Хотите пообщаться с нами и нашим комьюнити? Тогда вам <span class="border-b border-dotted border-gray-100">в наш дискорд сервер!</span></p>
					</div>
				</div>
			</div>
		</sidebar>

		<!-- Content (Screens) -->
		<section style="overflow: hidden; overflow-y: auto;" class="w-4/5 h-screen relative">
			<div class="absolute inset-0 w-full h-full py-6 px-8 flex flex-col">
				<!-- #Mini-header
				<div class="w-full flex items-center px-2">
					#Screens
					<div class="w-2/3 flex items-center">
						<div class="px-4 py-2 text-gray-200 text-xs opacity-75 relative">Главная</div>
						
						<div class="px-4 py-2 text-gray-200 text-xs opacity-75 relative">
							Новости

							#Badge
							<div class="absolute top-0 right-0">
								<div class="rounded-full px-1.5 bg-red-400 text-white text-extra-xs">
									2
								</div>
							</div>
						</div>
					</div>
				</div> -->

				<!-- Container -->
				<div class="relative w-full flex-grow pt-4 flex flex-col">
					<slot />

					<!-- Footer -->
					<footer class="w-full mt-12 pb-4 flex flex-col justify-center items-center opacity-50">
						<!-- Lococovu Logotype -->
						<img style="height: 1.6rem;" src="https://res.cloudinary.com/lococovu-cdn/image/upload/v1610999988/logotypes/odzi-dog-small-white.svg" alt="odzi.dog logotype">
					
						<!-- Texts -->
						<p class="text-xs text-gray-100 mt-1">Maintained by <span class="border-b border-dotted border-gray-100">community</span>, crafted with :love: by <span class="border-b border-dotted border-gray-100">odzi dog</span></p>
					</footer>
				</div>
			</div>
		</section>
	</main>
</main>