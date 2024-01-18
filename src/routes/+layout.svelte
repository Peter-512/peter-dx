<script>
	import '../app.pcss';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { page } from '$app/stores';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { DiscordLogo, GithubLogo, LinkedinLogo } from 'svelte-radix';
	import { shadcnSvelteLogo, svelteLogo, supabaseLogo, vercelLogo } from '$lib/logos';
	import HoverCard from './HoverCard.svelte';

	const { transition } = setupViewTransition();
	$: isHome = $page.route.id === '/';
	$: isSkills = $page.route.id === '/skills';
	$: isProjects = $page.route.id === '/projects';
</script>

<div class='m-5 mx-auto'>
	<header class=' mb-16 flex max-w-3xl m-auto' use:transition={'header'}>
		<nav class='me-5 flex h-5 items-center'>
			<a aria-current={$page.url.pathname === '/' ? 'page' : undefined} class='px-4' href='/'
			><small
				class='transition-colors duration-300 hover:text-white'
				class:text-gray-400={!isHome}>home</small>
			</a>
			<Separator decorative orientation='vertical' />
			<a
				aria-current={$page.url.pathname === '/skills' ? 'page' : undefined}
				class='px-4'
				href='/skills'>
				<small
					class='transition-colors duration-300 hover:text-white'
					class:text-gray-400={!isSkills}>skills</small>
			</a>
			<Separator decorative orientation='vertical' />
			<a
				aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
				class='px-4'
				href='/projects'>
				<small
					class='transition-colors duration-300 hover:text-white'
					class:text-gray-400={!isProjects}>projects</small>
			</a>
			<Separator decorative orientation='vertical' />
			<a
				aria-current={$page.url.pathname === '/experience' ? 'page' : undefined}
				class='px-4'
				href='/experience'>
				<small
					class='transition-colors duration-300 hover:text-white'
					class:text-gray-400={!isProjects}>experience</small>
			</a>
		</nav>
		<div class='me-4 ms-auto flex place-items-center gap-2'>
			<a class='outline-none' href='https://github.com/Peter-512'>
				<GithubLogo size='20' />
			</a>
			<a class='outline-none' href='https://www.linkedin.com/in/peter-512/'>
				<LinkedinLogo size='20' />
			</a>
			<a class='outline-none hidden sm:inline' href='https://discord.com/channels/817744253756112947'>
				<DiscordLogo size='22' />
			</a>
			<a class='outline-none hidden sm:inline' href='https://x.com/Chrysler_512'>
				<span class='text-2xl'>&#120143;</span>
			</a>
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

    nav > a {
        position: relative;
    }

    a[aria-current='page']::after {
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
