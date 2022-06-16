import type { ENodeType, INode } from "$lib/types";
import { writable } from "svelte/store";

export interface ICurrentScriptStore {
  nodes: Array<INode>
};

function _initialize() {
  const { subscribe, update } = writable<ICurrentScriptStore>({ nodes: [] });

  return {
    subscribe,

    // Add node
    addNode(type: ENodeType, id: string, x: number, y: number) {
      update((object) => {
        object.nodes.push({
          id,
          type,

          x,
          y,
        });

        console.log('add node:', object.nodes);

        return object;
      });
    },
  };
};

export const CurrentScript = _initialize();