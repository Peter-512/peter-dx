<script>
	import '../app.css';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { page } from '$app/state';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { Github, Linkedin } from 'lucide-svelte';
	import { shadcnSvelteLogo, svelteLogo, supabaseLogo, vercelLogo } from '$lib/logos';
	import HoverCard from './HoverCard.svelte';
	import { Button } from '$lib/components/ui/button/index';

	let { children } = $props();

	const { transition } = setupViewTransition();
	let isHome = $derived(page.route.id === '/');
	let isBlog = $derived(page.route.id === '/blog');
	let isProjects = $derived(page.route.id === '/projects');
	let isExperience = $derived(page.route.id === '/experience');
</script>

<div class='m-5 mx-auto'>
	<header class='m-auto mb-16 flex max-w-3xl' use:transition={'header'}>
		<nav class='ms-5 flex items-center'>
			<Button
				aria-current={page.url.pathname === '/' ? 'page' : undefined}
				class={`relative transition-colors duration-300 hover:text-white hover:no-underline ${!isHome && 'text-gray-400'}`}
				href='/'
				variant='link'>
				home
			</Button>
			<Separator decorative orientation='vertical' />
			<Button
				aria-current={page.url.pathname === '/blog' ? 'page' : undefined}
				class={`relative transition-colors duration-300 hover:text-white hover:no-underline ${!isBlog && 'text-gray-400'}`}
				href='/blog'
				variant='link'>
				blog
			</Button>
			<Separator decorative orientation='vertical' />
			<Button
				aria-current={page.url.pathname === '/projects' ? 'page' : undefined}
				class={`relative transition-colors duration-300 hover:text-white hover:no-underline ${!isProjects && 'text-gray-400'}`}
				href='/projects'
				variant='link'>
				projects
			</Button>
			<Separator decorative orientation='vertical' />
			<Button
				aria-current={page.url.pathname === '/experience' ? 'page' : undefined}
				class={`relative transition-colors duration-300 hover:text-white hover:no-underline ${!isExperience && 'text-gray-400'}`}
				href='/experience'
				variant='link'>
				experience
			</Button>
		</nav>
		<div class='me-5 ms-auto flex place-items-center'>
			<Button href='https://github.com/Peter-512' target='_blank' variant='ghost'>
				<span class='sr-only'>Github</span>
				<Github size={20} />
			</Button>
			<Button
				class='hidden sm:inline'
				href='https://www.linkedin.com/in/peter-512/'
				target='_blank'
				variant='ghost'>
				<span class='sr-only'>Linkedin</span>
				<Linkedin size={20} />
			</Button>
			<Button
				class='hidden text-xl leading-none hover:no-underline sm:inline-block'
				href='https://x.com/Chrysler_512'
				target='_blank'
				variant='ghost'>
				<span class='sr-only'>X/Twitter</span>
				&#120143;
			</Button>
		</div>
	</header>
	<main class='mx-5'>
		{@render children?.()}
	</main>
	<footer
		class='mx-5 mt-16 flex flex-col items-center gap-4 text-center'
		use:transition={'footer'}>
		<p class='leading-loose'>
			built with
			<HoverCard
				githubAccount='sveltejs'
				imageUrl={svelteLogo}
				text='cybernetically enhanced web apps'>
				@svelte/kit
			</HoverCard>
			,
			<HoverCard
				githubAccount='shadcn-svelte'
				githubLinkPrefix='huntabyte'
				imageUrl={shadcnSvelteLogo}
				text='build your component library'>
				@shadcn-svelte
			</HoverCard>
			,
			<HoverCard
				githubAccount='supabase'
				imageUrl={supabaseLogo}
				text='build in a weekend scale to millions'>
				@supabase
			</HoverCard>
			and ❤️
		</p>
		<p>
			deployed on
			<HoverCard githubAccount='vercel' imageUrl={vercelLogo} text='develop. preview. ship.'>
				@vercel
			</HoverCard>
		</p>
	</footer>
</div>

<style>
    footer > p {
        text-wrap: balance;
    }

    :global(a[aria-current='page']::after) {
        --size: 0.5px;
        position: absolute;
        content: '';
        height: var(--size);
        width: 80%;
        margin: 0 auto;
        left: 0;
        right: 0;
        bottom: -4px;
        border: var(--size) solid white;
        view-transition-name: active-page;
    }
</style>
