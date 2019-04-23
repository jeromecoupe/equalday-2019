const gulp = require("gulp");

// packages
const eslint = require("gulp-eslint");
const webpack = require("webpack");
const webpackconfig = require("../webpack.config.js");
const webpackstream = require("webpack-stream");

// Lint scripts
function scriptsLint() {
  return gulp
    .src([
      "./src/assets/js/modules/**/*",
      "./src/assets/js/*.js",
      "./gulpfile.js"
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Webpack transpile and minify
function scriptsBuild() {
  return (
    gulp
      .src(["./src/assets/js/main.js"])
      .pipe(webpackstream(webpackconfig, webpack))
      // folder only, filename is specified in webpack config
      .pipe(gulp.dest("./dist/js/"))
  );
}

// exports (Common JS)
module.exports = {
  lint: scriptsLint,
  build: scriptsBuild
};
