import { supabase } from '$lib/supabase';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { data, error: e } = await supabase.from('projects').select(
		`name, 
        link, 
        description, 
        start_date, 
        team_members(name)`
	);
	if (e) throw error(404, 'Not found');
	console.log(data);

	return { projects: data };
};
