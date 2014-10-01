// head: contains styles and metas
module.exports = [{
  elem: 'meta1',
  tag: 'meta',
  bem: false,
  attrs: {
    'http-equiv': 'X-UA-Compatible',
    'content': 'IE=edge'
  }
}, {
  elem: 'meta2',
  tag: 'meta',
  bem: false,
  attrs: {
    charset: 'utf-8'
  }
}, {
  elem: 'meta3',
  tag: 'meta',
  bem: false,
  attrs: {
    viewport: 'width=device-width, initial-scale=1'
  }
}, {
  elem: 'title',
  tag: 'title',
  bem: false,
  content: '%=sitename=%'
}, {
  elem: 'pagestyle',
  tag: 'link',
  bem: false,
  attrs: {
    rel: 'stylesheet',
    href: './css/page-bundle.css' // one file per site (best cache) or one file per page (small size)
  }
},{
  elem: 'favicon',
  tag: 'link',
  bem: false,
  attrs: {
    rel: 'shortcut icon',
    href: 'favicon.ico' 
  }
}];

// if required - add modernizr script
