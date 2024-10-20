import type { BlogPostMetadata } from '$lib/types/types';
import { json } from '@sveltejs/kit';

export const prerender = true;

async function getBlogPosts() {
	const posts: BlogPostMetadata[] = [];

	const paths = import.meta.glob('/src/blog/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<BlogPostMetadata, 'slug'>;
			const post = { ...metadata, slug } satisfies BlogPostMetadata;
			post.published && posts.push(post);
		}
	}

	posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());

	return posts;
}

export async function GET() {
	const posts = await getBlogPosts();
	return json(posts);
}
