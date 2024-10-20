<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	import type { HeadingLevel } from '.';

	type Props = HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	};

	let { class: className = undefined, tag = 'h3', children, ...rest }: Props = $props();
</script>

<svelte:element
	this={tag}
	class={cn('font-semibold leading-none tracking-tight', className)}
	{...rest}>
	{@render children?.()}
</svelte:element>
