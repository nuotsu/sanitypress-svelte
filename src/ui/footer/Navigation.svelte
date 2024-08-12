<nav class="flex flex-wrap items-start gap-x-12 gap-y-6 max-sm:flex-col">
	{#each menu?.items || [] as item}
		{#if item._type === 'link'}
			<CTA class="hover:link" {...item} />
		{:else if item._type === 'link.list'}
			<div class="space-y-2 text-left">
				<div class="technical text-xs">
					<CTA link={item.link}>
						{stegaClean(item.link.label || item.link.internal?.title)}
					</CTA>
				</div>

				<ul>
					{#each item.links || [] as link}
						<li>
							<CTA
								class={cn(
									'inline-block py-px hover:underline',
									link.external?.startsWith('http') && 'is-external',
								)}
								{link}
							>
								{stegaClean(link.label || link.internal?.title)}
							</CTA>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	{/each}
</nav>

<script lang="ts">
	import { cn } from '$/lib'
	import CTA from '$/ui/CTA.svelte'
	import { stegaClean } from '@sanity/client/stega'

	const { menu }: { menu?: Sanity.Navigation } = $props()
</script>
