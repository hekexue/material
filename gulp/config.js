var VERSION = require('./const').VERSION;

module.exports = {
  banner:
  '/*!\n' +
  ' * Angular Material Design\n' +
  ' * https://github.com/angular/material\n' +
  ' * @license MIT\n' +
  ' * v' + VERSION + '\n' +
  ' */\n',
  jsBaseFiles: [
    'src/core/**/*.js'
  ],
  jsFiles: [
    'src/**/*.js',
    '!src/**/*.spec.js'
  ],
  mockFiles : [
    'test/angular-material-mocks.js'
  ],
  themeBaseFiles: [
    'src/core/style/variables.scss',
    'src/core/style/mixins.scss'
  ],
  scssBaseFiles: [
    'src/core/style/color-palette.scss',
    'src/core/style/variables.scss',
    'src/core/style/mixins.scss',
    'src/core/style/structure.scss',
    'src/core/style/typography.scss',
    'src/core/style/layout.scss'
  ],
  scssStandaloneFiles: [
    'src/core/style/layout.scss'
  ],
  paths: 'src/{components,services}/**',
  outputDir: 'dist/'
};
