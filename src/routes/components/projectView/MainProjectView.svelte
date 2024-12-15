<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '../../../stores/theme.svelte';

	function onload() {
		setTimeout(() => {
			window.postMessage({ type: 'theme' }, '*');
		}, 300);
	}
	let show = $state(true);
	const { docsUrl = '' } = $props();
	onMount(() => {
		theme.subscribe((value) => {
			show = false;
			setTimeout(() => {
				show = true;
			}, 0);
		});
	});
</script>

<div
	style="height: calc(100% - 6.5rem); width: calc(100% - 6.5rem);"
	class="m-14 mb-14 ml-14 h-full w-full"
>
	{#if show}
		<iframe {onload} src="{docsUrl}/?embed=true&theme={$theme}#/" class="h-full w-full"></iframe>
	{/if}
</div>
