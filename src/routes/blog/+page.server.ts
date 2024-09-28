import type { BlogPostMetadata } from '$lib/types/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch(`api/blog`);
	const posts: BlogPostMetadata[] = await response.json();
	return { posts };
};
