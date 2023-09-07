<script>
	import '../app.postcss';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { page } from '$app/stores';
	$: isHome = $page.route.id === '/';
	$: isSkills = $page.route.id === '/skills';
	$: isProjects = $page.route.id === '/projects';
</script>

<div class="m-5 mx-auto max-w-3xl">
	<header>
		<nav class="mx-5 mb-16 flex h-5 items-center space-x-4">
			<a href="/"
				><small
					class={isHome
						? 'underline underline-offset-4 '
						: 'text-gray-400 transition-colors duration-300 hover:text-white'}
					>home</small
				></a>
			<Separator orientation="vertical" />
			<a href="/skills"
				><small
					class={isSkills
						? 'underline underline-offset-4'
						: 'text-gray-400 transition-colors duration-300 hover:text-white'}
					>skills</small
				></a>
			<Separator orientation="vertical" />
			<a href="/projects"
				><small
					class={isProjects
						? 'underline underline-offset-4'
						: 'text-gray-400 transition-colors duration-300 hover:text-white'}
					>projects</small
				></a>
		</nav>
	</header>
	<main class="mx-5">
		<slot />
	</main>
	<footer class="mx-5 mt-16 flex flex-col items-center gap-4 text-center">
		<p class="leading-loose">
			built with <code
				class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
				>SvelteKit</code
			>,
			<code
				class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
				>shadcn/ui</code
			>,
			<code
				class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
				>supabase</code>
			and ❤️
		</p>
		<p>
			deployed on <code
				class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
				>vercel</code>
		</p>
	</footer>
</div>

<style>
	footer > p {
		text-wrap: balance;
	}
</style>
