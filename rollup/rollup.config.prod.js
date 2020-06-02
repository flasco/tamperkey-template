// rollup.config.js
const merge = require('webpack-merge');
const base = require('./rollup.config');
const { uglify } = require('rollup-plugin-uglify');

const { getBanner } = require('../config/tm-ext');

module.exports = merge(base, {
  output: {
    banner: getBanner(),
    file: 'dist/temp.user.js',
  },
  plugins: [
    uglify({
      output: {
        comments: (_, comment) => {
          const whitelist = ['UserScript', '@'];
          return whitelist.some((i) => comment.value.includes(i));
        },
      },
    }),
  ],
});
