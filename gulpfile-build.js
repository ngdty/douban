// 1、编译SASS
// 2、基于ES6的模块化（webpack-stream插件）
// 3、版本号控制

const gulp = require('gulp')
const sass = require('gulp-sass')
const webpack = require('webpack-stream')
const rev = require('gulp-rev')
const revCollector = require('gulp-rev-collector')
const minifyHTML   = require('gulp-minify-html')
const gulpSequence = require('gulp-sequence')
const minifyCSS = require('gulp-minify-css')

// CommonJS规范做JS模块化
gulp.task('packjs', () => {
  return gulp.src('./src/scripts/*.js')
    .pipe(webpack({
      mode: 'production',
      entry: {
        app: ['@babel/polyfill', './src/scripts/app.js']
      },
      output: {
        filename: 'app.js'
      },
      module: {
        rules: [
          {
            test: /\.html$/,
            use: [ 'string-loader' ]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
          }
        ]
      }
    }))
    .pipe(rev())
    .pipe(gulp.dest('./dist/scripts'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist/rev/scripts'))
})

// 编译sass
gulp.task('packscss', () => {
  return gulp.src('./src/styles/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rev())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist/rev/styles'))
})

// copy index.html
gulp.task('copyhtml', () => {
  return gulp.src(['./dist/rev/**/*.json', './src/*.html'])
    .pipe(revCollector({
      replaceReved: true
    }))
    // .pipe(minifyHTML({
    //   empty:true,
    //   spare:true
    // }))
    .pipe(gulp.dest('./dist'))
})

// copy iconfonts
gulp.task('copyicons', () => {
  return gulp.src('./src/iconfonts/**/*')
    .pipe(gulp.dest('./dist/iconfonts'))
})

// copy libs
gulp.task('copylibs', () => {
  return gulp.src('./src/libs/**/*')
    .pipe(gulp.dest('./dist/libs'))
})

// copy mock
gulp.task('copymock', () => {
  return gulp.src('./src/mock/**/*')
    .pipe(gulp.dest('./dist/mock'))
})

// copy images
gulp.task('copyimages', () => {
  return gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./dist/images'))
})

// default task
gulp.task('default', function (cb) {
  gulpSequence(['packscss', 'packjs', 'copyicons', 'copylibs', 'copyimages'], 'copyhtml')(cb)
})