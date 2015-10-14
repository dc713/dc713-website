# DC713 Website

This is the source code for the [Houston DC713 website](http://www.dc713.net).

## Features

We make extensive use of super-groovy workflow tooling including [npm](https://www.npmjs.com/), [Gulp](http://gulpjs.com/), and [Bower](http://bower.io/).

* Automagic CSS autoprefixing via [Autoprefixer](https://github.com/postcss/autoprefixer-core)
* Automagic CSS minification via [gulp-minify-css](https://github.com/murphydanger/gulp-minify-css)
* Automagic HTML minification via [gulp-minify-html](https://github.com/murphydanger/gulp-minify-html)
* Automagic previewing via [browsersync.io](http://browsersync.io)
* Automagic Sass compilation via [libsass](http://libsass.org)
* Automagic script lint via [ESLint](http://eslint.org/)
* Automagic script minification and uglification via [gulp-uglify](https://github.com/terinjokes/gulp-uglify)
* Automagic CSS source maps via [Gulp Sourcemaps](https://github.com/floridoo/gulp-sourcemaps)
* Automagic image optimization via [imagemin](https://github.com/kevva/imagemin)
* Automagic dependency installs via [Bower](http://bower.io)
* Automagic dependency wireups via [wiredep](https://github.com/taptapship/wiredep)
* Automagic Gulp plugin pipe break prevention via [gulp-plumber](https://github.com/floatdrop/gulp-plumber)
* Automagic Gulp caching via [gulp-cache](https://github.com/jgable/gulp-cache)
* Automagic Gulp plugin loading via [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins)

### ES2015 Support

This project's gulpfile makes use of [ES2015 features](https://babeljs.io/docs/learn-es2015/) by using [Babel](https://babeljs.io).

### Yeoman

This project was started with the [gulp-webapp](https://github.com/yeoman/generator-gulp-webapp) Yeoman generator. It's not something you're probably concerned with at this point since all Yeoman does is build the skeleton, but the docs there can be helpful to understand the pipeline.

## Contribute

Wanna help? Great! Start by reading the [this guide](http://www.contribution-guide.org/).

Here's what you'll need to install:

- Install [Node.js](https://nodejs.org/en/)
- Install [npm](https://www.npmjs.com/)
- Install [Gulp](http://gulpjs.com/) `npm install --global gulp`
- Install [Bower](http://bower.io/) `npm install --global bower`

Now you'll need to remember these things:

- Run `gulp serve` to preview and watch for changes
- Run `bower install --save <package>` to install frontend dependencies
- Run `gulp serve:test` to run the tests in the browser
- Run `gulp` to build your webapp for production
- Run `gulp serve:dist` to preview the production build

NOTE: If you forget to `gulp serve` and do a `bower install --save <package>` then wiredep won't automagically add the dependencies where they belong. To fix that, simply run `gulp wiredep` to patch things up.