<script lang='ts'>
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import type { PageData } from './$types';
	import Testimonial from '../../Testimonial.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import P from '$lib/components/markdown/P.svelte';
	import A from '$lib/components/markdown/A.svelte';
	import Ol from '$lib/components/markdown/Ol.svelte';
	import Li from '$lib/components/markdown/Li.svelte';

	export let data: PageData;
	const { testimonialDetails } = data;
</script>

<svelte:head>
	<title>Letter of recommendation by {testimonialDetails.name}</title>
</svelte:head>

<section class='max-w-3xl m-auto'>
	<Testimonial {...testimonialDetails} />

	<Separator class='my-5' decorative />
</section>

<section class='whitespace-break-spaces max-w-3xl m-auto'>
	{#await data.streamed.content}
		<div class='gap-4'>
			<Skeleton class='h-5 w-24' />
			<Skeleton class='h-10 w-full' />
			<Skeleton class='h-20 w-full' />
			<Skeleton class='h-20 w-full' />
			<Skeleton class='h-20 w-full' />
			<Skeleton class='h-10 w-[300px]' />
			<Skeleton class='h-10 w-[100px]' />
		</div>
	{:then { content }}
		<SvelteMarkdown
			renderers={{ paragraph: P, link: A, list: Ol, listitem: Li }}
			source={content} />
	{:catch error}
		<p class='text-red-500'>{error.message}</p>
	{/await}
</section>
