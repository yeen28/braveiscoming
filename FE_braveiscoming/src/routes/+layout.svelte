<script lang="ts">
	import Header from '../components/common/Header.svelte';
	import '../app.css';
	import Footer from '../components/common/Footer.svelte';

	let { children } = $props();
</script>

<div class="app">
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<style>
</style>