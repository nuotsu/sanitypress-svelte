<svelte:head>
	<title>{data?.metadata.title}</title>
	<meta name="description" content={data?.metadata.description} />
	{#if data?.metadata?.image}
		<meta
			property="og:image"
			content={urlFor(data.metadata.image).width(1200).url()}
		/>
	{/if}
</svelte:head>

<Modules modules={data?.modules} />

<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader'
	import { indexQuery } from '$/lib/sanity/queries'
	import { page } from '$app/stores'
	import { urlFor } from '$/lib/sanity/urlFor'
	import Modules from '$/ui/modules/index.svelte'

	const query = useQuery<Sanity.Page>({
		query: indexQuery,
		params: { slug: 'index' },
		options: { initial: $page.data.index },
	})

	$: ({ data } = $query)
</script>
