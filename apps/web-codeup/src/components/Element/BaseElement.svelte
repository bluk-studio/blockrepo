<script lang="ts">
  // Importing components
  import { instance as panzoomInstance } from '../../lib/canvas/panzoomInstance';
  import type { ENodeType, IConnectionInput, IConnectionOutput } from '$lib/types';
import { NodeTypes } from '$lib/nodes';

  // Variables
  let nodeElement: HTMLElement;
  let thisX: number, thisY: number, oldX: number, oldY: number;

  // Start dragging process
  function dragStart(event: MouseEvent) {
    event.preventDefault();

    oldX = event.clientX;
    oldY = event.clientY;

    // Adding event listeners
    document.onmousemove = dragging;
    document.onmouseup = dragStop;
  };

  // Stop dragging
  function dragStop(event: MouseEvent) {
    event.preventDefault();

    document.onmouseup = null;
    document.onmousemove = null;
  };

  // During dragging
  function dragging(event: MouseEvent) {
    event.preventDefault();

    thisX = oldX - event.clientX;
    thisY = oldY - event.clientY;
    oldX = event.clientX;
    oldY = event.clientY;

    // Updating this element's position
    const instance = $panzoomInstance;
    const scale = instance != null ? instance.getScale() : 1;

    x = nodeElement.offsetLeft - thisX * (1 / scale);
    y = nodeElement.offsetTop - thisY * (1 / scale);
  };

  // Exporting information about this element
  export let x: number;
  export let y: number;

  export let name: string = "";
  export let description: string = "";

  export let type: ENodeType;

  // +todo normal inputs and outputs interfaces
  export let inputs: Array<IConnectionInput> = [];
  export let outputs: Array<IConnectionOutput> = [];
</script>

<div 
  bind:this={nodeElement} 
  on:mousedown={dragStart}
  style="top: {y}px; left: {x}px;" 
  class="cursor-pointer absolute px-4 py-2 w-fit rounded-xl bg-white border-solid border-4 border-indigo-400 border-opacity-40 panzoom-exclude"
>
  <!-- Title -->
  <div class="pr-4">
    { #if type }
      { @const typeMeta = NodeTypes[type] }

      <div class="flex items-center opacity-60">
        <div style="background: { typeMeta.color }" class="w-2 h-2 rounded-full"></div>

        <p class="text-xs ml-1">{ typeMeta.title }</p>
      </div>
    { /if }

    <!-- Action -->
    <!-- <div style="right: -0.8em;" class="absolute">
      <div class="px-0.5 py-0.5 rounded-md bg-indigo-200">
        <Icon src={ChevronRight} size="20" class="text-white" />
      </div>
    </div> -->

    { #if name }
      <h1 class="text-lg">{ name }</h1>
    { /if }

    { #if description }
      <p class="text-xs opacity-60">{ description }</p>
    { /if }
  </div>

  <!-- I/O -->
  <div class="mt-4 flex">
    <!-- Inputs -->
    { #if inputs.length > 0 }
      <div class="{ outputs.length > 0 ? "w-1/2" : "w-full" }">
        { #each inputs as input }
          <div class="w-full flex items-center justify-start">
            <!-- Control -->
            <div style="left: -0.5em;" class="absolute">
              <!-- Circle -->
              <div class="w-4 h-4 flex justify-center items-center rounded-full bg-white border-2 border-gray-400 border-opacity-70">
                <div class="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              </div>
            </div>

            <!-- Input name -->
            <p class="text-sm opacity-60">{ input.name }</p>
          </div>
        { /each }
      </div>
    { /if }

    <!-- Outputs -->
    { #if outputs.length > 0 }
      <div class="{ inputs.length > 0 ? "w-1/2" : "w-full"  }">
        { #each outputs as output }
          <div class="w-full flex items-center justify-end">
            <!-- Output name -->
            <p class="text-sm opacity-60">{ output.name }</p>
      
            <!-- Control -->
            <div style="right: -0.5em;" class="absolute">
              <!-- Circle -->
              <div class="w-4 h-4 flex justify-center items-center rounded-full bg-white border-2 border-gray-400 border-opacity-70">
                <div class="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        { /each }
      </div>
    { /if }
  </div>
</div>