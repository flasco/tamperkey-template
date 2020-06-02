// rollup.config.js
const merge = require('webpack-merge');
const serve = require('rollup-plugin-serve');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const base = require('./config.base');
const { baseConf } = require('../config/tm-ext');
const fileP = path.resolve(__dirname, '../public/index.ejs');

const config = merge(base, {
  output: {
    file: 'local/temp.user.js',
  },
  plugins: [
    serve({
      open: true,
      contentBase: ['local'],
    }),
  ],
});

ejs
  .renderFile(fileP, {
    extensions: baseConf.require,
    scripts: 'temp.user.js',
  })
  .then((html) => {
    fs.writeFileSync('local/index.html', html);
  });

module.exports = config;
