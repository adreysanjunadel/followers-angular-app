
export default {
  basePath: 'https://adreysanjunadel.github.io/followers-angular-app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
