<script lang="ts">
	import { LinkPreview as HoverCardPrimitive } from 'bits-ui';
	import { cn, flyAndScale } from '$lib/utils';

	type Props = HoverCardPrimitive.ContentProps;

	let {
		class: className = undefined,
		transition = flyAndScale,
		transitionConfig = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<HoverCardPrimitive.Content
	{transition}
	{transitionConfig}
	class={cn(
		'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none',
		className
	)}
	{...rest}>
	{@render children?.()}
</HoverCardPrimitive.Content>
