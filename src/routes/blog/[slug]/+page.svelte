<script lang="ts">
	import TagBadge from '../TagBadge.svelte';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { BlogPost, metadata } = data;

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
	<title>{metadata.title}</title>
	<meta content={metadata.description} name="description" />
	<meta content={metadata.picture} property="og:image" />
	<meta content={metadata.title} property="og:title" />
	<meta content={metadata.description} property="og:description" />
	<meta content="https://peter-dx.vercel.app/blog/{metadata.slug}" property="og:url" />
	<meta content="summary" property="twitter:card" />
</svelte:head>

<h1 class="text-balance">
	<span class="text-balance" use:transition={`blog-title-${metadata.slug}`}
		>{metadata.title} —</span>
	<span class="text-muted-foreground" use:transition={`blog-description-${metadata.slug}`}
		>{metadata.description}</span>
</h1>
<small use:transition={`blog-date-${metadata.slug}`}
	>{formatter.format(new Date(metadata.date))}</small>

<div class="mt-4 flex flex-wrap gap-2">
	{#each metadata.tags as tag}
		{@const transitionKey = metadata.slug}
		<TagBadge {tag} onClick={() => filterByTag(tag)} {transitionKey} />
	{/each}
</div>

<BlogPost />
