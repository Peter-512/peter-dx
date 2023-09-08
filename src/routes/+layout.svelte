<script>
	import '../app.postcss';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { page } from '$app/stores';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { DiscordLogo, GithubLogo, LinkedinLogo, TwitterLogo, VercelLogo } from 'svelte-radix';

	const { transition } = setupViewTransition();
	$: isHome = $page.route.id === '/';
	$: isSkills = $page.route.id === '/skills';
	$: isProjects = $page.route.id === '/projects';
</script>

<div class="m-5 mx-auto max-w-3xl">
	<header class=" mb-16 flex" use:transition={'header'}>
		<nav class="me-5 flex h-5 items-center">
			<a class="px-4" href="/"
				><small
					class={isHome
						? 'underline underline-offset-4 '
						: 'text-gray-400 transition-colors duration-300 hover:text-white'}
					>home</small
				></a>
			<Separator orientation="vertical" />
			<a class="px-4" href="/skills"
				><small
					class={isSkills
						? 'underline underline-offset-4'
						: 'text-gray-400 transition-colors duration-300 hover:text-white'}
					>skills</small
				></a>
			<Separator orientation="vertical" />
			<a class="px-4" href="/projects"
				><small
					class={isProjects
						? 'underline underline-offset-4'
						: 'text-gray-400 transition-colors duration-300 hover:text-white'}
					>projects</small
				></a>
		</nav>

		<div class="me-4 ms-auto flex place-items-center gap-2">
			<a class="outline-none" href="https://github.com/Peter-512/peter-dx">
				<GithubLogo size="20" />
			</a>
			<a class="outline-none" href="https://www.linkedin.com/in/peter-512/">
				<LinkedinLogo size="20" />
			</a>
			<a class="outline-none" href="https://discord.com/channels/817744253756112947">
				<DiscordLogo size="20" />
			</a>
			<a class="outline-none" href="https://twitter.com/Chrysler_512">
				<TwitterLogo size="20" />
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
			built with <span
				class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-thin">
				SvelteKit</span
			>,
			<span
				class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-thin">
				shadcn/ui</span
			>,
			<span
				class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-thin">
				supabase
			</span>
			and ❤️
		</p>
		<p>
			deployed on
			<span
				class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-thin">
				<VercelLogo class="inline-block outline-none" />
				vercel
			</span>
		</p>
	</footer>
</div>

<style>
	footer > p {
		text-wrap: balance;
	}
</style>
