<script lang="ts">
	const load = () => {
		fetch('/api/index') // proxy를 통해 BE API 호출
		.then(response => response.json())
		.then(response => console.log(response));
	}
</script>

<div>
	<button on:click={load}>button</button>
</div>

<style>
</style>
