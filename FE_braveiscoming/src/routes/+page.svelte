<script lang="ts">
	import Main from '../components/Main.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="This page is Home" />
</svelte:head>

<section>
	<Main />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
