<header
	class="frosted-glass sticky top-0 z-10 border-b border-ink/10 bg-canvas max-md:header-open:shadow-lg"
>
	<div class="mx-auto grid max-w-screen-xl items-center gap-x-6 p-4">
		<div class="[grid-area:logo]">
			<Logo {site} class="text-gradient" />
		</div>

		<Navigation menu={site?.headerMenu} />

		<CTAList
			ctas={site?.ctas}
			class="[grid-area:ctas] max-md:*:w-full max-md:header-closed:hidden md:ml-auto"
		/>

		<Toggle />
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
	import Logo from '$/ui/Logo.svelte'
	import Navigation from './Navigation.svelte'
	import CTAList from '$/ui/CTAList.svelte'
	import Toggle from './Toggle.svelte'

	const { site }: { site?: Sanity.Site } = $props()
</script>
