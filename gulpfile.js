const gulp = require("gulp");
const browserify = require("gulp-browserify");
const less = require("gulp-less");
const uglify = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task("default", ["scripts", "styles"]);

gulp.task("scripts", () => {
  return gulp.src("./client/*.js", {read: false})
    .pipe(browserify())
    .pipe(gulp.dest("./dist"))
    .pipe(uglify())
    .pipe(rename(path => {
      path.extname = ".min.js";
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("styles", () => {
  return gulp.src("./client/*.less")
    .pipe(less())
    .pipe(gulp.dest("./dist"))
    .pipe(cleanCss())
    .pipe(rename(path => {
      path.extname = ".min.css";
    }))
    .pipe(gulp.dest("./dist"));
});