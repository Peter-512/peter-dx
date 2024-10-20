<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn, flyAndScale } from '$lib/utils';

	type Props = DropdownMenuPrimitive.SubContentProps;

	let {
		class: className = undefined,
		transition = flyAndScale,
		transitionConfig = {
			x: -10,
			y: 0
		},
		children,
		...rest
	}: Props = $props();
</script>

<DropdownMenuPrimitive.SubContent
	{transition}
	{transitionConfig}
	class={cn(
		'z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-lg focus:outline-none',
		className
	)}
	{...rest}>
	{@render children?.()}
</DropdownMenuPrimitive.SubContent>
