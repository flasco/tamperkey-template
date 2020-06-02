const baseConf = {
  name: '老·司·机',
  version: '0.2.2',
  description: '节约开车时间~',
  author: 'flasco',
  match: '*',
  grant: ['GM_getValue', 'GM_setValue', 'GM_xmlhttpRequest', 'unsafeWindow'],
  require: [
    'https://cdn.bootcss.com/react/16.13.1/umd/react.production.min.js',
    'https://cdn.bootcss.com/react/16.13.1/umd/react-dom.production.min.js',
  ],
};

exports.getBanner = () => `
// ==UserScript==
// @name         ${baseConf.name}
// @version      ${baseConf.version}
// @description  ${baseConf.description}
// @author       ${baseConf.author}
// @match        ${baseConf.match}
${baseConf.grant.map((i) => `// @grant  ${i}`).join('\n')}
${baseConf.require.map((i) => `// @require  ${i}`).join('\n')}
// ==/UserScript==
`;
