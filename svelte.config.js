import rehypeFigure from '@microflash/rehype-figure';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';
import remarkToc from 'remark-toc';
import remarkUnwrapImages from 'remark-unwrap-images';
import { getSingletonHighlighter } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			remarkPlugins: [remarkMath, [remarkToc, { tight: true }], remarkUnwrapImages],
			rehypePlugins: [rehypeKatexSvelte, rehypeSlug, rehypeFigure],
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await getSingletonHighlighter({
						theme: 'ayu-dark',
						langs: ['python', 'typescript']
					});
					await highlighter.loadTheme('ayu-dark');
					const html = escapeSvelte(
						highlighter.codeToHtml(code, { lang, theme: 'ayu-dark' })
					);
					return `{@html \`${html}\`}`;
				}
			}
		})
	],
	extensions: ['.svelte', '.md'],

	vitePlugin: {
		inspector: true
	},

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({ runtime: 'edge' })
	}
};

export default config;
