
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  baseHref: '/',
  criticalCssPlans: [[1,"/styles-247WAI27.css",106,["a"],[],[[5,"*","{margin:0;padding:0;box-sizing:border-box;background-color:#141414;color:#f8f2f2}",[0]],[5,1,"{text-decoration:none}",[3]]]]],
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 824, hash: '0d943c619141e751', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 949, hash: 'a3378c1624d7d4b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9526, hash: '72c190a67aebfd6b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
