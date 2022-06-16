<script lang="ts">
  // Importing modules
  import type { Game } from "src/generated/types/game";
  import { onMount } from "svelte";
  import { GamesListClient } from "$lib/services/Clients";
  import { page } from "$app/stores";
  import { BarLoader } from 'svelte-loading-spinners';
  import PageTransition from "$lib/components/Special/PageTransition.svelte";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Exclamation, ExclamationCircle, Link, Play } from "@steeze-ui/heroicons";
  import TagWrapper from "$lib/components/Special/Tags/TagWrapper.svelte";

  // Variables
  let loading = true;
  let game: Game;
  let doGameExists: boolean;

  onMount(async () => {
    try {
      const { response } = await GamesListClient.getOne({ id: $page.params.gameId });

      console.log('response:', response);

      doGameExists = true;
      game = response;
    } catch {
      doGameExists = false;
    };

    loading = false;
  });
</script>

<PageTransition />

{ #if loading }
  <div class="w-full flex items-center justify-center h-screen">
    <BarLoader color="#262b3f" />
  </div>
{ :else }
  { #if doGameExists }
    <!-- Header -->
    <div class="w-full pt-11 pb-6">
      <!-- Game info -->
      <div class="flex items-stretch px-4">
        <!-- Icon -->
        <div style="background: url('{ game.thumbnail }'); background-size: cover; background-position: center;" class="w-32 h-32 rounded-md"></div>

        <!-- Texts -->
        <div class="ml-2">
          <h1 class="px-1.5 text-2xl text-white font-bold">{ game.name }</h1>
          
          <!-- Tags -->
          <div class="flex flex-wrap">
            { #each game.tags as tag }
              <div class="mx-1.5 my-1 rounded-md px-2 py-0.5 bg-icon-button">
                <TagWrapper {tag} />
              </div>
            { /each }
          </div>

          <!-- Text -->

          <!-- Buttons -->
          <div class="mt-4 px-1.5">
            <button class="flex items-center bg-indigo-600 rounded-md px-4 py-2">
              <Icon size="20" src={Play} class="text-white" />

              <p class="text-sm text-white ml-1">Играть</p>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 w-full flex flex-wrap-reverse">
      <!-- Description -->
      <div class="w-2/3 relative p-3">
        <div class="bg-input bg-opacity-50 rounded-md w-full h-full px-4 py-2">
          <h1 class="text-lg text-white opacity-80 mb-4">Описание</h1>
          
          <p class="text-white opacity-60">{ @html game.landingPageConfig?.description }</p>
        </div>
      </div>

      <div class="w-1/3 p-3">
        <div class="bg-input bg-opacity-50 rounded-md w-full h-full px-4 py-2">
          <h1 class="text-lg text-white opacity-80 mb-2">Ссылки</h1>
          
          { #if game.landingPageConfig?.headerLinks?.length > 0 }
            { #each game.landingPageConfig.headerLinks as link }
              <button on:click={() => { window.location.href = link.href }} class="w-full text-left px-4 py-1.5 my-0.5 rounded-md hover:bg-container transition-all duration-200 ease-in-out">
                <p class="text-white opacity-60">{ link.text }</p>
              </button>
            { /each }
          { /if }
        </div>
      </div>
    </div>
  { :else }
    <div class="w-full h-screen flex flex-col items-center justify-center">
      <Icon size="60" class="text-red-500" src={Exclamation} />

      <div class="mt-4 w-1/3 text-center">
        <h1 class="text-xl text-white">Игра не найдена</h1>
        <p class="text-sm text-white opacity-60">Вероятнее всего, вы перешли на неправильную ссылку. Ну ничего страшного! Вы всё ещё можете перейти на Главную страницу и найти игру по вашему вкусу.</p>
      </div>
    </div>
  { /if }
{ /if }