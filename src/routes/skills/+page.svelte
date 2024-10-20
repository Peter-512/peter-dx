<script>
	import DataTable from './DataTable.svelte';

	let { data } = $props();
	const { skills } = data;
</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>

<section class="m-auto max-w-3xl">
	<h1 class="my-5 text-2xl">skills i picked up along the way 🤓</h1>

	<DataTable {skills} />
</section>
