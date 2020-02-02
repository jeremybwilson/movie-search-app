// bs-config.js

const browserSync = require('browser-sync');

function lessMiddleware(request, response, next) {
        // Adapted directly from Browsersync exampes:
        // https://github.com/Browsersync/recipes/tree/master/recipes/middleware.css.injection

        const parsed = require('url').parse(request.url);
        if (parsed.pathname.match(/\.less$/)) {
                return less(parsed.pathname).then(function(o) {
                        response.setHeader('Content-Type', 'text/css');
                        response.end(o.css);
                });
        }
        next();

        function less(src) {
                const f = require('fs')
                        .readFileSync(`app${src}`)
                        .toString();
                return require('less').render(f);
        }
}

// Export configuration options
module.exports = {
        port: 3003,
        files: './**/*.{js, html, css}',
        server: {
                baseDir: '.',
                middleware: {
                        2: lessMiddleware,
                },
        },
        browser: ['google-chrome', 'firefox'],
        https: true,
};
