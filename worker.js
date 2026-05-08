import assets from "./dist/_worker.js/manifest.js"

export default {
  async fetch(request) {
    const { pathname } = new URL(request.url)
    const asset = assets[pathname] || assets["/index.html"]
    
    if (!asset) return new Response("Not found", { status: 404 })

    const content = await asset()
    const ext = pathname.split(".").pop()
    const types = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      png: "image/png",
      jpg: "image/jpeg",
      webp: "image/webp",
      svg: "image/svg+xml",
      ico: "image/x-icon"
    }

    return new Response(content, {
      headers: {
        "Content-Type": types[ext] || "text/html",
        "Cache-Control": "max-age=31536000"
      }
    })
  }
}