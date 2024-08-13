<nav class="group flex flex-wrap items-center {className}">
	{#each menu?.items || [] as item}
		{#if item._type === 'link'}
			<CTA
				class="px-2 py-1 text-lg hover:!opacity-100 group-has-[a:hover]:opacity-50"
				link={item}
				aria-label={item.label}
			>
				{#if item.external?.includes('facebook.com')}
					<Icon icon="fa:facebook" />
				{:else if item.external?.includes('github.com')}
					<Icon icon="carbon:logo-github" />
				{:else if item.external?.includes('instagram.com')}
					<Icon icon="fa:instagram" />
				{:else if item.external?.includes('linkedin.com')}
					<Icon icon="fa:linkedin" />
				{:else if item.external?.includes('tiktok.com')}
					<Icon icon="fa6-brands:tiktok" />
				{:else if item.external?.includes('twitter.com') || item.external?.includes('//x.com')}
					<Icon icon="pajamas:twitter" />
				{:else if item.external?.includes('youtube.com')}
					<Icon icon="fa:youtube-play" />
				{:else}
					<Icon icon="lucide:link" />
				{/if}
			</CTA>
		{/if}
	{/each}
</nav>

<script lang="ts">
	import CTA from '$/ui/CTA.svelte'
	import Icon from '@iconify/svelte'

	const {
		menu,
		class: className,
	}: {
		menu?: Sanity.Navigation
		class?: string
	} = $props()
</script>
