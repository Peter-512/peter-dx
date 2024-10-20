<script lang="ts">
	import { run } from 'svelte/legacy';

	import profile from '$lib/images/profile-pic.png';
	import { Button } from '$lib/components/ui/button';
	import { Rss } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator';
	import TagBadge from './TagBadge.svelte';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import type { BlogPostMetadata } from '$lib/types/types';
	import { slide, fly } from 'svelte/transition';
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	const formatter = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	interface Props {
		data: PageData;
		activeTags?: string[];
	}

	let { data, activeTags = $bindable($page.state.activeTags || []) }: Props = $props();
	run(() => {
		if (
			$page.state.activeTags !== undefined &&
			activeTags.length !== $page.state.activeTags?.length
		) {
			activeTags = $page.state.activeTags;
		}
		if ($page.state.activeTags === undefined) {
			activeTags = [];
		}
	});

	let filteredPosts = $derived(
		activeTags.length > 0
			? (data.posts.filter(({ tags }) =>
					activeTags.every((tag) => tags.includes(tag))
				) as BlogPostMetadata[])
			: data.posts
	);

	const selectTag = (tag: string) => {
		if (activeTags.includes(tag)) {
			return;
		}
		activeTags.push(tag);
		activeTags = activeTags;
		pushState('/blog', { activeTags });
	};

	const unselectTag = (tag: string) => {
		activeTags = activeTags.filter((t) => t !== tag);
		pushState('/blog', { activeTags });
	};

	const unselectAllTags = () => {
		activeTags = [];
		pushState('/blog', { activeTags });
	};

	const { transition } = setupViewTransition();
</script>

<svelte:head>
	<title>Blog</title>
	<meta content="A collection of blog posts written by me." name="description" />
	<meta content="Blog" property="og:title" />
	<meta content="A collection of blog posts written by me." property="og:description" />
	<meta content="https://peter-dx.vercel.app/blog" property="og:url" />
	<meta content={profile} property="og:image" />
	<meta content="summary_large_image" name="twitter:card" />
</svelte:head>

<div class="m-auto flex max-w-3xl flex-col gap-3">
	<div class="flex justify-between">
		<h1 class="mb-4 text-2xl">stuff i wrote ✍🏻</h1>
		<Button href="rss.xml" target="_blank" variant="secondary">
			RSS
			<Rss class="ml-2" />
		</Button>
	</div>
	<ul>
		{#if activeTags.length > 0}
			<div transition:slide class="mb-2 space-x-2">
				filtered posts by
				{#each activeTags as tag}
					<TagBadge
						size="sm"
						{tag}
						onClick={() => unselectTag(tag)}
						transitionKey={`blog-filter-${tag}`}>
						<span class="text-red-500">X</span>
					</TagBadge>
				{/each}
				{#if activeTags.length > 1}
					<span>
						<button
							transition:fly
							class="rounded-full bg-destructive px-3 py-1 text-xs hover:bg-destructive/80"
							onclick={unselectAllTags}
							>clear all
						</button>
					</span>
				{/if}
			</div>
		{/if}
		{#each filteredPosts as { title, description, date, slug, tags }}
			<li transition:slide>
				<div class="flex flex-col">
					<div class="flex justify-between">
						<span use:transition={`blog-title-${slug}`}>
							<Button class="px-0 text-lg" variant="link" href="/blog/{slug}"
								>{title}</Button>
						</span>
						<small use:transition={`blog-date-${slug}`} class="text-sm"
							>{formatter.format(new Date(date))}</small>
					</div>
					<p use:transition={`blog-description-${slug}`} class="text-muted-foreground">
						{description}
					</p>
					<div class="my-4 flex flex-wrap gap-2">
						{#each tags as tag}
							<TagBadge
								size="sm"
								{tag}
								transitionKey={slug}
								onClick={() => selectTag(tag)} />
						{/each}
					</div>
					<Separator class="mb-6 mt-2" />
				</div>
			</li>
		{:else}
			<p>
				no blog posts with tag{activeTags.length > 1 ? 's' : ''}
				{activeTags.map((t) => `'${t}'`).join(', ')}
				yet
			</p>
		{/each}
	</ul>
</div>
