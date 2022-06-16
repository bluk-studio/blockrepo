<script lang="ts">
  // Importing modules
  import type { Game } from "src/generated/types/game";
  import { onMount } from "svelte";
  import GameCard from './GameCard.svelte';
	import { BarLoader } from 'svelte-loading-spinners';
  import { GamesListClient } from "$lib/services/Clients";

  onMount(async () => {
    const { response } = await GamesListClient.fetchFeatured({});
    
    games = response.result ?? [];
    loading = false;
  });

  let loading = true;
  let games: Game[] = [];
</script>

{ #if loading }
  <div class="py-6 flex justify-center">
    <BarLoader color="#262b3f" />
  </div>
{ :else }
  { #each games as game }
    <GameCard {game} />
  { /each }
{ /if }