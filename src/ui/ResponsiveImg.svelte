{#if srcset}
	<source {srcset} {width} {height} {media} {...props} />
{/if}

<script lang="ts">
	import { urlFor } from '$/lib/sanity/urlFor'
	import {
		getImageDimensions,
		type SanityImageSource,
	} from '@sanity/asset-utils'
	import type { ImageUrlBuilder } from 'sanity'
	import type { HTMLSourceAttributes } from 'svelte/elements'

	const {
		srcset: srcString,
		image,
		imageBuilder,
		media = '(max-width: 768px)',
		...props
	}: {
		image?: Sanity.Image
		imageBuilder?: (builder: ImageUrlBuilder) => ImageUrlBuilder
	} & HTMLSourceAttributes = $props()

	const srcset = image?.asset
		? imageBuilder
			? imageBuilder(urlFor(image)).auto('format').url()
			: urlFor(image).auto('format').url()
		: srcString

	const { width = undefined, height = undefined } = image
		? getImageDimensions(image as SanityImageSource)
		: {}
</script>
