<script lang='ts'>
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { fly } from 'svelte/transition';

	export let tag: string;
	export let size: 'sm' | 'md' = 'md';
	export let onClick: () => void;

	export let transitionKey: string;

	const { transition } = setupViewTransition();
</script>

<button
	class="py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring no-underline px-3 rounded-full bg-slate-800 hover:bg-slate-700 whitespace-nowrap {size === 'sm' ? 'text-xs' : 'text-sm'}"
	on:click={onClick}
	transition:fly
	use:transition={`tag-badge-${tag}-${transitionKey}-1`}>&num;{tag}
	<slot />
</button>