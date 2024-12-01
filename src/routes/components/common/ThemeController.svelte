<script>
	import { globalStyle } from '../../../stores/globalStyle.svelte';
	import { theme } from '../../../stores/theme.svelte';
	import LunaDeco from '../../deco/LunaDeco.svelte';
	import SunDeco from '../../deco/SunDeco.svelte';

	const buttonStyle =
		'flex hover:bg-color20 transition-all linear duration-75 h-full w-1/2 items-center justify-center';
</script>

<div class="absolute left-1 top-1 flex h-12 w-32 flex-row rounded-xl border border-color">
	<button
		onclick={() => {
			sessionStorage.setItem('theme', 'light');
			theme.set('light');
		}}
		class={buttonStyle}
	>
		<SunDeco color={$globalStyle.color}></SunDeco>
	</button>
	<button
		onclick={() => {
			sessionStorage.setItem('theme', 'dark');
			theme.set('dark');
		}}
		class={buttonStyle + ' border-l border-color'}
	>
		<LunaDeco color={$globalStyle.color}></LunaDeco>
	</button>
</div>
