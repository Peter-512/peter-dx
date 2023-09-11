<script>
	import '../app.postcss';
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

<div class="m-5 mx-auto max-w-3xl">
	<header class=" mb-16 flex" use:transition={'header'}>
		<nav class="me-5 flex h-5 items-center">
			<a class="px-4" href="/" aria-current={$page.url.pathname === '/' ? 'page' : undefined}
				><small
					class:text-gray-400={!isHome}
					class="transition-colors duration-300 hover:text-white">home</small
				></a>
			<Separator decorative orientation="vertical" />
			<a
				class="px-4"
				href="/skills"
				aria-current={$page.url.pathname === '/skills' ? 'page' : undefined}
				><small
					class="transition-colors duration-300 hover:text-white"
					class:text-gray-400={!isSkills}>skills</small
				></a>
			<Separator decorative orientation="vertical" />
			<a
				class="px-4"
				href="/projects"
				aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
				><small
					class="transition-colors duration-300 hover:text-white"
					class:text-gray-400={!isProjects}>projects</small
				></a>
		</nav>

		<div class="me-4 ms-auto flex place-items-center gap-2">
			<a class="outline-none" href="https://github.com/Peter-512">
				<GithubLogo size="20" />
			</a>
			<a class="outline-none" href="https://www.linkedin.com/in/peter-512/">
				<LinkedinLogo size="20" />
			</a>
			<a class="outline-none" href="https://discord.com/channels/817744253756112947">
				<DiscordLogo size="22" />
			</a>
			<a class="outline-none" href="https://x.com/Chrysler_512">
				<span class="text-2xl">&#120143;</span>
			</a>
		</div>
	</header>
	<main class="mx-5">
		<slot />
	</main>
	<footer
		use:transition={'footer'}
		class="mx-5 mt-16 flex flex-col items-center gap-4 text-center">
		<p class="leading-loose">
			built with
			<HoverCard
				imageUrl={svelteLogo}
				githubAccount="sveltejs"
				text="cybernetically enhanced web apps">
				@svelte/kit</HoverCard
			>,
			<HoverCard
				imageUrl={shadcnSvelteLogo}
				githubAccount="shadcn-svelte"
				githubLinkPrefix="huntabyte"
				text="build your component library">
				@shadcn-svelte</HoverCard
			>,
			<HoverCard
				imageUrl={supabaseLogo}
				githubAccount="supabase"
				text="build in a weekend scale to millions">
				@supabase
			</HoverCard>
			and ❤️
		</p>
		<p>
			deployed on
			<HoverCard imageUrl={vercelLogo} githubAccount="vercel" text="develop. preview. ship.">
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
