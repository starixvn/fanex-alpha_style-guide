var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat'),
  styleguide = require('./lib/styleguide'),
  source = 'lib/app/**/*.scss',
  outputPath = 'demo-output';

gulp.task('styleguide:generate', function() {
  return gulp.src(source)
    .pipe(styleguide.generate({
        title: 'Alpha styleguide for microsite',
        server: true,
        rootPath: outputPath,
        overviewPath: 'README.md',
        styleVariables: 'lib/app/scss/_variables.scss',
        styleguideProcessors: {
            40: function(styleguide) {
                styleguide.sections[0].description = styleguide.sections[0].description + ' [Description from custom Processor]';
            }
        },
        afterBody: [
          '<script src="/js/styleguide/components/jquery/jquery-1.11.3.js"></script>',
          '<script src="/js/styleguide/components/moment/moment.js"></script>',
          '<script src="/js/styleguide/components/FanexGrid/Fanex.Grid.js"></script>',
          '<script src="/js/styleguide/components/FanexGrid/Fanex.Pagination.js"></script>',
          '<script src="/js/styleguide/components/scrollbar/jquery.mCustomScrollbar.js"></script>'
        ],
        disableEncapsulation: true
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
    return gulp.src('lib/app/scss/app.scss')
      .pipe(sass({
          errLogToConsole: true,
          includePaths: neat.includePaths
      }))
      .pipe(styleguide.applyStyles())
      .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide', ['styleguide:static', 'styleguide:generate', 'styleguide:applystyles']);

gulp.task('styleguide:static', function() {
  gulp.src(['lib/demo/**'])
    .pipe(gulp.dest(outputPath + '/demo'));
    
    gulp.src(['lib/app/js/styleguide/**'])
  .pipe(gulp.dest(outputPath + '/js/styleguide'));

    gulp.src(['lib/app/assets/**'])
  .pipe(gulp.dest(outputPath + '/assets'));

    gulp.src(['lib/app/scss/vendors/**'])
  .pipe(gulp.dest(outputPath + '/scss/vendors'));

    gulp.src(['lib/app/views/**'])
  .pipe(gulp.dest(outputPath + '/views'));
});

gulp.task('watch', ['styleguide'], function() {
  // Start watching changes and update styleguide whenever changes are detected
  gulp.watch(source, ['styleguide']);
});
