module.exports = {
  block: 'page-explore',
  tag: 'body',
  content: [{
    elem: 'header',
    content: ['_site-header.bj.js']
  }, {
    elem: 'workspace',
    mix: {
      block: 'bsp-container'
    },
    content: [{
      elem: 'row',
      mix: {
        block: 'bsp-row'
      },
      content: [{
        elem: 'col-main',
        mix: {
          block: 'bsp-col',
          mods: {
            md: 8,
            sm: 12
          }
        },
        content: [{
          elem: 'col-main-wrap',
          content: ['_movie-records-col.bj.js']
        }]
      }, {
        elem: 'col-side',
        mix: {
          block: 'bsp-col',
          mods: {
            md: 4,
            sm: 12
          }
        },
        content: [{
          elem: 'col-side-wrap',
          content: ['_best-templates-col.bj.js']
        }]
      }]
    }]
  }, {
    elem: 'footer',
    content: ['_license-info.bj.js']
  }, '_popup-scope.bj.js', {
    elem: 'jquery-script',
    tag: 'script',
    bem: false,
    attrs: {
      src: './libs/jquery.js'
    }
  }, {
    elem: 'page-script',
    tag: 'script',
    bem: false,
    attrs: {
      src: './js/explore-bundle.js'
    }
  }]
};
