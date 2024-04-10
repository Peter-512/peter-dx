import type { Database } from './supabase';

export type Skill = Database['public']['Tables']['skills']['Row'];
export type Testimonial = Database['public']['Tables']['testimonials']['Row'];

export type BlogPost = {
	title: string;
	date: string;
	description: string;
	tags: string[];
	published: boolean;
	slug: string;
	picture: string;
};
