const { src, dest, watch, series, parallel } = require('gulp');
const { rm } = require('node:fs/promises');
const less = require('gulp-less');

const paths = {
  html: 'index.html',
  styles: {
    entry: 'src/styles/styles.less',
    watch: 'src/styles/**/*.less',
    output: 'styles.css'
  },
  scripts: 'script.js',
  assets: 'assets/**/*'
};

function cleanDist() {
  return rm('dist', { recursive: true, force: true });
}

function copyHtml() {
  return src(paths.html).pipe(dest('dist'));
}

function copyCompiledStyles() {
  return src(paths.styles.output).pipe(dest('dist'));
}

function compileStyles() {
  return src(paths.styles.entry, { base: 'src/styles' })
    .pipe(less())
    .pipe(dest('.'));
}

function copyScripts() {
  return src(paths.scripts).pipe(dest('dist'));
}

function copyAssets() {
  return src(paths.assets, { allowEmpty: true }).pipe(dest('dist/assets'));
}

const build = series(cleanDist, compileStyles, parallel(copyHtml, copyCompiledStyles, copyScripts, copyAssets));

function watchFiles() {
  watch([paths.html, paths.styles.watch, paths.scripts, paths.assets], build);
}

exports.clean = cleanDist;
exports.build = build;
exports.default = series(build, watchFiles);
