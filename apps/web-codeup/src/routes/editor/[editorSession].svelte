<script lang="ts">
  // Importing modules/components
  import Panzoom, { type PanzoomObject } from '@panzoom/panzoom';
  import { onDestroy, onMount } from 'svelte';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { ChevronRight, Folder } from '@steeze-ui/heroicons';
  import BaseUnit from '../../components/Element/BaseElement.svelte';
  import { instance } from '../../lib/canvas/panzoomInstance';
  import { ContextMenu as ContextMenuStore } from '../../lib/canvas/contextMenu';
  import ContextMenu from '../../components/ContextMenu/index.svelte';
  import { CurrentScript } from '$lib/project';
  import { AllNodes } from '$lib/nodes';
  import { ENodeType } from '$lib/types';

  // Variables
  let panzoomInstance: PanzoomObject;
  let canvasElement: HTMLElement;
  let parentElement: HTMLElement;

  onMount(() => {
    // Initializing panzoom library
    panzoomInstance = Panzoom(canvasElement, {
      canvas: true,
      startX: -5000,
      startY: -5000,
    });
    instance.set(panzoomInstance);

    // Adding EventListeners to parent element
    parentElement.addEventListener('wheel', panzoomInstance.zoomWithWheel);
    parentElement.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      // Opening context menu
      ContextMenuStore.open(event.clientX - 50, event.clientY - 20);
    });
  });

  onDestroy(() => {
    if (panzoomInstance) panzoomInstance.destroy;
  });
</script>

<main class="flex flex-col w-full h-screen">
  <!-- Header -->
  <div class="py-3 px-6 bg-white shadow-md w-full flex items-center">
    <!-- Bluk logo -->
		<img class="w-8 h-8" src="https://res.cloudinary.com/lococovu-cdn/image/upload/v1636810372/bluk-studio-black.svg" alt="">

    <!-- File information -->
    <div class="flex ml-4 items-stretch">
      <button class="px-4 py-1.5 rounded-md bg-gray-100 shadow-sm">
        <p class="text-sm">Codeup</p>
      </button>

      <!-- Icon -->
      <Icon src={ChevronRight} size="15" class="mx-2 self-center" />

      <!-- Folder name -->
      <button class="px-4 py-1.5 rounded-md flex items-center bg-gray-100">
        <Icon src={Folder} size="15" />

        <p class="ml-1.5 text-sm">Test Folder</p>
      </button>

      <Icon src={ChevronRight} size="15" class="mx-2 self-center" />

      <!-- Script name -->
      <button class="px-4 py-1.5 rounded-md bg-gray-100">
        <p class="text-sm">Test Script</p>
      </button>
    </div>
  </div>

  <div class="w-full flex flex-grow">
    <!-- Sidebar -->
    <!-- <div class="w-1/4 z-10 bg-gray-100 shadow-md">
    </div> -->

    <!-- Canvas -->
    <div class="w-full flex-grow z-0" bind:this={parentElement}>
      <ContextMenu />

      <div id="canvas" bind:this={canvasElement} style="height: 10000px; width: 10000px;" class="border-2 border-solid border-gray-800 border-opacity-40 w-full h-full relative">
        <!-- Elements -->
        { #each $CurrentScript.nodes as node }
          { @const NodeClass = AllNodes[node.type][node.id] }

          { #if NodeClass }
            <BaseUnit 
              x={node.x}
              y={node.y}
              type={node.type}
              name={NodeClass.documentation.title}
              description={NodeClass.documentation.onNodeDescription}
              inputs={NodeClass.inputs ?? []}
              outputs={NodeClass.outputs ?? []}
            />
          { /if }
        { /each }
      </div>
    </div>
  </div>
</main>

<style>
  #canvas {
    background: linear-gradient(90deg, #e5e7eb 21px, transparent 1%) center, linear-gradient(#e5e7eb 21px, transparent 1%) center, #1f2937;
    background-size: 22px 22px;
    background-repeat: repeat;
  }
</style>