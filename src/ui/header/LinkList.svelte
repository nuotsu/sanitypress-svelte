<InteractiveDetails class="group relative" closeAfterNavigation>
	<summary class="flex items-center gap-1 md:px-3">
		{link.label}
		<Icon
			icon="carbon:chevron-right"
			class="transition-transform group-open:rotate-90 md:rotate-90"
		/>
	</summary>

	<ul
		class="
			anim-fade-to-b md:frosted-glass left-0 top-full px-3 py-2 max-md:border-l
			md:absolute md:min-w-max md:rounded md:border md:bg-canvas md:shadow-md
		"
	>
		{#each links as link}
			<li>
				<CTA
					class={cn(
						'hover:link inline-block py-px',
						link.external?.startsWith('http') && 'is-external',
					)}
					{link}
				/>
			</li>
		{/each}
	</ul>
</InteractiveDetails>

<script lang="ts">
	import InteractiveDetails from '$/ui/InteractiveDetails.svelte'
	import Icon from '@iconify/svelte'
	import CTA from '$/ui/CTA.svelte'
	import { cn } from '$/lib'

	const { link, links = [] }: { link: Sanity.Link; links?: Sanity.Link[] } =
		$props()
</script>
