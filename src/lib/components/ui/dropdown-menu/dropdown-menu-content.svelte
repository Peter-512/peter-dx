<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn, flyAndScale } from '$lib/utils';

	type Props = DropdownMenuPrimitive.ContentProps;

	let {
		class: className = undefined,
		transition = flyAndScale,
		transitionConfig = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<DropdownMenuPrimitive.Content
	{transition}
	{transitionConfig}
	class={cn(
		'z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none',
		className
	)}
	{...rest}>
	{@render children?.()}
</DropdownMenuPrimitive.Content>
