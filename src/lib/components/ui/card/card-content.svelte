<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		as = 'p',
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & { as?: 'p' | 'div' } = $props();
</script>


<svelte:element {...restProps} bind:this={ref} class={cn("px-6", className)} data-slot='card-content' this={as}>
	{@render children?.()}
</svelte:element>
