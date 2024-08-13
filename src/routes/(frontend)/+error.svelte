<section class="section richtext text-center">
	<h1>{$page.status}</h1>

	{#if $page.error?.message}
		<p>{$page.error.message}</p>
	{/if}
</section>

<script lang="ts">
	import { page } from '$app/stores'
</script>
