<SkipToContent />
<Header />

<main id="main-content" tabIndex="-1">
	<slot></slot>
</main>

<Footer />
<PreviewState />

<script lang="ts">
	import { onMount } from 'svelte'
	import { enableVisualEditing } from '@sanity/visual-editing'
	import { useLiveMode } from '@sanity/svelte-loader'
	import client from '$lib/sanity/client'
	import SkipToContent from '$/ui/SkipToContent.svelte'
	import Header from '$/ui/header/index.svelte'
	import Footer from '$/ui/footer/index.svelte'
	import PreviewState from '$/ui/PreviewState.svelte'
	import '$/styles/app.css'

	onMount(() => {
		enableVisualEditing()
		useLiveMode({
			client: client.withConfig({
				stega: true,
			}),
		})
	})
</script>
