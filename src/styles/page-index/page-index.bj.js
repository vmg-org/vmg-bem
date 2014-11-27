module.exports = {
  block: 'page-index',
  tag: 'body',
  content: [{
    elem: 'header',
    content: ['_site-header.bj.js']
  }, {
    elem: 'workspace',
    content: [{
      block: 'tmp-welcome',
      bem: false,
      content: [{
        elem: 'link',
        tag: 'a',
        attrs: {
          href: './explore.html'
        },
        content: 'Explore ISNAPPY'
      }]
    }]
  }, {
    elem: 'footer',
    content: ['_license-info.bj.js']
  }, '_menu-popup.bj.js', '_popup-scope.bj.js', {
    block: 'jquery-script',
    tag: 'script',
    bem: false,
    attrs: {
      src: './libs/jquery.js'
    }
  }, {
    block: 'page-script',
    tag: 'script',
    bem: false,
    attrs: {
      src: './js/index-bundle.js'
    }
  }]
};
