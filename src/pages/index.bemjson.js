module.exports = {
  block: 'html',
  tag: 'html',
  bem: false,
  content: [{
    block: 'head',
    tag: 'head',
    bem: false,
    content: '_head.bj.js'
  }, {
    block: 'page',
    tag: 'body',
    content: [{
      elem: 'header',
      content: '_header.bj.js'
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
              sm: 12
            },
            content: [{
              block: 'over-wrap',
              content: [{
                block: 'movie-records-col',
                content: [{
                  elem: 'header',
                  content: '%=movieRecords=%'
                }, {
                  elem: 'workspace',
                  content: [{
                    block: 'movie-records',
                    demo: true,
                    retry: 5,
                    content: [{ // for demo - remove this content for production (will be replaced in JS) or retry for development
                      elem: 'item',
                      content: ['_movie-preview.bj.js', {
                        block: 'glyphicon',
                        mods: {
                          q: 'list'
                        }
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }, {
            block: 'bsp-col',
            mods: {
              md: 4,
              sm: 12
            },
            content: [{
              block: 'over-wrap',
              content: [{
                block: 'best-templates-col',
                content: [{
                  elem: 'header',
                  content: '%=movieTemplates=%'
                }, {
                  elem: 'workspace',
                  content: [{
                    block: 'best-templates',
                    content: [{
                      elem: 'item',
                      content: [{
                        block: 'template-preview',
                        content: '_template-preview.bj.js'
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }, {
      elem: 'footer',
      content: '_footer.bj.js'
    }, {
      block: 'underground',
      bem: false,
      content: '_underground.bj.js'
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
        src: './js/index-bundle.js'
      }
    }]
  }]
};
