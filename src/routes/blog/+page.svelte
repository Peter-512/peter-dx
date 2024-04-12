<script lang='ts'>
	import profile from '$lib/images/profile-pic.png';
	import { Button } from '$lib/components/ui/button';
	import { Rss } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator';
	import TagBadge from './TagBadge.svelte';
	import { page } from '$app/stores';
	import { setupViewTransition } from 'sveltekit-view-transition';

	export let data;

	const formatter = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	$: paramTags = $page.url.searchParams.getAll('tags') || [];
	let tagList = '';
	$: {
		if (paramTags.length > 1) {
			const tagCopy = paramTags.slice(0, -1).map(tag => `'${tag}'`);
			tagList = `${tagCopy.join(', ')} and '${paramTags.at(-1)}'`;
		} else {
			tagList = `'${paramTags[0]}'`;
		}
	}
	$: filteredPosts = data.posts.filter(({ tags }) => paramTags.length === 0 || paramTags.every(tag => tags.includes(tag)));

	const { transition } = setupViewTransition();
</script>

<svelte:head>
	<title>Blog</title>
	<meta content='A collection of blog posts written by me.' name='description' />
	<meta content='Blog' property='og:title' />
	<meta content='A collection of blog posts written by me.' property='og:description' />
	<meta content='https://peter-dx.vercel.app/blog' property='og:url' />
	<meta content={profile} property='og:image' />
	<meta content='summary_large_image' name='twitter:card' />
</svelte:head>

<div class='flex flex-col gap-3 max-w-3xl m-auto'>
	<div class='flex justify-between'>
		<h1 class='mb-4 text-2xl'>stuff i wrote ✍🏻</h1>
		<Button href='rss.xml' target='_blank' variant='secondary'>
			RSS
			<Rss class='ml-2' />
		</Button>
	</div>
	<ul>
		{#each filteredPosts as { title, description, date, slug, tags }}
			{#if paramTags.length === 0 || paramTags.every(tag => tags.includes(tag))}
				<li>
					<div class='flex flex-col'>
						<div class='flex justify-between'>
						<span use:transition={`blog-title-${slug}`}>
							<Button class='px-0 text-lg' variant='link' href='/blog/{slug}'>{title}</Button>
						</span>
							<small use:transition={`blog-date-${slug}`}
								   class='text-sm'>{formatter.format(new Date(date))}</small>
						</div>
						<p use:transition={`blog-description-${slug}`}
						   class='text-muted-foreground'>{description}</p>
						<div class='flex flex-wrap gap-2 my-4'>
							{#each tags as tag}
								<TagBadge size='sm' {tag} transitionKey={slug} />
							{/each}
						</div>
						<Separator class='mt-2 mb-6' />
					</div>
				</li>
			{/if}
		{:else}
			<p>no blog posts with tag{paramTags.length > 1 ? 's' : ''} {tagList} yet</p>
		{/each}
	</ul>
</div>
