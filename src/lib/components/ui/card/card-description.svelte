<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type Props = HTMLAttributes<HTMLParagraphElement>;

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<div {...rest} class={cn('text-sm text-muted-foreground', className)}>
	{@render children?.()}
</div>
