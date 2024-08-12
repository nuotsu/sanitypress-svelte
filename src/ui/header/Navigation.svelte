<nav
	class="max-md:anim-fade-to-r max-md:header-closed:hidden flex gap-y-2 [grid-area:nav] max-md:my-4 max-md:flex-col"
>
	{#each menu?.items || [] as item}
		{#if item._type === 'link'}
			<CTA class="hover:link md:px-3" link={item} />
		{:else if item._type === 'link.list'}
			<LinkList {...item} />
		{/if}
	{/each}
</nav>

<script lang="ts">
	import CTA from '$/ui/CTA.svelte'
	import LinkList from './LinkList.svelte'

	const { menu }: { menu?: Sanity.Navigation } = $props()
</script>
