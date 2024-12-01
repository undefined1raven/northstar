import { writable } from 'svelte/store';

const screenSize = writable({ height: window.innerHeight, width: window.innerWidth });

export { screenSize };
