import type { BlogPostMetadata } from '$lib/types/types';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	try {
		const blogPost = await import(`../../../blog/${slug}.md`);
		return {
			BlogPost: blogPost.default,
			metadata: { ...blogPost.metadata, slug } satisfies BlogPostMetadata
		};
	} catch (e) {
		error(404, `Could not find ${slug}`);
	}
};
