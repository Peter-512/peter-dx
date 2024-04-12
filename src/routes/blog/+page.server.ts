import type { BlogPost } from '$lib/types/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const response = await fetch(`api/blog?${url.searchParams.toString()}`);
	const posts: BlogPost[] = await response.json();
	return { posts };
};
