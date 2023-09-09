import type { Database } from './supabase';

export type Skill = Database['public']['Tables']['skills']['Row'];
export type Testimonial = Database['public']['Tables']['testimonials']['Row'];
