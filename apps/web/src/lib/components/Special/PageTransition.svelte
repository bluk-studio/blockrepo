<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from 'svelte/transition';

  let isContainerVisible = true;

  onMount(() => {
    setTimeout(() => {
      isContainerVisible = false;
    }, 100);
  });
</script>

{ #if isContainerVisible }
  <div out:fade class="z-50 absolute w-full h-screen bg-container"></div>
{ /if }