<script lang='ts'>
	import { setupViewTransition } from 'sveltekit-view-transition';

	export let tag: string;
	export let size: 'sm' | 'md' = 'md';

	export let transitionKey: string;

	const { transition } = setupViewTransition();
</script>

<a class="py-1 no-underline px-3 rounded-full bg-slate-800 hover:bg-slate-700 whitespace-nowrap {size === 'sm' ? 'text-xs' : 'text-sm'}"
   href='/blog?tags={tag}'
   use:transition={`tag-badge-${tag}-${transitionKey}-1`}>&num;{tag}</a>