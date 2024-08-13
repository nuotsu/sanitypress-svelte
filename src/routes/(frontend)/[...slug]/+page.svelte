{data?.title}

<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader'
	import { pageQuery } from '$/lib/sanity/queries'
	import { page } from '$app/stores'

	let data: Sanity.Page | undefined = $state()

	$effect(() => {
		const query = useQuery<Sanity.Page>({
			query: pageQuery,
			params: $page.data.params,
			options: { initial: $page.data.page },
		})

		query.subscribe((q) => (data = q.data))
	})
</script>
