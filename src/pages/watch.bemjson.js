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
    attrs: {
      onkeyup: "app.hidePopupByEscape(this, event, 'menu-popup')",
      onload: "app.fillMovie(this, event, 'movie-info-cover', 'movie-player-cover'); app.fillComments(this, event, 'movie-comments'); app.updateCommentsByInterval(this, event, 'movie-comments');"
    },
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
                    block: 'ratio16-9',
                    content: [{
                      elem: 'workspace',
                      content: [{
                        // link to video loaded with movie info
                        // inserted using javascript (create a video element dynamically)
                        block: 'movie-player-cover', // this is like movie-records
                        content: 'here uploaded a player with video'
                          // demo: true,
                          // retry: 1,
                          // content: [{
                          //   // insert only link to video (at this moment)
                          //   block: 'movie-player',
                          //   mdl: 'movie_record',
                          //   content: [{
                          //     elem: 'video',
                          //     tag: 'video',
                          //     mix: [{
                          //       block: 'video-js',
                          //       bem: false
                          //     }, {
                          //       block: 'vjs-default-skin',
                          //       bem: false
                          //     }],
                          //     attrs: {
                          //       controls: true,
                          //       'data-setup': '{"width": "100%", "height": "100%"}'
                          //     },
                          //     content: [{
                          //       elem: 'source1',
                          //       tag: 'source',
                          //       bem: false,
                          //       attrs: {
                          //         type: 'video/mp4',
                          //         src: 'https://s3.amazonaws.com/vmg-bucket/converted/966808401-web.mp4', // @@video_url
                          //       }
                          //     }]
                          //   }]
                          // }]
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
                        tag: 'h2',
                        content: '@@movie_title'
                      }, {
                        elem: 'description',
                        tag: 'h4',
                        content: '@@movie_description'
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
                      content: '%=movieComments=%'
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
