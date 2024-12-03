<script lang="ts">
	import { globalStyle } from '../stores/globalStyle.svelte';
	import LandingPage from './components/landingPage/landingPage.svelte';
	import Logo from './deco/Logo.svelte';
	import isMobile from '../utils/isMobile';
	import LandingPageMobile from './components/landingPageMobile/LandingPageMobile.svelte';
</script>

{#if isMobile() === false}
	<LandingPage></LandingPage>
{:else}
	<LandingPageMobile></LandingPageMobile>
{/if}
