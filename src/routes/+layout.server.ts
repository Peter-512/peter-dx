import { supabase } from '$lib/supabase';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const { data, error: e } = await supabase
		.from('testimonials')
		.select('name, description, quote, slug, image_url')
		.order('received_at', { ascending: false });
	if (e) throw error(404, 'Not found');
	return { testimonials: data };
};
