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
	<meta
		content={data.metadata.description}
		name='description' />
	<meta content={data.metadata.picture} property='og:image' />
	<meta content={data.metadata.title} property='og:title' />
	<meta content={data.metadata.description} property='og:description' />
	<meta content='https://peter-dx.vercel.app/blog/{data.metadata.slug}' property='og:url' />
	<meta content='summary' property='twitter:card' />
</svelte:head>

<h1 class='text-balance'>
	<span class='whitespace-nowrap'>{data.metadata.title} —</span>
	<span class='text-muted-foreground'>{data.metadata.description}</span>
</h1>
<small class=''>{formatter.format(new Date(data.metadata.date))}</small>

<div class='flex gap-2 mt-4'>
	{#each data.metadata.tags as tag}
		<span class='py-1 px-3 rounded-full bg-accent text-sm'>&num;{tag}</span>
	{/each}
</div>

<svelte:component this={data.content}></svelte:component>