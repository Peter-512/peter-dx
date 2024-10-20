<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLTdAttributes } from 'svelte/elements';

	type Props = HTMLTdAttributes;

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<td
	class={cn(
		'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
		className
	)}
	{...rest}>
	{@render children?.()}
</td>
