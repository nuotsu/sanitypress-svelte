<footer class="bg-ink text-white">
	<div class="section border-b border-canvas/20">
		<div class="mx-auto max-w-screen-xl space-y-8">
			<div
				class="flex flex-wrap justify-between gap-x-12 gap-y-8 max-sm:flex-col"
			>
				<div
					class="flex flex-col gap-3 self-start max-sm:mx-auto max-sm:items-center"
				>
					<Logo {site} />

					<!-- Social -->
				</div>

				<!-- Navigation -->
			</div>
		</div>
	</div>

	<div class="flex flex-wrap justify-center gap-x-6 gap-y-2 p-4 text-sm">
		&copy; {new Date().getFullYear()}

		{#if site?.copyright}
			<PortableText value={site?.copyright} components={{}} />
		{:else}
			{site?.title}
		{/if}
	</div>
</footer>

<script lang="ts">
	import { PortableText } from '@portabletext/svelte'
	import Logo from '$/ui/Logo.svelte'

	const { site }: { site?: Sanity.Site } = $props()
</script>
