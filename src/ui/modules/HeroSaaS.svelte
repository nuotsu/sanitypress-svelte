<section class="section space-y-8 text-center">
	<div class="richtext mx-auto max-w-2xl text-balance">
		<Pretitle value={pretitle} />
		<PortableText value={content} components={{}} />
	</div>
</section>

<script lang="ts">
	import { PortableText } from '@portabletext/svelte'
	import Pretitle from '$/ui/Pretitle.svelte'

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
