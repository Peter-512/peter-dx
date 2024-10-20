<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type Props = AvatarPrimitive.ImageProps;

	let {
		class: className = undefined,
		src = undefined,
		alt = undefined,
		...rest
	}: Props = $props();
</script>

<AvatarPrimitive.Image {src} {alt} class={cn('aspect-square h-full w-full', className)} {...rest} />
