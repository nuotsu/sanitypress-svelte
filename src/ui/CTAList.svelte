{#if ctas}
	<div class="flex flex-wrap items-center gap-[.5em] {className}">
		{#each ctas as cta}
			<CTA {...cta} />
		{/each}
	</div>
{/if}

<script lang="ts">
	import CTA from '$/ui/CTA.svelte'

	const {
		ctas,
		class: className,
	}: {
		ctas?: Sanity.CTA[]
		class?: string
	} = $props()
</script>
