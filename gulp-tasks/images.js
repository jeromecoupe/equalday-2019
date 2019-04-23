// packages
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const gulp = require("gulp");

// optimize images
function optimiseImages() {
  return gulp
    .src("./src/assets/img/**/*")
    .pipe(newer("./dist/img/"))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: false }, { collapseGroups: true }]
        })
      ])
    )
    .pipe(gulp.dest("./dist/img/"));
}

// exports (Common JS)
module.exports = {
  optimise: optimiseImages
};
