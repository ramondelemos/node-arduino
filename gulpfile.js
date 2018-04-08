const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const tsProject = ts.createProject('tsconfig.json');
const path = require('path');

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
  .pipe(clean());
});

gulp.task('build', ['clean'], () => {
  const tsResult = tsProject.src()
  .pipe(sourcemaps.init())
  .pipe(tsProject())
  .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: function(file) { return file.cwd + '/src'; } }))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], () => {
  gulp.watch('src/**/*.ts', ['build']);
});

gulp.task('assets', function() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'assets']);