<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { buttonVariants, type Props, type Events } from '.';

	type $$Events = Events;

	let {
		class: className = undefined,
		variant = 'default',
		size = 'default',
		builders = [],
		children,
		...rest
	}: Props = $props();
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(buttonVariants({ variant, size, className }))}
	{...rest}
	on:click
	on:keydown>
	{@render children?.()}
</ButtonPrimitive.Root>
