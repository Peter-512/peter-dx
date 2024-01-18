<script lang='ts'>
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Quote } from 'svelte-radix';
	import { CalendarDays, Mail, Link2, RotateCw } from 'lucide-svelte';
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

<section class:self-end={isRight} use:transition={`card-${slug}`}>
	<Card.Root class={`bg-black ${isFull ? '' : 'md:max-w-md'}`}>
		<Card.Header>
			<div class='flex items-center gap-4'>
				<Avatar.Root>
					<Avatar.Image alt={name} src={image_url} />
					<Avatar.Fallback>{fallback}</Avatar.Fallback>
				</Avatar.Root>
				<div class='space-y-2'>
					<Card.Title>{name}</Card.Title>
					{#if email}
						<small class='flex items-center text-muted-foreground'>
							<Mail class='me-2' size={20} />
							<Button variant='link' class='text-muted-foreground px-0' href={`mailto:${email}`}>
								{email}
							</Button>
						</small>
					{/if}
				</div>
				{#if company_logo_url}
					<img class='ms-auto' src={company_logo_url} alt='Company logo' />
				{:else}
					<a class='ms-auto place-self-start outline-none' href={`testimonials/${slug}`}>
						<Button class='rounded-full' variant='secondary'>
							{#if $navigating?.to?.params?.slug === slug}
								<RotateCw class='animate-spin' />
							{:else}
								<Link2 />
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
			<blockquote class='border-l-2 pl-6 italic text-balance'>
				<Quote class='relative bottom-2 inline-block' tabindex='-1' />
				{quote}
				<Quote class='relative bottom-2 inline-block' tabindex='-1' />
			</blockquote>
		</Card.Content>

		{#if company && received_at}
			<Card.Footer class='flex justify-between text-muted-foreground'>
				<small class='flex items-center'>
					<CalendarDays class='me-2 place-self-center' size={20} />
					{format(new Date(received_at), 'MMMM, do yyyy')}
				</small>
				<small>{company}</small>
			</Card.Footer>
		{/if}
	</Card.Root>
</section>
