{#each modules as module}
	{#if module._type === 'hero.saas'}
		<HeroSaaS {...module} />
	{:else}
		<section data-type={module._type}></section>
	{/if}
{/each}

<script lang="ts">
	import HeroSaaS from './HeroSaaS.svelte'

	const { modules = [] }: { modules?: any[] } = $props()
</script>
