import { supabase } from '$lib/supabase';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const { data, error: e } = await supabase
		.from('projects')
		.select(
			`name, 
        link, 
        description, 
        start_date, 
        team_members(name, github_link, image_url),
		skills(name, color)`
		)
		.order('start_date', { ascending: false });
	if (e) throw error(404, 'Not found');

	cookies.set('SameSite', 'Secure');

	return { projects: data };
};
