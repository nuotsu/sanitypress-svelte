<svelte:head>
	<meta name="robots" content="noindex" />
	<meta name="referrer" content="same-origin" />
	<link rel="icon" href="https://fav.farm/🧡" />
</svelte:head>

<div id="studio" bind:this={studio}></div>

<style>
	:global(body) {
		margin: 0;
	}

	#studio {
		height: 100vh;

		& :global(> div) {
			height: 100%;
		}
	}
</style>

<script lang="ts">
	import { renderStudio } from 'sanity'
	import config from '$/sanity/sanity.config'
	import { onMount } from 'svelte'

	let studio: HTMLDivElement

	onMount(() => {
		if (studio) {
			renderStudio(studio, config)
		}
	})
</script>
