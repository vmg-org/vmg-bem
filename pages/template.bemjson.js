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
        block: 'grid',
        content: [{
          block: 'row',
          content: [{
            elem: 'col',
            mods: {
              mw: 8
            },
            content: [{
              block: 'movie-template',
              mix: {
                block: 'over-wrap'
              },
              content: [{
                elem: 'preview',
                imgSrc: './css/img/movie-black.png'
              }, {
                elem: 'title',
                content: 'Template title'
              }, {
                elem: 'episodes-header',
                content: '%=episodes=%'
              }, {
                elem: 'episodes',
                content: [{
                  block: 'template-episodes',
                  arr: [{
                    title: 'episode1',
                    story: 'someStory'
                  }, {
                    title: 'episode2',
                    story: 'someStory'
                  }, {
                    title: 'episode3',
                    story: 'someStory'
                  }]
                }]
              }]
            }]
          }, {
            elem: 'col',
            mods: {
              mw: 4,
              sw: 12
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
        src: './lib/jquery.js'
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
