module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'dist/src/**/*.js',
            'dist/test/**/*.spec.js'
        ],
        preprocessors: {
            'dist/src/**/*.js': ['coverage']
        },
        port: 9876,
        colors: true,
        reporters: ['progress', 'coverage'],
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        coverageReporter: {
            dir : 'dist/reports/coverage',
            reporters: [
                { type: 'html', subdir: '.' },
            ]
        }
    });
};
