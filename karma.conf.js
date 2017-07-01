module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'build/src/**/*.js',
            'build/test/**/*.spec.js'
        ],
        preprocessors: {
            'build/src/**/*.js': ['coverage']
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
