<p class="technical text-accent/60 {className}">
	{#if children}
		{@render children()}
	{:else}
		{stegaClean(value)}
	{/if}
</p>

<script lang="ts">
	import { stegaClean } from '@sanity/client/stega'

	const {
		value,
		class: className,
		children,
	}: {
		value?: string
		class?: string
		children?: any
	} = $props()
</script>
