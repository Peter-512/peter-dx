import { supabase } from '$lib/supabase';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { data, error: e } = await supabase
		.from('testimonials')
		.select('name, description, quote, slug, image_url');
	if (e) throw error(404, 'Not found');
	return { testimonials: data };
};
