import { createClient } from '@supabase/supabase-js'
import type { Database, Tables } from '~/types/supabase'

const server = (url: string, key: string) => createClient<Database>(url, key)

export async function serverStart<
  TName extends keyof Database['public']['Tables']
>(
  url: string,
  key: string,
  table: TName,
  query: string
): Promise<Tables<TName>[] | null> {
  const client = server(url, key)
  const { data, error } = await client.from(table).select(query)
  if (error) {
    console.error(error)
    return null
  }
  //@ts-ignore
  // suck my dick
  return data
}
