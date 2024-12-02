<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { globalStyle } from '../stores/globalStyle.svelte';
	import { screenSize } from '../stores/screenSize.svelte';
	//@ts-ignore
	import { debounce } from 'lodash-es';
	import { getThemes } from '../data/themes';
	import ThemeController from './components/common/ThemeController.svelte';
	import { theme } from '../stores/theme.svelte';
	onMount(() => {
		if (typeof window !== 'undefined') {
			const themes = getThemes();
			const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const themeOverride = sessionStorage.getItem('theme');
			if (!themeOverride) {
				if (prefersDarkScheme) {
					theme.set('dark');
				} else {
					theme.set('light');
				}
			} else {
				if (themeOverride === 'dark' || themeOverride === 'light') {
					theme.set(themeOverride);
				} else {
					theme.set('light');
				}
			}

			theme.subscribe((value: string) => {
				if (value === 'dark') {
					globalStyle.set(themes.dark);
				} else {
					globalStyle.set(themes.light);
				}
			});

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
					'inactiveTextColor',
					'purple',
					'purpleText',
					'deepBlueText',
					'greenText'
				];
				for (let ix = 0; ix < keys.length; ix++) {
					const key = keys[ix];
					if (colorKeys.includes(key)) {
						document.documentElement.style.setProperty(`--${key + '20'}`, value[key] + '20');
					}
					document.documentElement.style.setProperty(`--${keys[ix]}`, value[key]);
				}
				document.body.style.background = `linear-gradient(252.37deg, ${value.pageColor1} 0.87%, ${value.pageColor2} 51.96%, ${value.pageColor3} 100%)`;
			});
		}
	});

	let { children } = $props();
</script>

<ThemeController></ThemeController>

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
