<script lang="ts">
  // Importing modules
  import { RouterStore } from '../lib/stores/Router.store';
  import { Icon } from '@steeze-ui/svelte-icon';
</script>

<div class="mt-6 text-white">
  <!-- Text -->
  <h1 class="text-md text-white text-opacity-80">Пожалуйста, выберите окно, которое вы хотите открыть</h1>
  <p class="text-sm text-white text-opacity-60">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nesciunt voluptatibus ex architecto dolor neque.</p>

  <!-- Available screens -->
  <div class="mt-4 flex flex-wrap items-stretch justify-center">
    { #each $RouterStore.screens.filter((screen) => !!screen.meta?.isDisplayed) as screen }
      { @const meta = screen.meta }  
      <button on:click={() => RouterStore.setScreen(screen.id)} class="w-full p-1.5 my-2 shadow-md bg-button-background flex items-center justify-center">
        <!-- Icon -->
        { #if meta.icon != null }
          <Icon src={meta.icon} class="w-5" />
        { /if }

        <!-- Label -->
        <p class="ml-2 text-sm">{ meta.label ?? screen.id }</p>
      </button>
    { /each }
  </div>
</div>