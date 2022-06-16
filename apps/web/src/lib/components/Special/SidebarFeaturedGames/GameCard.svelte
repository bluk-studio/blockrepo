<script lang="ts">
  // Importing modules
  import type { Game } from "../../../../generated/types/game";
  import { Fire, Star } from "@steeze-ui/heroicons";
  import { Icon } from '@steeze-ui/svelte-icon';
  import { goto } from "$app/navigation";
  import { slide } from 'svelte/transition';

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

<button in:slide on:click={() => {
  goto(`/game/${ game.id }`);
}} class="w-full p-3 my-2 flex items-center relative hover:bg-icon-button hover:bg-opacity-50 transition-all duration-200 ease-in-out rounded-md">
  <!-- Game Logo -->
  <div style="background: url('{ game.thumbnail }'); background-size: cover; background-position: center;" class="w-12 h-12 bg-icon-button rounded-md"></div>

  <!-- Text -->
  <div class="ml-2 text-left">
    { #if tag != null }
      <div class="flex items-center">
        <Icon src={ tag.icon } size="15" style="color: { tag.color };" />

        <p class="ml-0.5 text-xs text-gray-100 opacity-70">{ tag.text }</p>
      </div>
    { /if }

    <h1 class="text-base text-white font-medium">{ game.name }</h1>
  </div>
</button>