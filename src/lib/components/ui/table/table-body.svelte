<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLTableSectionElement>;

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<tbody class={cn('[&_tr:last-child]:border-0', className)} {...rest}>
	{@render children?.()}
</tbody>
