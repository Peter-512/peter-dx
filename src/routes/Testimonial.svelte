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
	<Card.Root class={`bg-black ${isFull ? '' : 'md:max-w-md'} ${isRight ? 'place-self-end' : ''}`}>
		<Card.Header>
			<div class="flex items-center gap-4">
				<Avatar.Root>
					<Avatar.Image src={imageSrc} alt={name} />
					<Avatar.Fallback>{fallback}</Avatar.Fallback>
				</Avatar.Root>
				<div>
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
				{#if companyLogoUrl}
					<img class="ms-auto" src={companyLogoUrl} alt="Company logo" />
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
				<slot />
				<Quote class="relative bottom-2 inline-block outline-none" />
			</blockquote>
		</Card.Content>

		{#if company && date}
			<Card.Footer class="flex justify-between text-gray-400">
				<small class="flex">
					<Calendar class="me-2 place-self-center outline-none" />
					{format(new Date(date), 'MMMM, do yyyy')}
				</small>
				<small>{company}</small>
			</Card.Footer>
		{/if}
	</Card.Root>
</section>
