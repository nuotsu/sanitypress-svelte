<a class="inline-grid {className}" href="/">
	<span class="h3 md:h2">{site?.title}</span>

	{#if site?.subtitle}
		<small class="font-bold text-xs">{site?.subtitle}</small>
	{/if}
</a>

<script lang="ts">
	const {
		site,
		class: className,
	}: {
		site?: Sanity.Site
		class?: string
	} = $props()
</script>
