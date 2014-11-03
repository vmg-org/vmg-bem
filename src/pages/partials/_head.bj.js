// head: contains styles and metas
module.exports = {
  block: 'head',
  bem: false,
  tag: 'head',
  content: [{
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
    content: '%=siteName=%: %=@@parentPage@@PageName=%'
  }, {
    elem: 'pagestyle',
    tag: 'link',
    bem: false,
    attrs: {
      rel: 'stylesheet',
      href: './css/@@parentPage@@-bundle.css' // one file per site (best cache) or one file per page (small size)
    }
  }, {
    elem: 'videojs-style',
    tag: 'link',
    bem: false,
    attrs: {
      rel: 'stylesheet',
      href: './css/video-js.min.css'
        //     href: '//vjs.zencdn.net/4.9.1/video-js.css'
    }
  }, {
    elem: 'mdrnzr',
    tag: 'script',
    bem: false,
    attrs: {
      src: './libs/modernizr.js' // shiv for videojs; and other tools
    }
  }, {
    elem: 'favicon',
    tag: 'link',
    bem: false,
    attrs: {
      rel: 'shortcut icon',
      href: 'favicon.ico'
    }
  }]
};
