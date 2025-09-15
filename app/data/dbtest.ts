
import { createClient } from '@supabase/supabase-js'
async function serverStart(url: string, key: string, table: string, query: string) {
  const server = createClient(url, key)
  const returnData = await server.from(table).select(query)
  return returnData
}
export { serverStart }
