
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/aashtiany/Documents/Develop/advice-generator/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/aashtiany/Documents/Develop/advice-generator/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/aashtiany/Documents/Develop/advice-generator/src/pages/index.js"))
}

