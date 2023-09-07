export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      testimonials: {
        Row: {
          company: string | null
          company_logo_url: string | null
          content: string
          email: string | null
          image_url: string
          name: string
          received_at: string
          slug: string
        }
        Insert: {
          company?: string | null
          company_logo_url?: string | null
          content: string
          email?: string | null
          image_url: string
          name: string
          received_at: string
          slug: string
        }
        Update: {
          company?: string | null
          company_logo_url?: string | null
          content?: string
          email?: string | null
          image_url?: string
          name?: string
          received_at?: string
          slug?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
