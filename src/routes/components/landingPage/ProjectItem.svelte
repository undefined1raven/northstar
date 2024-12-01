<script lang="ts">
	import CodeBracketDeco from '../../deco/CodeBracketDeco.svelte';
	import RedirectDeco from '../../deco/RedirectDeco.svelte';
	import { globalStyle } from '../../../stores/globalStyle.svelte';
	import type { IProject } from '../../../data/projects';
	const iconClass = 'w-10 w-8 transition-colors hover:bg-accent20  text-color rounded-md p-1';
	const { project } = $props();
	const projectTyped = project as IProject;
</script>

<div class="h-full w-full p-5">
	<div class="flex h-10 flex-row justify-end gap-3">
		<CodeBracketDeco color={$globalStyle.color} classNames={iconClass}></CodeBracketDeco>
		<RedirectDeco color={$globalStyle.color} classNames={iconClass}></RedirectDeco>
	</div>
	<span class="text-xl text-text">{projectTyped.description}</span>
	<span class="text-xl text-text">{projectTyped.name}</span>
</div>
