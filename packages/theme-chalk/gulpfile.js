'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');

// 动态导入 gulp-autoprefixer
async function getAutoprefixer() {
  const autoprefixer = await import('gulp-autoprefixer');
  return autoprefixer.default;
}

// 编译任务
gulp.task('compile', async function () {
  const autoprefixer = await getAutoprefixer();
  return gulp.src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      overrideBrowserslist: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

// 复制字体任务
gulp.task('copyfont', function () {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'));
});

// 构建任务，使用 gulp.series 来定义顺序
gulp.task('build', gulp.series('compile', 'copyfont'));
