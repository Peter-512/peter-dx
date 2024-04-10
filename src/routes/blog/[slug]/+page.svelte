<script lang='ts'>
	export let data;

	const formatter = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<h1 class='text-balance'>
	<span class='whitespace-nowrap'>{data.metadata.title} —</span>
	<span class='text-muted-foreground'>{data.metadata.description}</span>
</h1>
<small class=''>{formatter.format(new Date(data.metadata.date))}</small>
<svelte:component this={data.content}></svelte:component>