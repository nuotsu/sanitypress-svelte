<SkipToContent />
<Header {site} />

<main id="main-content" tabIndex="-1">
	{@render children()}
</main>

<Footer {site} />
<PreviewState />

<script lang="ts">
	import { enableVisualEditing } from '@sanity/visual-editing'
	import { useLiveMode } from '@sanity/svelte-loader'
	import client from '$lib/sanity/client'
	import SkipToContent from '$/ui/SkipToContent.svelte'
	import Header from '$/ui/header/index.svelte'
	import Footer from '$/ui/footer/index.svelte'
	import PreviewState from '$/ui/PreviewState.svelte'

	import { useQuery } from '@sanity/svelte-loader'
	import { siteQuery } from '$/lib/sanity/queries'
	import { page } from '$app/stores'

	import '$/styles/app.css'

	const { children }: { children: any } = $props()

	let site: Sanity.Site | undefined = $state()

	$effect.pre(() => {
		enableVisualEditing()
		useLiveMode({
			client: client.withConfig({
				stega: true,
			}),
		})

		const query = useQuery<Sanity.Site>({
			query: siteQuery,
			options: { initial: $page.data.site },
		})

		query.subscribe((q) => (site = q.data))
	})
</script>
