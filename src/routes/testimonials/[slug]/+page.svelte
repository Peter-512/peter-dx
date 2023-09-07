<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import type { PageData } from './$types';
	export let data: PageData;

	const fallback = data.name
		.split(' ')
		.map((name) => name[0])
		.join('');
</script>

<svelte:head>
	<title>LOR by {data.name}</title>
</svelte:head>

<Card.Root class="my-5">
	<Card.Header>
		<div class="flex items-center gap-4">
			<Avatar.Root id="avatar">
				<Avatar.Image src={data.image_url} alt={data.name} />
				<Avatar.Fallback>{fallback}</Avatar.Fallback>
			</Avatar.Root>
			<Card.Title>{data.name}</Card.Title>
			<img class="ms-auto" src={data.company_logo_url} alt="Company logo" />
		</div>
		<Card.Description>{data.description}</Card.Description>
	</Card.Header>
	<Card.Content>
		<blockquote class="border-l-2 pl-6 italic">
			{data.quote}
		</blockquote>
	</Card.Content>
	<Card.Footer class="flex justify-between text-gray-400">
		<a href={`mailto:${data.email}`}><small>{data.email}</small></a>
		<small>{data.company}</small>
	</Card.Footer>
</Card.Root>
<Separator class="my-5" />
<section class="whitespace-break-spaces">
	{data.content}
</section>

<style>
	[alt] {
		view-transition-name: avatar;
	}
</style>
