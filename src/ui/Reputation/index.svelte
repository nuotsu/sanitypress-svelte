{#if reputation}
	<div class="flex flex-wrap items-center gap-x-6 gap-y-2 {className}">
		{#await getStargazers(reputation)}
			Loading...
		{:then { count, avatars }}
			<figure class="flex empty:hidden">
				{#if avatars}
					{#each avatars as { avatar_url, login }}
						<Img src={avatar_url} alt={login} width="48" height="48" />
					{/each}
				{:else}{/if}
				{#each reputation.avatars || [] as avatar}
					<Img image={avatar} imageBuilder={(b) => b.width(48)} />
				{/each}
			</figure>

			<div class="grid text-left [figure:empty+&]:text-center">
				<strong class="text-yellow-700">
					{#if reputation.title}
						{reputation.title}
					{:else if !!count}
						⭐ {count} stars
					{:else}
						★★★★★
					{/if}
				</strong>

				{#if reputation.subtitle}
					<small>{reputation.subtitle}</small>
				{/if}
			</div>
		{/await}
	</div>
{/if}

<style lang="postcss">
	figure :global(img) {
		aspect-ratio: 1;
		object-fit: cover;
		width: auto;

		@apply aspect-square h-8 rounded-full border-2 border-canvas;

		&:not(:last-child) {
			@apply -mr-2;
		}
	}
</style>

<script lang="ts">
	import getStargazers from './getStargazers'
	import Img from '$/ui/Img.svelte'

	const {
		reputation,
		class: className,
	}: {
		reputation?: Sanity.Reputation
		class?: string
	} = $props()
</script>
