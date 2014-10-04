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
              lg: 8,
              md: 8
            },
            content: [{
              block: 'movie-record-col',
              content: [{
                elem: 'header',
                content: [{
                  block: 'over-wrap',
                  content: [{
                    block: 'movie-player-wrap',
                    content: [{
                      block: 'movie-player',
                      tag: 'video'
                    }]
                  }]
                }, {
                  block: 'over-wrap',
                  content: [{
                    block: 'movie-info',
                    content: [{
                      elem: 'title',
                      content: '%%movie_title'
                    }, {
                      elem: 'description',
                      content: '%%movie_description'
                    }]
                  }]
                }, {
                  block: 'over-wrap',
                  content: [{
                    block: 'movie-social-tools',
                    content: 'likes and share'
                  }]
                }, {
                  block: 'over-wrap',
                  content: [{
                    // comments loaded separately from a video
                    block: 'movie-comments-wrap',
                    content: [{
                      elem: 'header',
                      content: '@=movieComments=%'
                    }, {
                      elem: 'workspace',
                      content: [{
                        block: 'movie-comments',
                        demo: true,
                        retry: 10,
                        content: [{
                          elem: 'item',
                          content: ['_movie-comment.bj.js']
                        }]
                      }]
                    }, {
                      elem: 'footer'
                    }]
                  }]
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
              block: 'over-wrap',
              content: [{
                block: 'best-other-movies',
                content: 'best other movies'
              }]
            }, {
              block: 'over-wrap',
              content: [{
                block: 'other-movies',
                content: '%=otherMovies=%'
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
        src: './js/watch-bundle.js'
      }
    }]
  }]
};
