<section class="section space-y-8 text-center">
	<div class="richtext mx-auto max-w-2xl text-balance">
		<Pretitle {pretitle} />
		<PortableText value={content} components={{}} />
		<Reputation {reputation} class="!mt-4 justify-center" />
		<CTAList {ctas} class="!mt-8 justify-center" />
	</div>

	<Img
		{image}
		class={cn(
			'anim-fade-to-t [animation-duration:1s]',
			image?.faded && 'masked',
		)}
		draggable={false}
	/>
</section>

<style>
	section :global(.masked) {
		mask-image: linear-gradient(to bottom, #000 50%, transparent);
	}
</style>

<script lang="ts">
	import { PortableText } from '@portabletext/svelte'
	import Pretitle from '$/ui/Pretitle.svelte'
	import Reputation from '$/ui/Reputation/index.svelte'
	import CTAList from '$/ui/CTAList.svelte'
	import Img from '$/ui/Img.svelte'
	import { cn } from '$/lib'

	const {
		pretitle,
		content,
		ctas,
		reputation,
		image,
	}: Partial<{
		pretitle: string
		content: any
		ctas: Sanity.CTA[]
		reputation: Sanity.Reputation
		image: Sanity.Image & {
			faded?: boolean
		}
	}> = $props()
</script>
