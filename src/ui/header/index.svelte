<header
	class="frosted-glass sticky top-0 z-10 border-b border-ink/10 bg-canvas"
>
	<div class="mx-auto grid max-w-screen-xl items-center gap-x-6 p-4">
		<div class="[grid-area:logo]">
			<Logo {site} class="text-gradient" />
		</div>

		<Navigation />
		<!-- CTA List -->
		<!-- Toggle -->
	</div>
</header>

<style lang="postcss">
	header > div {
		grid-template:
			'logo toggle' auto
			'nav nav' auto
			'ctas ctas' auto / 1fr auto;

		@screen md {
			grid-template: 'logo nav ctas' auto / 1fr auto 1fr;
		}
	}
</style>

<script lang="ts">
	import { siteQuery } from '$/lib/sanity/queries'
	import { page } from '$app/stores'
	import { useQuery } from '@sanity/svelte-loader'
	import Logo from '$/ui/Logo.svelte'
	import Navigation from './Navigation.svelte'

	const query = useQuery<Sanity.Site>({
		query: siteQuery,
		options: {
			initial: $page.data.initial,
		},
	})

	$: ({ data: site } = $query)
</script>
