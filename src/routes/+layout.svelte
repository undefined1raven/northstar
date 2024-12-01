<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { globalStyle } from '../stores/globalStyle.svelte';
	import { screenSize } from '../stores/screenSize.svelte';
	//@ts-ignore
	import { debounce } from 'lodash-es';
	onMount(() => {
		if (typeof window !== 'undefined') {
			const handleResize = debounce(() => {
				screenSize.set({
					width: window.innerWidth,
					height: window.innerHeight
				});
			}, 150);
			window.addEventListener('resize', handleResize);
			globalStyle.subscribe((value: { [key: string]: string }) => {
				const keys = Object.keys(value);
				const colorKeys = [
					'textColor',
					'color',
					'inactiveColor',
					'accentColor',
					'inactiveColor',
					'inactiveTextColor'
				];
				for (let ix = 0; ix < keys.length; ix++) {
					const key = keys[ix];
					if (colorKeys.includes(key)) {
						document.documentElement.style.setProperty(`--${key + '20'}`, value[key] + '20');
					}
					document.documentElement.style.setProperty(`--${keys[ix]}`, value[key]);
				}
				document.body.style.background = `linear-gradient(252.37deg, #B7B2FA 0.87%, #9F99F4 51.96%, #A5A2D9 100%)`;
			});
		}
	});

	let { children } = $props();
</script>

{@render children()}

<style>
	:global(:root) {
		--transition: all linear 0.1s;
	}
	:global(body) {
		font-family: 'Baloo Bhaijaan 2', sans-serif;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
	}
</style>
