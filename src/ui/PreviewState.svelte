{#if $isPreviewing}
	<div class="fixed bottom-0 right-4">Previews Enabled</div>
{/if}

<script lang="ts">
	import { isPreviewing } from '@sanity/svelte-loader'
</script>
