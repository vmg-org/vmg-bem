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
                    block: 'movie-player-cover', // this is like movie-records
                    demo: true,
                    retry: 1,
                    content: [{
                      // link to video loaded with movie info
                      // insert only link to video (at this moment)
                      block: 'movie-player',
                      mdl: 'movie_record',
                      content: [{
                        elem: 'video',
                        tag: 'video',
                        attrs: {
                          src: '@@video_url'
                        }
                      }]
                    }]
                  }]
                }, {
                  block: 'over-wrap',
                  content: [{
                    block: 'movie-info-cover',
                    demo: true,
                    retry: 1,
                    content: [{
                      // info loaded together with link to video
                      block: 'movie-info',
                      mdl: 'movie_record',
                      content: [{
                        elem: 'title',
                        content: '%%movie_title'
                      }, {
                        elem: 'description',
                        content: '%%movie_description'
                      }]
                    }]
                  }]
                }, {
                  block: 'over-wrap',
                  content: [{
                    // social tools, like count of likes and shares - loaded separatelly of video
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
