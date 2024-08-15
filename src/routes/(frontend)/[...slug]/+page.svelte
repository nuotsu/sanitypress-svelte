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
	import { pageQuery } from '$/lib/sanity/queries'
	import { page } from '$app/stores'
	import { urlFor } from '$/lib/sanity/urlFor'
	import Modules from '$/ui/modules/index.svelte'

	let data: Sanity.Page | undefined = $state()

	$effect.pre(() => {
		const query = useQuery<Sanity.Page>({
			query: pageQuery,
			params: $page.data.params,
			options: { initial: $page.data.page },
		})

		query.subscribe((q) => (data = q.data))
	})
</script>
