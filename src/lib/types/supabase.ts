export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			project_images: {
				Row: {
					id: number;
					image_url: string;
					project_id: number;
				};
				Insert: {
					id?: number;
					image_url: string;
					project_id: number;
				};
				Update: {
					id?: number;
					image_url?: string;
					project_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: 'project_images_project_id_fkey';
						columns: ['project_id'];
						referencedRelation: 'projects';
						referencedColumns: ['id'];
					}
				];
			};
			project_skills: {
				Row: {
					project_id: number;
					skills_id: number;
				};
				Insert: {
					project_id: number;
					skills_id: number;
				};
				Update: {
					project_id?: number;
					skills_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: 'project_skills_project_id_fkey';
						columns: ['project_id'];
						referencedRelation: 'projects';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'project_skills_skills_id_fkey';
						columns: ['skills_id'];
						referencedRelation: 'skills';
						referencedColumns: ['id'];
					}
				];
			};
			project_team_members: {
				Row: {
					project_id: number;
					team_member_id: number;
				};
				Insert: {
					project_id?: number;
					team_member_id?: number;
				};
				Update: {
					project_id?: number;
					team_member_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: 'project_team_members_project_id_fkey';
						columns: ['project_id'];
						referencedRelation: 'projects';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'project_team_members_team_member_id_fkey';
						columns: ['team_member_id'];
						referencedRelation: 'team_members';
						referencedColumns: ['id'];
					}
				];
			};
			projects: {
				Row: {
					description: string;
					id: number;
					link: string;
					name: string;
					start_date: string;
				};
				Insert: {
					description: string;
					id?: number;
					link: string;
					name: string;
					start_date: string;
				};
				Update: {
					description?: string;
					id?: number;
					link?: string;
					name?: string;
					start_date?: string;
				};
				Relationships: [];
			};
			skills: {
				Row: {
					color: string | null;
					id: number;
					level: string;
					name: string;
					sub_type: string | null;
					type: string;
				};
				Insert: {
					color?: string | null;
					id?: number;
					level: string;
					name: string;
					sub_type?: string | null;
					type: string;
				};
				Update: {
					color?: string | null;
					id?: number;
					level?: string;
					name?: string;
					sub_type?: string | null;
					type?: string;
				};
				Relationships: [];
			};
			team_members: {
				Row: {
					github_link: string;
					id: number;
					image_url: string;
					name: string;
				};
				Insert: {
					github_link: string;
					id?: number;
					image_url: string;
					name: string;
				};
				Update: {
					github_link?: string;
					id?: number;
					image_url?: string;
					name?: string;
				};
				Relationships: [];
			};
			testimonials: {
				Row: {
					company: string;
					company_logo_url: string;
					content: string;
					description: string;
					email: string;
					image_url: string;
					name: string;
					quote: string;
					received_at: string;
					slug: string;
				};
				Insert: {
					company: string;
					company_logo_url: string;
					content: string;
					description: string;
					email: string;
					image_url: string;
					name: string;
					quote: string;
					received_at: string;
					slug: string;
				};
				Update: {
					company?: string;
					company_logo_url?: string;
					content?: string;
					description?: string;
					email?: string;
					image_url?: string;
					name?: string;
					quote?: string;
					received_at?: string;
					slug?: string;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
