<details bind:this={el} class:safeAreaOnHover {open} {...props}>
	{@render children()}
</details>

<style lang="postcss">
	@screen md {
		.safeAreaOnHover {
			& :global(summary) {
				position: relative;
			}

			&[open] :global(summary:hover::before) {
				content: '';
				position: absolute;
				z-index: 1;
				inset: 0 -1.5em;
				translate: -1em 0;
			}
		}
	}
</style>

<script lang="ts">
	import { afterNavigate } from '$app/navigation'
	import { onMount } from 'svelte'
	import type { HTMLDetailsAttributes } from 'svelte/elements'

	const {
		safeAreaOnHover,
		closeAfterNavigation,
		open: openProp,
		children,
		...props
	}: {
		safeAreaOnHover?: boolean
		closeAfterNavigation?: boolean
		children?: any
	} & HTMLDetailsAttributes = $props()

	let open = $state(openProp)
	closeAfterNavigation && afterNavigate(() => (open = false))

	let el: HTMLDetailsElement
	let isMobile = $state(false)
	onMount(() => {
		isMobile =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent,
			)

		if (!isMobile) {
			el.addEventListener('mouseenter', () => (open = true))
			el.addEventListener('mouseleave', () => (open = false))
		}
	})
</script>
