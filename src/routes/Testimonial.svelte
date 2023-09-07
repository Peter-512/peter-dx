<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Link1 } from 'svelte-radix';

	export let name = '';
	export let fallback = '';
	export let description = '';
	export let imageSrc = '';
	export let placement: 'left' | 'right' = 'left';
	export let slug = '';
	const isRight = placement === 'right';
</script>

<Card.Root class={`max-w-md ${isRight ? 'place-self-end' : ''}`}>
	<Card.Header>
		<div class="flex items-center gap-4">
			<Avatar.Root>
				<Avatar.Image src={imageSrc} alt={name} />
				<Avatar.Fallback>{fallback}</Avatar.Fallback>
			</Avatar.Root>
			<Card.Title>{name}</Card.Title>
			<a class="ms-auto place-self-start" href={`testimonials/${slug}`}
				><Link1 size="24" /></a>
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
</Card.Root>
