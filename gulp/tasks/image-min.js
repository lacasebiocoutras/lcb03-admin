module.exports = function ($, gulp) { return function () {

  // var yaml          = require('js-yaml');
  // var fs            = require('fs');
  // var imageResize   = require('gulp-image-resize');


  // var appConfig = yaml.safeLoad(fs.readFileSync(
  //   './static-configs/' + name + '/app.yml',
  //   'utf-8'
  // ));

  var resizeImages = gulp.src('_site/images/*.{jpg,png}')
    // .pipe(imageResize({ width : appConfig.images.width }))
    .pipe($.imagemin({
      progressive: true,
      optimizationLevel: 7,
      interlaced: true
      //svgoPlugins: [{ removeViewBox: false }]
    }))
    .pipe(gulp.dest('_site/images'));

  // var resizeThumbnails = gulp.src('static-contents/'+name+'/thumbnails/*.{jpg,png}')
  //   // .pipe(imageResize({ width : appConfig.thumbnails.width }))
  //   .pipe($.imagemin({
  //     progressive: true,
  //     optimizationLevel: 3,
  //     interlaced: true
  //   }))
  //   .pipe(gulp.dest('dist/data/'+name+'/thumbnails'));

  // return merge(resizeImages,resizeThumbnails);
  return resizeImages;
};};
