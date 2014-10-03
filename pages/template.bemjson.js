module.exports = {
  block: 'html',
  tag: 'html',
  bem: false,
  content: [{
    block: 'head',
    tag: 'head',
    bem: false,
    content: '_head.bemjson.js'
  }, {
    block: 'page',
    tag: 'body',
    content: [{
      elem: 'header',
      content: '_header.bemjson.js'
    }, {
      elem: 'workspace',
      content: [{
        block: 'bsp-container',
        content: [{
          block: 'bsp-row',
          content: [{
            block: 'bsp-col',
            mods: {
              md: 8,
              lg: 8
            },
            content: [{
              block: 'movie-template',
              mix: {
                block: 'over-wrap'
              },
              content: [{
                elem: 'preview',
                tag: 'img',
                attrs: {
                  src: './css/img/movie-black.png'
                }
              }, {
                elem: 'title',
                tag: 'h2',
                content: 'Crazy fox jumps'
              }, {
                elem: 'episodes-header',
                content: '%=episodes=%'
              }, {
                elem: 'episodes',
                content: [{
                  block: 'template-episodes',
                  content: [{
                      elem: 'item',
                      content: [{
                        block: 'episode-info',
                        content: [{
                          elem: 'title',
                          content: 'Over owl'
                        }, {
                          elem: 'story',
                          content: 'A fox screams, an owl falls from a tree, and the fox starts to jump over the owl'
                        }]
                      }]
                    }

                  ]
                }]
              }]
            }]
          }, {
            block: 'bsp-col',
            mods: {
              lg: 4,
              md: 4
            },
            content: [{
              block: 'best-other-templates',
              mix: {
                block: 'over-wrap'
              },
              content: 'best other templates'
            }, {
              block: 'other-templates',
              mix: {
                block: 'over-wrap'
              },
              content: 'other templates'
            }]
          }]
        }]
      }]
    }, {
      elem: 'footer',
      content: '_footer.bemjson.js'
    }, {
      block: 'underground',
      bem: false,
      content: '_underground.bemjson.js'
    }, {
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
        src: './js/template-bundle.js'
      }
    }]
  }]
};
