<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Calendar, EnvelopeClosed, Link1, Quote, Reload } from 'svelte-radix';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { format } from 'date-fns';
	import { navigating } from '$app/stores';

	const { transition } = setupViewTransition();

	export let name: string;
	export let description: string;
	export let image_url: string;
	export let slug: string;
	export let quote: string;
	export let placement: 'left' | 'right' | 'full' = 'full';
	export let company = '';
	export let email = '';
	export let company_logo_url = '';
	export let received_at = '';

	const isRight = placement === 'right';
	const isFull = placement === 'full';

	const fallback = name
		.split(' ')
		.map((name) => name[0])
		.join('');
</script>

<section class={isRight ? 'self-end' : ''} use:transition={`card-${slug}`}>
	<Card.Root class={`bg-black ${isFull ? '' : 'md:max-w-md'}`}>
		<Card.Header>
			<div class="flex items-center gap-4">
				<Avatar.Root>
					<Avatar.Image src={image_url} alt={name} />
					<Avatar.Fallback>{fallback}</Avatar.Fallback>
				</Avatar.Root>
				<div class="space-y-2">
					<Card.Title>{name}</Card.Title>
					{#if email}
						<small class="flex items-center text-gray-400">
							<EnvelopeClosed class="me-2 outline-none" />
							<a href={`mailto:${email}`}>
								{email}
							</a>
						</small>
					{/if}
				</div>
				{#if company_logo_url}
					<img class="ms-auto" src={company_logo_url} alt="Company logo" />
				{:else}
					<a class="ms-auto place-self-start outline-none" href={`testimonials/${slug}`}>
						<Button class="rounded-full" variant="secondary">
							{#if $navigating}
								<Reload class="animate-spin outline-none" size="24" />
							{:else}
								<Link1 class="outline-none" size="24" />
							{/if}
						</Button>
					</a>
				{/if}
			</div>
			<Card.Description>
				{description}
			</Card.Description>
		</Card.Header>

		<Card.Content>
			<blockquote class="border-l-2 pl-6 italic">
				<Quote class="relative bottom-2 inline-block outline-none" />
				{quote}
				<Quote class="relative bottom-2 inline-block outline-none" />
			</blockquote>
		</Card.Content>

		{#if company && received_at}
			<Card.Footer class="flex justify-between text-gray-400">
				<small class="flex">
					<Calendar class="me-2 place-self-center outline-none" />
					{format(new Date(received_at), 'MMMM, do yyyy')}
				</small>
				<small>{company}</small>
			</Card.Footer>
		{/if}
	</Card.Root>
</section>
