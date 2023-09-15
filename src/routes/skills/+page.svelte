<script>
	import DataTable from './DataTable.svelte';

	export let data;
	const { skills } = data;
</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>

<h1 class="my-5 text-2xl">skills i picked up along the way 🤓</h1>

<DataTable {skills} />
