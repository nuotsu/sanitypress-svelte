<section
	class={cn(
		hasImage &&
			'grid overflow-hidden bg-ink text-canvas *:col-span-full *:row-span-full',
	)}
>
	{#if hasImage}
		<picture>
			<ResponsiveImg
				image={bgImageMobile}
				imageBuilder={(b) => b.width(1200)}
			/>
			<Img
				class="max-h-fold size-full object-cover"
				image={bgImage}
				imageBuilder={(b) => b.width(1800)}
				draggable={false}
			/>
		</picture>
	{/if}

	<div class="section flex w-full flex-col">
		<div
			class={cn(
				'richtext relative isolate max-w-xl [&_:is(h1,h2)]:text-balance',
				bgImage?.asset && 'has-img text-shadow',
				{
					'mb-8': stegaClean(alignItems) === 'start',
					'my-auto': stegaClean(alignItems) === 'center',
					'mt-auto': stegaClean(alignItems) === 'end',
				},
				{
					'mr-auto': stegaClean(textAlign) === 'left',
					'mx-auto': stegaClean(textAlign) === 'center',
					'ml-auto': stegaClean(textAlign) === 'right',
				},
			)}
			style:text-align={stegaClean(textAlign)}
		>
			<Pretitle {pretitle} class={cn(hasImage && 'text-canvas/70')} />
			<PortableText value={content} components={{}} />
			<Reputation
				{reputation}
				class={cn('!mt-4', hasImage && '[&_strong]:text-amber-400', {
					'justify-start': stegaClean(textAlign) === 'left',
					'justify-center': stegaClean(textAlign) === 'center',
					'justify-end': stegaClean(textAlign) === 'right',
				})}
			/>
			<CTAList
				{ctas}
				class={cn('!mt-4', {
					'justify-start': stegaClean(textAlign) === 'left',
					'justify-center': stegaClean(textAlign) === 'center',
					'justify-end': stegaClean(textAlign) === 'right',
				})}
			/>
		</div>
	</div>
</section>

<style lang="postcss">
	.has-img::before {
		content: '';
		position: absolute;
		inset: -50%;
		z-index: -1;
		mask-image: radial-gradient(ellipse at center, black 25%, transparent 50%);

		@apply backdrop-brightness-75;
	}
</style>

<script lang="ts">
	import ResponsiveImg from '$/ui/ResponsiveImg.svelte'
	import Img from '$/ui/Img.svelte'
	import Pretitle from '$/ui/Pretitle.svelte'
	import { PortableText } from '@portabletext/svelte'
	import Reputation from '$/ui/Reputation/index.svelte'
	import CTAList from '$/ui/CTAList.svelte'
	import { cn } from '$/lib'
	import { stegaClean } from '@sanity/client/stega'

	const {
		pretitle,
		content,
		ctas,
		reputation,
		bgImage,
		bgImageMobile,
		textAlign,
		alignItems,
	}: Partial<{
		pretitle: string
		content: any
		ctas: Sanity.CTA[]
		reputation: Sanity.Reputation
		bgImage: Sanity.Image
		bgImageMobile: Sanity.Image
		textAlign: 'left' | 'center' | 'right'
		alignItems: 'start' | 'center' | 'end'
	}> = $props()

	const hasImage = !!bgImage?.asset
</script>
