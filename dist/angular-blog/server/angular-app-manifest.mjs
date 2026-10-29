
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  baseHref: '/',
  criticalCssPlans: [[1,"/styles-247WAI27.css",106,["a"],[],[[5,"*","{margin:0;padding:0;box-sizing:border-box;background-color:#141414;color:#f8f2f2}",[0]],[5,1,"{text-decoration:none}",[3]]]]],
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/content/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 931, hash: '0e6cac1c407ec4e2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: 'd0aa951ce4a5e89a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12887, hash: 'a5ec904bef0ed9cf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
