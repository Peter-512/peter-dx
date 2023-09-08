<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Link1, Reload } from 'svelte-radix';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { format } from 'date-fns';
	import { navigating } from '$app/stores';

	const { transition } = setupViewTransition();

	export let name: string;
	export let description: string;
	export let imageSrc: string;
	export let slug: string;
	export let placement: 'left' | 'right' | 'full' = 'full';
	export let company = '';
	export let email = '';
	export let companyLogoUrl = '';
	export let date = '';

	const isRight = placement === 'right';
	const isFull = placement === 'full';

	const fallback = name
		.split(' ')
		.map((name) => name[0])
		.join('');
</script>

<section use:transition={'card'}>
	<Card.Root class={`${isFull ? '' : 'md:max-w-md'} ${isRight ? 'place-self-end' : ''}`}>
		<Card.Header>
			<div class="flex items-center gap-4">
				<Avatar.Root>
					<Avatar.Image src={imageSrc} alt={name} />
					<Avatar.Fallback>{fallback}</Avatar.Fallback>
				</Avatar.Root>
				<Card.Title>{name}</Card.Title>
				{#if companyLogoUrl}
					<img class="ms-auto" src={companyLogoUrl} alt="Company logo" />
				{:else}
					<a class="ms-auto place-self-start" href={`testimonials/${slug}`}>
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
				<slot />
			</blockquote>
		</Card.Content>
		{#if company && email && date}
			<Card.Footer class="flex justify-between text-gray-400">
				<a href={`mailto:${email}`}><small>{email}</small></a>
				<small>{format(new Date(date), 'MMMM, do yyyy')}</small>
				<small>{company}</small>
			</Card.Footer>
		{/if}
	</Card.Root>
</section>
