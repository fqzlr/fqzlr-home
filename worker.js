import manifest from "__STATIC_CONTENT_MANIFEST"
import { serveStatic } from "cloudflare-workers/serve-static"

const handler = async (request) => {
  const response = await serveStatic({ request, manifest })
  return response || new Response("Not found", { status: 404 })
}

export default { fetch: handler }