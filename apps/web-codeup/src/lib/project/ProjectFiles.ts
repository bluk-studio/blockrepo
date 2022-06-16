import { writable } from "svelte/store";

function _initialize() {
  const { subscribe, update } = writable();

  return {
    subscribe,
  };
};

export const ProjectFiles = _initialize();