<script lang="ts">
	import { Separator as SeparatorPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type Props = SeparatorPrimitive.Props;

	let {
		class: className = undefined,
		orientation = 'horizontal',
		decorative = undefined,
		...rest
	}: Props = $props();
</script>

<SeparatorPrimitive.Root
	class={cn(
		'shrink-0 bg-border',
		orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
		className
	)}
	{orientation}
	{decorative}
	{...rest} />
