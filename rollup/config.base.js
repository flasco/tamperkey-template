// rollup.config.js
const babel = require('rollup-plugin-babel');

const postcss = require('../third-party/postcss');

module.exports = {
  input: 'src/index.tsx',
  output: {
    file: 'local/temp.user.js',
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  plugins: [
    postcss({
      extensions: ['.scss', '.css'],
    }),

    babel({
      babelrc: false,
      presets: [
        '@babel/preset-react',
        [
          '@babel/preset-typescript',
          {
            isTSX: true, //关键配置
            allExtensions: true, //关键配置
          },
        ],
        [
          '@babel/preset-env',
          {
            modules: false,
            useBuiltIns: 'usage', //这里使用babel的自动生成polyfill依赖的功能
            corejs: {
              version: 3, // 使用core-js@3
              proposals: true,
            },
            loose: true,
          },
        ],
      ],
      include: ['src/**'],
      extensions: ['tsx', 'ts', 'js', 'jsx'], //超级关键配置
    }),
  ],
  external: ['react', 'react-dom'],
};
