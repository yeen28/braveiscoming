<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		if (1) {
			location.href = "/login";
		}
	});
</script>

<svelte:head>
	<title>MyShop</title>
	<meta name="description" content="A Wordle clone written in SvelteKit" />
</svelte:head>

<div>
	<h1>MyShop</h1>
</div>

<style>
</style>
