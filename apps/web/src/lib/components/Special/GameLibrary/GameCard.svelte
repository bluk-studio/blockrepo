<script lang='ts'>
  // Importing modules
  import type { Game } from "../../../../generated/types/game";
  import TagWrapper from "../Tags/TagWrapper.svelte";

  export let game: Game;
</script>

<div class="w-1/2 relative px-2 py-2">
  <div style="background-image: url({ game.thumbnail }); background-size: cover; background-position: center;" class="w-full h-64 rounded-t-md"></div>
  
  <!-- Container -->
  <div class="w-full rounded-b-md bg-input bg-opacity-50 px-3 py-4">
    <!-- Game title -->
    <h1 class="mx-1.5 text-xl text-white">{ game.name }</h1>
    
    <!-- Tags -->
    { #if game.tags?.length > 0 }
      <div class="flex flex-wrap">
        { #each game.tags as tag }
          <div class="mx-1.5 my-0.5">
            <TagWrapper {tag} />
          </div>
        { /each }
      </div>
    { /if }

    <!-- Description -->
    <div class="mt-2 px-2">
      <p class="text-sm text-white opacity-80">{ @html game.landingPageConfig?.description ?? 'Empty description' }</p>
    </div>

    <!-- Buttons -->
  </div>
</div>