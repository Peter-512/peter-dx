<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLTableSectionElement>;

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<tfoot class={cn('bg-primary font-medium text-primary-foreground', className)} {...rest}>
	{@render children?.()}
</tfoot>
