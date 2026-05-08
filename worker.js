import manifest from './dist/_worker.js/manifest.js'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const assets = require('./dist/_worker.js/assets.mjs')

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const path = url.pathname

    if (path === '/' || path === '/index.html') {
      const html = await assets['/index.html']()
      return new Response(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      })
    }

    if (assets[path]) {
      const content = await assets[path]()
      const ext = path.split('.').pop()
      const types = {
        html: 'text/html', css: 'text/css', js: 'application/javascript',
        png: 'image/png', jpg: 'image/jpeg', webp: 'image/webp',
        svg: 'image/svg+xml', ico: 'image/x-icon', json: 'application/json'
      }
      return new Response(content, {
        headers: { 'Content-Type': types[ext] || 'application/octet-stream' }
      })
    }

    return new Response(await assets['/index.html'](), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    })
  }
}