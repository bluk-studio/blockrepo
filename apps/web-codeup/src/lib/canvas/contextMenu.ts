import { writable } from 'svelte/store';

export interface ContextMenuStore {
  isOpened: boolean,
  x?: number,
  y?: number,

  // Context-sensetive
  node?: Object,
  line?: Object,
};

function _initialize() {
  const { subscribe, update } = writable<ContextMenuStore>({
    isOpened: false,
  });

  return {
    subscribe,

    // +todo context-sensetive objects
    open(x: number, y: number) {
      update((store) => {
        store.isOpened = true;
        
        store.x = x;
        store.y = y;

        return store;
      });
    },

    close() {
      update(() => {
        return { isOpened: false };
      });
    },
  };
};

export const ContextMenu = _initialize();