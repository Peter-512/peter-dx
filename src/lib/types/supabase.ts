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
          company: string
          company_logo_url: string
          content: string
          description: string
          email: string
          image_url: string
          name: string
          quote: string
          received_at: string
          slug: string
        }
        Insert: {
          company: string
          company_logo_url: string
          content: string
          description: string
          email: string
          image_url: string
          name: string
          quote: string
          received_at: string
          slug: string
        }
        Update: {
          company?: string
          company_logo_url?: string
          content?: string
          description?: string
          email?: string
          image_url?: string
          name?: string
          quote?: string
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
