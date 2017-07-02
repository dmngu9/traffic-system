var webpack = require('./webpack.config');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/karma.tests.ts'
        ],
        webpack: webpack,
        preprocessors: {
            'src/app.ts': ['coverage'],
            'test/karma.tests.ts': ['webpack', 'sourcemap']
        },
        port: 9876,
        colors: true,
        reporters: ['progress', 'coverage'],
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        coverageReporter: {
            dir : 'build/reports/coverage',
            reporters: [
                { type: 'html', subdir: '.' },
            ]
        }
    });
};
