
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://adreysanjunadel.github.io/followers-angular-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/followers-angular-app"
  },
  {
    "renderMode": 2,
    "route": "/followers-angular-app/followers"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5111, hash: '9fe59e224df6f7aadefe5fe79ed91882a8bba5d5c14dd6e5382e73f4992873cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: '6ad6caff176b85f8176d9f94565fdf7517b6fdf06dcb4d9a731b46bb358cd9b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11748, hash: '594df1c7f56980f5bc3a9e28b60bffa49e463aef7ccca77019317544dc5a66c4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'followers/index.html': {size: 51181, hash: '743f3b6742a4c84fb873fc5880b78f0f231080b34d80e1c92ac8b2ccde8486f6', text: () => import('./assets-chunks/followers_index_html.mjs').then(m => m.default)},
    'styles-CBKIIV5O.css': {size: 232292, hash: 'XMoUEM3bAQc', text: () => import('./assets-chunks/styles-CBKIIV5O_css.mjs').then(m => m.default)}
  },
};
