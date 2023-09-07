import { supabase } from '$lib/supabase';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const { data, error: e } = await supabase
		.from('testimonials')
		.select('*')
		.eq('slug', slug)
		.single();
	if (e) throw error(404, 'Not found');
	return data;
};
