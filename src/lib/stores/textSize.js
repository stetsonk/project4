import { writable } from 'svelte/store';

// Default size is 1 (100%)
export const textSize = writable(1);

// Helper functions to adjust text size
export function increaseTextSize() {
  textSize.update(size => Math.min(size + 0.1, 1.5)); // Max 150%
}

export function decreaseTextSize() {
  textSize.update(size => Math.max(size - 0.1, 0.8)); // Min 80%
}