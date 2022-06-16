<script lang="ts">
  // Importing modules
  import { RouterStore } from "./lib/stores/Router.store";
  import { onMount } from "svelte";

  $: screenComponent = $RouterStore.screens.find((screen) => screen.id == $RouterStore.currentScreen)?.component;

  window.addEventListener('message', (message) => {
    console.log('got message');
    console.log(message.data);
  });

  onMount(() => {
    // Trying to figure out current screen
    // @ts-ignore
    const meta = document.head.querySelector('meta[name="app:currentScreen"]').content;
    if (meta) RouterStore.setScreen(meta);
  });
</script>

<!-- Wrapper -->
<main class="mt-4">
  <!-- Current screen -->
  <svelte:component this={screenComponent} />
</main>