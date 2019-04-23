// packages
const browsersync = require("browser-sync").create();

// BrowserSync
function start(done) {
  browsersync.init({
    server: {
      baseDir: "./dist/"
    },
    files: [
      "./dist/css/main.min.css",
      "./dist/js/main.bundle.js",
      "./dist/**/*.{html, xml, rss}"
    ],
    port: 3000,
    open: false
  });
  done();
}

// exports
module.exports = {
  start: start
};
