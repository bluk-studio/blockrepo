import { writable } from 'svelte/store';
import type { PanzoomObject } from '@panzoom/panzoom';

export const instance = writable<PanzoomObject | null>(null);