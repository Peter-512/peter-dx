import type { BlogPost } from '$lib/types/types';
import { json } from '@sveltejs/kit';

export const prerender = true;

async function getBlogPosts(filterBy: (postTags: string[]) => boolean) {
	const posts: BlogPost[] = [];

	const paths = import.meta.glob('/src/blog/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<BlogPost, 'slug'>;
			const post = { ...metadata, slug } satisfies BlogPost;
			post.published && filterBy(post.tags) && posts.push(post);
		}
	}

	posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());

	return posts;
}

export async function GET({ url }) {
	const filterBy = (postTags: string[]) => {
		const tags = url.searchParams.getAll('tags');
		return tags.length === 0 || tags.every((tag) => postTags.includes(tag));
	};
	const posts = await getBlogPosts(filterBy);
	return json(posts);
}
