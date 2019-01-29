// Definimos nuestras dependencias a utilizar

const gulp = require('gulp');
    concat = require('gulp-concat');
    sass = require('gulp-sass');
    pug = require('gulp-pug');
    webserver = require('gulp-webserver');

 

// Levantamos servidor local

gulp.task('webserver', function() {

  gulp.src('build')

  .pipe(webserver({

    livereload: true,

    directoryListing: true,

    open: true

  }));

});

 

// Definimos nuestra tarea para concatenar y minificar nuestros javascript

gulp.task('minify', function() {

  console.log('Minificamos a JS ');

  return gulp.src('src/js/*.js')

  .pipe(concat('all.js'))

  .pipe(gulp.dest('build/assets/js/'));

});

 

// Definimos nuestra tarea para pasar nuestros SCSS a CSS

gulp.task('sass', function() {

  console.log('compilando a CSS');

  return gulp.src('src/sass/*.sass')

  .pipe(sass().on('error', sass.logError))
  .pipe(sass({
    outputStyle: 'compact'}).on("error", sass.logError))
  .pipe(gulp.dest('build/assets/css/'));
});
 

// Esta tarea observa si existen cambios en nuestros JS

gulp.task('watch-js', function() {

  gulp.watch('src/js/*.js', ['minify'], function() {

    console.log('Observando los cambios en los JS');

  });

});
 

// Definimos nuestra tarea para transpilar de Pug a HTML

gulp.task('pug', () =>

  gulp.src('./src/pug/*.pug')

  .pipe(pug({

    pretty: true

    }))

  .pipe(gulp.dest('./build/assets/html'))

);

// Esta tarea observa si existen cambios en nuestros Sass

gulp.task('watch-sass', function() {

  gulp.watch('src/sass/*.sass', ['sass'], function() {

    console.log('Observando los cambios en los Sass');

  });

});

 

// Nuestras tareas que se ejecutan por defecto

gulp.task('default', function() {

  console.log('Ejecutando Gulp...');

  gulp.start('webserver', 'watch-js', 'watch-sass', 'pug', 'minify', 'sass');

  gulp.watch('src/pug/**/*.pug', ['pug']);

});

