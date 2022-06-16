// Importing types
import type { Subscriber } from 'svelte/store';

export function fetchStore(subscribe: Subscriber<any>) {
	return new Promise((resolve) => {
		subscribe((object) => {
			resolve(object);
		});
	});
}