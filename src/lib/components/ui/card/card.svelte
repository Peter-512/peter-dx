<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type Props = HTMLAttributes<HTMLDivElement>;

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class={cn('rounded-xl border bg-card text-card-foreground shadow', className)} {...rest}>
	{@render children?.()}
</div>
