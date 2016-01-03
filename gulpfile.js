"use strict"

var gulp = require('gulp');
var connect = require('gulp-connect'); // runs a local dev server
var open = require('gulp-open'); // open a URL in a web browser
var browserify = require('browserify'); // bundles js
var reactify = require('reactify'); // transform React JSX to js
var source = require('vinyl-source-stream'); // use conventional text streams with Gulp
var concat = require('gulp-concat'); // concatenates files
var lint = require('gulp-eslint'); // lint js files, including JSX
var nodemon = require('gulp-nodemon');

var config = {
    port: 9005,
    devBaseUrl: "http://localhost",
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        image: './src/images/**/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/build/toastr.css'
        ],
        clientJs: './src/client.js',
        dist: './dist'
    }
}

gulp.task('connect' , function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function(){
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function(){
    browserify(config.paths.clientJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'));
});

gulp.task('image', function(){
    gulp.src(config.paths.image)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());
        
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('css', function(){
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
});

gulp.task('lint', function(){
    return gulp.src(config.paths.js)
        .pipe(lint({config: 'eslint.config.json'}))
        .pipe(lint.format());
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('server', function(){
    nodemon({
        script: './src/server/main.js',
        ext: 'js',
        env: {
            PORT:9000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function(){
        console.log('Restarting');
    });
});

gulp.task('default', ['html', 'js', 'css', 'image', 'lint', 'open', 'watch', 'server']);