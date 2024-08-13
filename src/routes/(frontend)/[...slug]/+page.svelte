{page?.title}

<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader'
	import { pageQuery } from '$/lib/sanity/queries'

	export let data

	const query = useQuery<Sanity.Page>({
		query: pageQuery,
		params: data.params,
		options: { initial: data.page },
	})

	$: ({ data: page } = $query)
</script>
