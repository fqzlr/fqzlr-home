export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 映射文件
    const manifest = {
      "/": "dist/index.html",
      "/index.html": "dist/index.html",
      "/assets/index-BP_gG1sn.css": "dist/assets/index-BP_gG1sn.css",
      "/assets/index-DRAgb02N.js": "dist/assets/index-DRAgb02N.js",
      "/assets/AboutPage-DQM0uoG4.js": "dist/assets/AboutPage-DQM0uoG4.js"
    };

    const filePath = manifest[path] || manifest["/"];

    // 读取文件
    const file = await import(`./${filePath}`);
    const content = file.default;

    // 类型
    const ext = filePath.split(".").pop();
    const types = {
      html: "text/html; charset=utf-8",
      css: "text/css; charset=utf-8",
      js: "application/javascript; charset=utf-8"
    };

    return new Response(content, {
      headers: { "Content-Type": types[ext] || "text/html" }
    });
  }
};