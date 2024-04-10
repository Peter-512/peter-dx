import type { BlogPost } from '$lib/types/types';
import type { PageServerLoad } from './$types';

export const prerender = true;
export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('api/blog');
	const posts: BlogPost[] = await response.json();
	return { posts };
};
