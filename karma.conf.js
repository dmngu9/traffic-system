var webpack = require('./webpack.config');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/**/*.spec.ts'
        ],
        webpack: webpack,
        preprocessors: {
            'test/**/*.spec.ts': ['webpack', 'sourcemap']
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
