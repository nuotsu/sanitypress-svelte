<header
	class="frosted-glass sticky top-0 z-10 border-b border-ink/10 bg-canvas"
>
	<div class="mx-auto grid max-w-screen-xl items-center gap-x-6 p-4">
		<div class="[grid-area:logo]">
			<a class="h3 md:h2 inline-block" href="/">
				<span class="text-gradient">{site?.title}</span>
			</a>
		</div>

		<!-- Navigation -->

		<!-- CTA List -->

		<!-- Toggle -->
	</div>
</header>

<script lang="ts">
	import { siteQuery } from '$/lib/sanity/queries'
	import { page } from '$app/stores'
	import { useQuery } from '@sanity/svelte-loader'

	const query = useQuery<Sanity.Site>({
		query: siteQuery,
		options: {
			initial: $page.data.initial,
		},
	})

	$: ({ data: site } = $query)
</script>
