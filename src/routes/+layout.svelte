<script>
	import '../app.pcss';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { page } from '$app/stores';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { Github, Linkedin } from 'lucide-svelte';
	import { shadcnSvelteLogo, svelteLogo, supabaseLogo, vercelLogo } from '$lib/logos';
	import HoverCard from './HoverCard.svelte';
	import { Button } from '$lib/components/ui/button/index';

	const { transition } = setupViewTransition();
	$: isHome = $page.route.id === '/';
	$: isSkills = $page.route.id === '/skills';
	$: isProjects = $page.route.id === '/projects';
	$: isExperience = $page.route.id === '/experience';
</script>

<div class='m-5 mx-auto'>
	<header class='mb-16 flex max-w-3xl m-auto' use:transition={'header'}>
		<nav class='mx-5 flex items-center'>
			<Button aria-current={$page.url.pathname === '/' ? 'page' : undefined}
					class={`transition-colors duration-300 hover:text-white hover:no-underline relative ${!isHome && 'text-gray-400'}`}
					href='/'
					variant='link'>
				home
			</Button>
			<Separator decorative orientation='vertical' />
			<Button aria-current={$page.url.pathname === '/skills' ? 'page' : undefined}
					class={`transition-colors duration-300 hover:text-white hover:no-underline relative ${!isSkills && 'text-gray-400'}`}
					href='/skills'
					variant='link'>
				skills
			</Button>
			<Separator decorative orientation='vertical' />
			<Button aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
					class={`transition-colors duration-300 hover:text-white hover:no-underline relative ${!isProjects && 'text-gray-400'}`}
					href='/projects'
					variant='link'>
				projects
			</Button>
			<Separator decorative orientation='vertical' />
			<Button aria-current={$page.url.pathname === '/experience' ? 'page' : undefined}
					class={`transition-colors duration-300 hover:text-white hover:no-underline relative ${!isExperience && 'text-gray-400'}`}
					href='/experience'
					variant='link'>
				experience
			</Button>
		</nav>
		<div class='ms-auto flex place-items-center me-5'>
			<Button href='https://github.com/Peter-512' variant='ghost'>
				<Github size={20} />
			</Button>
			<Button href='https://www.linkedin.com/in/peter-512/' variant='ghost'>
				<Linkedin size={20} />
			</Button>
			<Button class='hover:no-underline' href='https://x.com/Chrysler_512' variant='ghost'>
				<span class='text-2xl'>&#120143;</span>
			</Button>
		</div>
	</header>
	<main class='mx-5'>
		<slot />
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
			</HoverCard
			>
			,
			<HoverCard
				githubAccount='shadcn-svelte'
				githubLinkPrefix='huntabyte'
				imageUrl={shadcnSvelteLogo}
				text='build your component library'>
				@shadcn-svelte
			</HoverCard
			>
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
