<script lang='ts'>
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { buttonVariants, type Props, type Events } from '.';

	type $$Props = Props;
	type $$Events = Events;

	let {
		variant = 'default',
		size = 'default',
		builders = [],
		class: className = undefined,
		...restProps
	}: {
		variant?: $$Props['variant'];
		size?: $$Props['size'];
		builders?: $$Props['builders'];
		class?: $$Props['class'];
	} = $props();

</script>

<ButtonPrimitive.Root
	{...restProps}
	{builders}
	class={cn(buttonVariants({ variant, size, className }))}
>
	<slot />
</ButtonPrimitive.Root>
