<script lang="ts">
  import { onMount } from 'svelte';
  import { GamesListClient } from '$lib/services/Clients';
  import type { Game } from 'src/generated/types/game';
  import { BarLoader } from 'svelte-loading-spinners';

  import SponsorUsSection from '$lib/components/Special/SponsorUs.svelte';
  import PageTransition from '$lib/components/Special/PageTransition.svelte';
  import GameCard from '$lib/components/Special/GameLibrary/GameCard.svelte';
  import { MasonryInfiniteGrid } from '@egjs/svelte-infinitegrid';

  // Variables
  let games: Game[] = [];

  // Fetching instances
  onMount(async () => {
    const { response } = await GamesListClient.search({ tags: [] });

    games = response.result;
  });
</script>

<PageTransition />

<!-- News
<div class="w-full relative mb-6 px-2">
  <div style="padding-top: 40%;" class="relative">
    <div style="background-image: url('https://cdn2.unrealengine.com/egs-thelongdark-hinterlandstudioinc-g1a-00-1920x1080-231d3328f957.jpg?h=1080&resize=1&w=1920'); background-size: cover; background-repeat: no-repeat;" class="shadow-md absolute inset-0 w-full h-full rounded-md"></div>

    Helper
    <div class="absolute top-0 right-0 p-2">
      <div class="bg-white px-4 py-1 opacity-75 rounded-md flex items-center">
        Icon
        <svg style="height: 0.9rem; width: 0.9rem;" class="text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>

        Helper Text
        <p class="text-sm text-black ml-2">Нажмите на картинку, что бы узнать больше</p>
      </div>
    </div>

    Dots
    <div class="absolute bottom-0 w-full flex justify-center items-center pb-4">
      <div class="mx-2 w-4 h-4 rounded-full bg-white"></div>
      <div class="mx-2 w-3 h-3 rounded-full border-2 border-white opacity-50"></div>
      <div class="mx-2 w-3 h-3 rounded-full border-2 border-white opacity-50"></div>
    </div>
  </div>
</div> -->

<!-- Game Library -->
<div class="w-full border-b-2 border-solid border-indigo-400 text-left pb-2">
  <h1 class="text-2xl text-white opacity-75 font-bold">Игры</h1>
  <p class="text-sm text-white opacity-50 w-1/3">Весь список доступных на games.bluk.studio игр.</p>
</div>

<div class="w-full mt-2 h-full">
  { #if games.length <= 0 }
    <div class="w-full flex items-center justify-center pt-44 pb-28">
      <BarLoader color="#262b3f" />
    </div>
  { :else }
    <!-- <div id="container"> -->
      <MasonryInfiniteGrid
        class="container"
        gap={1}
        column={2}
        items={games}
        let:visibleItems
      >
        { #each visibleItems as item (item.key) }
          <GameCard game={item.data} />
        { /each }
      </MasonryInfiniteGrid>
    <!-- </div> -->
    <!-- More Popular Games -->
    <!-- <div class="w-1/3 relative px-2 py-2">
      <div style="padding-top: 60%;" class="relative">
        <div style="" class="absolute border-2 border-solid border-indigo-400 inset-0 w-full h-full rounded-md flex flex-col justify-center items-center pr-2">
          #Text
          <div class="w-2/3 opacity-75 text-center">
            <h1 class="text-md font-bold text-white">Больше игр</h1>
            <p class="text-sm text-gray-100 mt-2">Перейти в полную Библиотеку мини-игр</p>
          </div>

          #Button
          <div class="absolute right-0 h-full bg-indigo-400 px-2 text-white flex items-center">
            #Chevron
            <svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>
      </div>
    </div> -->
  { /if }
</div>

<!-- Support Project -->
<SponsorUsSection />

<style>
  /* #container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  } */
</style>