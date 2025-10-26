<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		as = 'p',
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLParagraphElement>> & { as?: 'p' | 'div' } = $props();
</script>

<svelte:element
	{...restProps}
	bind:this={ref}
	class={cn("text-muted-foreground text-sm", className)}
	data-slot='card-description'
	this={as}
>
	{@render children?.()}
</svelte:element>
