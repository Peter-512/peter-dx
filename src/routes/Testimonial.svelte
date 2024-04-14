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

	type Props = {
		name: string;
		description: string;
		image_url: string;
		slug: string;
		quote: string;
		placement: 'right' | 'full' | 'left';
		company?: string;
		email?: string;
		company_logo_url?: string;
		received_at?: string;
	};

	const {
		name,
		description,
		image_url,
		slug,
		quote,
		placement = 'full',
		company = '',
		email = '',
		company_logo_url = '',
		received_at = ''
	}: Props = $props();

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
					<Button class='rounded-full ms-auto' variant='secondary' href={`testimonials/${slug}`}>
						{#if $navigating?.to?.params?.slug === slug}
							<RotateCw class='animate-spin' />
						{:else}
							<Link2 />
						{/if}
					</Button>
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
