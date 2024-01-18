import { supabase } from '$lib/supabase';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const streamContent = async (slug: string) => {
	const { data, error: e } = await supabase
		.from('testimonials')
		.select('content')
		.eq('slug', slug)
		.single();
	if (e) error(404, 'Not found');
	return data;
};

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const { data, error: e } = await supabase
		.from('testimonials')
		.select('received_at, email, company, company_logo_url')
		.eq('slug', slug)
		.single();
	if (e) error(404, 'Not found');
	return { testimonialDetails: data, streamed: { content: streamContent(slug) } };
};
