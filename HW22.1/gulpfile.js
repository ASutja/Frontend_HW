const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const newer = require("gulp-newer");
const imagemin = require("gulp-imagemin");
const minifyHtml = require("gulp-minify-html");
const babel = require("gulp-babel");

const paths = {
  html: {
    src: "index.html",
    dest: "dist/",
  },
  js: {
    src: "script.js",
    dest: "dist/",
  },
};

function html() {
  return gulp
    .src(paths.html.src)
    .pipe(minifyHtml())
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

function js() {
  return gulp
    .src(paths.js.src)
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      }),
    )
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });

  gulp.watch(paths.html.src, html);
  gulp.watch(paths.js.src, js);
}

const build = gulp.series(gulp.parallel(html, js), serve);

gulp.task("default", build);
