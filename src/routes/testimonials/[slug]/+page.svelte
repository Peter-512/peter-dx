<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import type { PageData } from './$types';
	import Testimonial from '../../Testimonial.svelte';
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import SvelteMarkdown from 'svelte-markdown';
	import P from '$lib/components/markdown/P.svelte';
	import A from '$lib/components/markdown/A.svelte';
	import Ol from '$lib/components/markdown/Ol.svelte';
	import Li from '$lib/components/markdown/Li.svelte';

	export let data: PageData;
	const { testimonials } = data;
	const testimonial = testimonials.find((t) => t.slug === $page.params.slug);
	if (!testimonial) {
		throw error(404, 'Testimonial not found');
	}
	const { testimonialDetails } = data;
</script>

<svelte:head>
	<title>LOR by {testimonial.name}</title>
</svelte:head>

<Testimonial {...testimonial} {...testimonialDetails} />

<Separator decorative class="my-5" />

<section class="whitespace-break-spaces">
	{#await data.streamed.content}
		<div class="gap-4">
			<Skeleton class="h-5 w-24" />
			<Skeleton class="h-10 w-full" />
			<Skeleton class="h-20 w-full" />
			<Skeleton class="h-20 w-full" />
			<Skeleton class="h-20 w-full" />
			<Skeleton class="h-10 w-[300px]" />
			<Skeleton class="h-10 w-[100px]" />
		</div>
	{:then { content }}
		<SvelteMarkdown
			renderers={{ paragraph: P, link: A, list: Ol, listitem: Li }}
			source={content} />
	{:catch error}
		<p class="text-red-500">{error.message}</p>
	{/await}
</section>
