<script lang='ts'>
	import TagBadge from '../TagBadge.svelte';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { goto } from '$app/navigation';

	export let data;

	const formatter = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	const filterByTag = (tag: string) => {
		goto('/blog', { state: { activeTags: [tag] } });
	};

	const { transition } = setupViewTransition();
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
	<span class='text-balance' use:transition={`blog-title-${data.metadata.slug}`}>{data.metadata.title} —</span>
	<span class='text-muted-foreground'
		  use:transition={`blog-description-${data.metadata.slug}`}>{data.metadata.description}</span>
</h1>
<small use:transition={`blog-date-${data.metadata.slug}`}>{formatter.format(new Date(data.metadata.date))}</small>

<div class='flex gap-2 mt-4 flex-wrap'>
	{#each data.metadata.tags as tag}
		{@const transitionKey = data.metadata.slug}
		<TagBadge {tag} onClick={() => filterByTag(tag)} {transitionKey} />
	{/each}
</div>

<svelte:component this={data.content}></svelte:component>