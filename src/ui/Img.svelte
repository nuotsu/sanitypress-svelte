{#if src}
	<img {src} alt="" {width} {height} loading="lazy" {...props} />
{/if}

<script lang="ts">
	import { urlFor } from '$/lib/sanity/urlFor'
	import {
		getImageDimensions,
		type SanityImageSource,
	} from '@sanity/asset-utils'
	import type { ImageUrlBuilder } from 'sanity'
	import type { HTMLImgAttributes } from 'svelte/elements'

	const {
		src: srcString,
		image,
		imageBuilder,
		...props
	}: {
		image?: Sanity.Image
		imageBuilder?: (builder: ImageUrlBuilder) => ImageUrlBuilder
	} & HTMLImgAttributes = $props()

	const src = image?.asset
		? imageBuilder
			? imageBuilder(urlFor(image)).auto('format').url()
			: urlFor(image).auto('format').url()
		: srcString

	const { width = undefined, height = undefined } = image
		? getImageDimensions(image as SanityImageSource)
		: {}
</script>
