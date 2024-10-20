<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLTableSectionElement>;

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<thead class={cn('[&_tr]:border-b', className)} {...rest}>
	{@render children?.()}
</thead>
