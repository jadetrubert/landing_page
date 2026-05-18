const { src, dest, watch, series, parallel } = require('gulp');
const { rm } = require('node:fs/promises');

const paths = {
  html: 'index.html',
  styles: 'styles.css',
  scripts: 'script.js',
  assets: 'assets/**/*'
};

function cleanDist() {
  return rm('dist', { recursive: true, force: true });
}

function copyHtml() {
  return src(paths.html).pipe(dest('dist'));
}

function copyStyles() {
  return src(paths.styles).pipe(dest('dist'));
}

function copyScripts() {
  return src(paths.scripts).pipe(dest('dist'));
}

function copyAssets() {
  return src(paths.assets, { allowEmpty: true }).pipe(dest('dist/assets'));
}

const build = series(cleanDist, parallel(copyHtml, copyStyles, copyScripts, copyAssets));

function watchFiles() {
  watch(
    [paths.html, paths.styles, paths.scripts, paths.assets],
    build
  );
}

exports.clean = cleanDist;
exports.build = build;
exports.default = series(build, watchFiles);
