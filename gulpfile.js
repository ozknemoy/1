const gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass')
    ;


app_src = [
    'dev/src/index.js',
    'dev/src/app/**/**/*.js',
    'dev/src/common/**/**/*.js',
    'dev/src/vendor/*.js'
];
app_src_html = [
    'dev/*.html',
    'dev/src/app/**/**/*.html',
    'dev/src/common/**/**/*.html'
];
vendorString = [
    'node_modules/angular/angular.min.js',
    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        ];

app_sass = ['dev/sass/*.sass'];


gulp.task('html', function () {
    return gulp.src(app_src_html, {base: 'dev'})
        .pipe(gulp.dest('production/'))
        .pipe(livereload());
});
gulp.task('moveAssets',  function() {
    gulp.src(vendorString)
        .pipe(gulp.dest('production/src/vendor'));
    gulp.src('dev/assets/main-page/*.*')
        .pipe(gulp.dest('production/css/main-page'));
});
gulp.task('concat', function () {
    gulp.src(app_src)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        //.pipe(ngAnnotate())
        //.pipe(uglify())
        .pipe(gulp.dest('production/src'))
        .pipe(livereload());
});
gulp.task('watch', function () {
    gulp.watch([app_src], ['concat']);
    gulp.watch([app_src_html], ['html']);
    gulp.watch([app_sass], ['sass']);
    livereload.listen();
});

gulp.task('sass', function () {
    return gulp.src(app_sass, {base: 'dev/sass'})
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('production/css'))
        .pipe(livereload());
});
gulp.task('install', function () {
    gulp.start('html', 'concat', 'sass', 'moveAssets');
});

gulp.task('webserver', function () {
    gulp.src('production')
        .pipe(webserver({
            directoryListing: false,
            open: true,
            proxies: [{source: '/production', target: 'http://localhost:8000/'}
            ]
        }));
});

