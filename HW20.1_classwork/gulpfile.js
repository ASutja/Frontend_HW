// const gulp = require('gulp');

// gulp.task("sayHello", async() => {
//     console.log("Hello custom gulp");
// })

// gulp.task("default", async() => {
//     console.log("Hello default gulp");
// })

const { src, dest, watch, series } = require("gulp");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const clean = require("gulp-clean");
const sass = require("sass");
const gulpSass = require("gulp-sass");
const scss = gulpSass(sass);

const BUILD_FOLDER = "./dist";
const SCRIPT_FOLDER = "./app/js";
const STYLES_FOLDER = "./app/styles";

async function cleanDist() {
  return clean(`${BUILD_FOLDER}/**/*`, { force: true });
}

function scripts() {
  return src(`${SCRIPT_FOLDER}/*.js`)
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest("dist/"));
}

function styles() {
  return src(`${STYLES_FOLDER}/*.scss`)
    .pipe(scss({ outputStyle: "compressed" }).on("error", scss.logError))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("dist/"));
}

function watcher() {
  watch(`${SCRIPT_FOLDER}/*.js`, scripts);
  watch(`${STYLES_FOLDER}/*.scss`, styles);
}

exports.build = series(cleanDist, scripts, styles);
exports.default = series(scripts, styles, watcher);