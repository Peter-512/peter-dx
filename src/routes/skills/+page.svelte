<script>
	import DataTable from './DataTable.svelte';

	export let data;
	const { skills } = data;
</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>

<section class='max-w-3xl m-auto'>

	<h1 class='my-5 text-2xl'>skills i picked up along the way 🤓</h1>

	<DataTable {skills} />
</section>
