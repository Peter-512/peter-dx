<script lang='ts'>
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { fly } from 'svelte/transition';
	import type {Snippet} from 'svelte'


	interface Props {
		tag: string;
		size?: 'sm' | 'md';
		onClick: () => void;
		transitionKey: string;
		children?: Snippet;
	}

	let {
		tag,
		size = 'md',
		onClick,
		transitionKey,
		children
	}: Props = $props();

	const { transition } = setupViewTransition();
</script>

<button
	class="py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring no-underline px-3 rounded-full bg-slate-800 hover:bg-slate-700 whitespace-nowrap {size === 'sm' ? 'text-xs' : 'text-sm'}"
	onclick={onClick}
	transition:fly
	use:transition={`tag-badge-${tag}-${transitionKey}-1`}>&num;{tag}
	{@render children?.()}
</button>