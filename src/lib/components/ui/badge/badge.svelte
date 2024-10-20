<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { badgeVariants, type Variant } from '.';
	import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAnchorAttributes &
		HTMLAttributes<HTMLSpanElement> & {
			variant?: Variant;
			children?: Snippet;
		};

	let {
		class: className = undefined,
		href = undefined,
		variant = 'default',
		children,
		...rest
	}: Props = $props();
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	{href}
	class={cn(badgeVariants({ variant, className }))}
	{...rest}>
	{@render children?.()}
</svelte:element>
