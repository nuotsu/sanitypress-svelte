<a href={href()} class="btn {style} {className}">
	{#if link?.type === 'internal'}
		{@render content()}
	{:else if link?.type === 'external'}
		{@render content()}
	{:else}
		{@render content()}
	{/if}
</a>

{#snippet content()}
	{#if children}
		{@render children()}
	{:else}
		{link?.label || link?.internal?.title || link?.external}
	{/if}
{/snippet}

<script lang="ts">
	import processUrl from '$/lib/processUrl'
	import { stegaClean } from '@sanity/client/stega'
	import type { HTMLAnchorAttributes } from 'svelte/elements'

	const {
		style,
		link,
		class: className,
		children,
	}: {
		children?: any
	} & Sanity.CTA &
		HTMLAnchorAttributes = $props()

	function href() {
		switch (link?.type) {
			case 'internal':
				if (!link.internal) return undefined

				return processUrl(stegaClean(link.internal), {
					base: false,
					params: link.params,
				})

			case 'external':
				return stegaClean(link.external)

			default:
				return undefined
		}
	}
</script>
