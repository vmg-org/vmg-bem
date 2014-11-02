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
        content: ['_notif-row.bj.js', {
          block: 'bsp-row',
          content: [{
            block: 'bsp-col',
            mods: {
              md: 8,
              lg: 8
            },
            content: [{
              block: 'over-wrap',
              content: [{
                block: 'shw-movie-templates',
                demo: true,
                retry: 1,
                content: ['_shw-movie-template.bj.js']
              }]
            }, {
              block: 'over-wrap',
              content: [{
                block: 'shw-genre-tags',
                demo: true,
                retry: 1,
                content: [{
                  block: 'shw-genre-tag',
                  mdl: 'genre_tag',
                  content: [{
                    elem: 'header',
                    tag: 'span',
                    content: '%=genreOfMovie=%'
                  }, {
                    elem: 'name',
                    tag: 'span',
                    content: '@@name'
                      //                    elem: 'color-scheme',
                      //                    content: '@@color_scheme'
                  }, {
                    elem: 'color-icon',
                    tag: 'span',
                    attrs: {
                      style: '@@style'
                    },
                    content: [{
                      block: 'glyphicon',
                      tag: 'span',
                      mods: {
                        q: 'tag'
                      }
                    }]
                  }]
                }]
              }]
            }, {
              block: 'over-wrap',
              content: [{
                block: 'shw-episodes',
                demo: true,
                retry: 3,
                content: ['_shw-episode.bj.js']
              }]
            }, {
              block: 'over-wrap',
              content: [{
                elem: 'share-fnc',
                tag: 'button',
                content: '%=shareTemplate=%'
              }, {
                elem: 'like-fnc',
                tag: 'button',
                content: '%=likeTemplate=%'
              }, {
                elem: 'dislike-fnc',
                tag: 'button',
                content: '%=dislikeTemplate=%'
              }]
            }]
          }, {
            block: 'bsp-col',
            mods: {
              lg: 4,
              md: 4
            },
            content: [{
              block: 'over-wrap',
              content: [{
                block: 'best-other-templates',
                content: 'best other templates'
              }]
            }, {
              block: 'over-wrap',
              content: [{
                block: 'other-templates',
                content: 'other templates'
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
        src: './js/template-bundle.js'
      }
    }, {
      elem: 'videojs-script',
      tag: 'script',
      bem: false,
      attrs: {
        src: '//vjs.zencdn.net/4.9.1/video.js'
      }
    }]
  }]
};
