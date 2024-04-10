import type { BlogPost } from '$lib/types/types';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	try {
		const blogPost = await import(`../../../blog/${slug}.md`);
		return {
			content: blogPost.default,
			metadata: blogPost.metadata as BlogPost
		};
	} catch (e) {
		error(404, `Could not find ${slug}`);
	}
};
