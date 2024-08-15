<p class="technical text-accent/60 {className}">
	{#if children}
		{@render children()}
	{:else}
		{stegaClean(pretitle)}
	{/if}
</p>

<script lang="ts">
	import { stegaClean } from '@sanity/client/stega'

	const {
		pretitle,
		class: className,
		children,
	}: {
		pretitle?: string
		class?: string
		children?: any
	} = $props()
</script>
