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
              lg: 8,
              md: 8
            },
            content: [{
              block: 'movie-record-col',
              content: [{
                elem: 'header',
                content: [{
                  block: 'movie-player-wrap',
                  mix: {
                    block: 'over-wrap'
                  },
                  content: [{
                    block: 'movie-player',
                    tag: 'video'
                  }]
                }, {
                  block: 'movie-info',
                  mix: {
                    block: 'over-wrap'
                  },
                  content: [{
                    elem: 'title',
                    content: '%%movie_title'
                  }, {
                    elem: 'description',
                    content: '%%movie_description'
                  }]
                }, {
                  block: 'movie-social-tools',
                  mix: {
                    block: 'over-wrap'
                  },
                  content: 'likes and share'
                }, {
                  block: 'movie-comments-wrap',
                  mix: {
                    block: 'over-wrap'
                  },
                  content: 'list of comments'
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
              block: 'best-other-movies',
              mix: {
                block: 'over-wrap'
              },
              content: 'best other movies'
            }, {
              block: 'other-movies',
              mix: {
                block: 'over-wrap'
              },
              content: '%=otherMovies=%'
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
        src: './js/watch-bundle.js'
      }
    }]
  }]
};
