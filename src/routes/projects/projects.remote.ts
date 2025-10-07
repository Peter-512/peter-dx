import { query } from '$app/server';
import { supabase } from '$lib/supabase';
import { error } from '@sveltejs/kit';

export const getProjects = query(async () => {
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

	if (e) {
		error(404, 'Not found');
	}

	return data;
});
