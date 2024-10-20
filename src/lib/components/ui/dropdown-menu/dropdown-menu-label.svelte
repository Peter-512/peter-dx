<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type Props = DropdownMenuPrimitive.LabelProps & {
		inset?: boolean;
	};

	let { class: className = undefined, inset = undefined, children, ...rest }: Props = $props();
</script>

<DropdownMenuPrimitive.Label
	class={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
	{...rest}>
	{@render children?.()}
</DropdownMenuPrimitive.Label>
