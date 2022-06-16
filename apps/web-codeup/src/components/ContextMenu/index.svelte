<script lang="ts">
  // Importing modules
  import { ContextMenu } from '../../lib/canvas/contextMenu';
  import { onMount } from 'svelte';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Calculator, Chat, ChevronDown, ChevronLeft, ColorSwatch, Filter, Sparkles, Support } from '@steeze-ui/heroicons';
  import { AllNodes, NodeCategories, NodeTypes } from '$lib/nodes';
  import { CurrentScript } from '$lib/project';
  import { instance as panzoomInstance } from '$lib/canvas/panzoomInstance';

  // Variables
  let element: HTMLElement;
  let currentCategory: string | null;
  
  onMount(() => {
    // Adding event listeners
    element.addEventListener('mouseleave', () => {
      ContextMenu.close();
    });
  });
</script>

<!-- Context menu layout -->
<div style="top: { $ContextMenu.y }px; left: { $ContextMenu.x }px" class="absolute { $ContextMenu.isOpened ? "" : "hidden" } z-20 panzoom-exclude">
  <div bind:this={element} style="max-height: 800px;" class="bg-slate-700 rounded-md shadow-xl px-4 py-2 overflow-y-auto">
    <!-- Header -->
    <div class="mb-2 py-2 w-full flex items-stretch justify-between">
      { #if currentCategory != null }
        <!-- Back -->
        <button on:click={() => currentCategory = null} class="mr-2 bg-gray-800 rounded-md px-2 py-1 flex items-center">
          <Icon src={ChevronLeft} size="14" class="text-white opacity-60" />

          <p class="text-sm opacity-60 text-white ml-1">Назад</p>
        </button>
      { /if }

      <!-- Filters -->
      <button class="bg-gray-800 rounded-md px-2 py-1 flex items-center">
        <Icon src={Filter} size="14" class="text-white opacity-60" />

        <p class="text-sm opacity-60 text-white ml-1">Поиск</p>
      </button>
    </div>

    { #if currentCategory != null }
      { @const category = NodeCategories[currentCategory] }

      { #if category != null }
        <!-- Category header -->
        <div class="w-full flex items-center mb-2">
          <div class="p-2 rounded-md bg-gray-800">
            <Icon src={category.icon} size="20" class="text-white opacity-60" />
          </div>

          <div class="ml-2">
            <h1 class="text-md text-white opacity-60">{ category.title }</h1>
            <p class="text-xs text-white opacity-60">Елементов: { category.nodes.length }.</p>
          </div>
        </div>

        <!-- Listing this categorie's nodes -->
        <div class="flex flex-col">
          { #each category.nodes as nodeKey }
            { @const node = AllNodes[nodeKey.type][nodeKey.id] }
            { @const typeMeta = NodeTypes[nodeKey.type] }

            { #if node && typeMeta }
              <div on:click={() => {
                // Adding this node to CurrentScript
                if (!$ContextMenu.x || !$ContextMenu.y || !$panzoomInstance) return;
                
                const instance = $panzoomInstance;
                const scale = instance.getScale();
                
                const x = $ContextMenu.x;
                const y = $ContextMenu.y;

                const placeX = instance.getPan().x;
                const placeY = instance.getPan().y;

                const offsetX = x - placeX;
                const offsetY = y - placeY;
                
                //Scaled coords
                const scaledX = offsetX * scale;
                const scaledY = offsetY * scale;

                CurrentScript.addNode(nodeKey.type, nodeKey.id, scaledX, scaledY);
                
                // Closing
                ContextMenu.close();
              }} class="cursor-pointer w-full px-2 py-2 my-1 rounded-md hover:bg-gray-800 transition-all ease-in-out duration-150 group">
                <!-- Type and "More info" button -->
                <div class="mb-0.5 flex items-stretch justify-between">

                  <div style="background: { typeMeta.color }" class="px-2 rounded-full">
                    <p class="text-extra-xs text-white">{ typeMeta.title }</p>
                  </div>

                  <div class="px-2 rounded-full hidden group-hover:flex hover:bg-gray-900 bg-gray-700 items-center">
                    <Icon src={ChevronDown} size="10" class="text-white" />
                  </div>
                </div>

                <!-- Text -->
                <!-- <span class="border-b-2 border-dotted border-indigo-500"> </span> -->
                <h1 class="text-sm text-white opacity-60">{ node.documentation.title }</h1>
              </div>
            { /if }
          { /each }

        </div>
      { :else }
        <p>Unknown category</p>
      { /if }
    { :else }
      <!-- Items category -->
      { #each Object.keys(NodeCategories) as key }
        { @const category = NodeCategories[key] }

        <div class="my-2">
          <button on:click={() => {
            currentCategory = key;
          }} class="flex items-center opacity-60 w-full rounded-md pr-4 hover:bg-gray-800 transition-all ease-in-out duration-150">
            <div class="w-7 h-7 rounded-md bg-gray-800 flex justify-center items-center">
              <Icon src={ category.icon } size="20" class="text-white" />
            </div>

            <h1 class="text-base font-thin ml-2 text-white">{ category.title }</h1>
          </button>
        </div>
      { /each }
    { /if }
    </div>
</div>