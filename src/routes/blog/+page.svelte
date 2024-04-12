<script lang='ts'>
	import profile from '$lib/images/profile-pic.png';
	import { Button } from '$lib/components/ui/button';
	import { Rss } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator';

	export let data;

	const formatter = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
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
		{#each data.posts as { title, description, date, slug }}
			<li>
				<div class='flex flex-col'>
					<div class='flex justify-between'>
						<Button class='px-0 text-lg' variant='link' href='/blog/{slug}'>{title}</Button>
						<span class='text-sm'>{formatter.format(new Date(date))}</span>
					</div>
					<p class='text-muted-foreground'>{description}</p>
					<Separator class='mt-2 mb-6' />
				</div>
			</li>
		{:else}
			<p>no posts with
				tag{tags.length > 1 ? 's' : ''} {tags.map(tag => `'${tag}'`).join(', ')} {tags.length >= 1 ? `and '${lastTag}'` : `'${lastTag}'`}
				yet</p>
		{/each}
	</ul>
</div>
