<script lang="ts">
  // Importing modules
  import type { Game } from "../../../generated/types/game";
  import { Fire, Star } from "@steeze-ui/heroicons";
  import { Icon } from '@steeze-ui/svelte-icon';
import { goto } from "$app/navigation";

  $: tag = tags.find((x) => game?.tags?.includes(x.id));

  // Tags settings (+todo move somewhere else)
  const tags = [
    {
      id: 'popular',
      icon: Star,
      color: '#facc15',
      text: 'Популярное',
    },
    {
      id: 'new',
      icon: Fire,
      color: '#4338ca',
      text: 'Новое',
    },
  ];

  export let game: Game;
</script>

<button on:click={() => {
  goto(`/game/${ game.id }`);
}} class="w-full px-4 py-3 my-2 flex items-center relative">
  <!-- Game Logo -->
  <div style="background: url('{ game.thumbnail }'); background-size: cover; background-position: center;" class="w-10 h-10 bg-icon-button rounded-md"></div>

  <!-- Text -->
  <div class="ml-2">
    { #if tag != null }
      <div class="flex items-center">
        <Icon src={ tag.icon } size="15" style="color: { tag.color };" />

        <p class="ml-0.5 text-xs text-gray-100 opacity-70">{ tag.text }</p>
      </div>
    { /if }

    <h1 class="text-base text-white font-medium">{ game.name }</h1>
  </div>
</button>