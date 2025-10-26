import rehypeFigure from '@microflash/rehype-figure';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeSlug from 'rehype-slug';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import remarkMath from 'remark-math';
import remarkToc from 'remark-toc';
import { getSingletonHighlighter } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		experimental: { remoteFunctions: true },
		adapter: adapter({ runtime: 'edge' })
	},
	compilerOptions: {
		experimental: {
			async: true
		}
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			remarkPlugins: [remarkMath, [remarkToc, { tight: true }]],
			rehypePlugins: [rehypeKatexSvelte, rehypeSlug, rehypeFigure, rehypeUnwrapImages],
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
		inspector: {
			toggleKeyCombo: 'control-alt-shift-meta-s'
		}
	}
};

export default config;
