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
      // load together movie info and episodes (in one request)
      onload: "app.loadMovieTemplate(this, event, 'shw-movie-templates', 'shw-genre-tags', 'shw-episodes');"
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
              md: 8,
              lg: 8
            },
            content: [{
              block: 'over-wrap',
              content: [{
                block: 'shw-movie-templates',
                demo: true,
                retry: 1,
                content: [{
                  block: 'shw-movie-template',
                  mdl: 'movie_template',
                  content: [{
                    elem: 'preview-img',
                    tag: 'img',
                    attrs: {
                      src: '@@preview_img_url'
                    }
                  }, {
                    elem: 'name',
                    tag: 'h2',
                    content: '@@name'
                  }, {}, {
                    elem: 'duration-of-episodes-str',
                    content: '@@duration_of_episodes_str' // number + ' seconds'
                  }, {
                    elem: 'created-str',
                    content: '@@created_str'
                  }, {
                    elem: 'finished-str', // when a template is finished, author choose best episodes (or our moderator). if no best choice - author prolong the template (3 days). Selected episodes - are closed.
                    content: '@@finished_str'
                  }, {
                    elem: 'prolong-fnc', // author can prolong this template, max - 3 times
                    tag: 'button',
                    content: '%=prolongTemplate=%'
                  }, {
                    elem: 'edit-fnc', // author can edit only of no bids
                    tag: 'button',
                    content: '%=editTemplate=%'
                  }, {
                    elem: 'remove-fnc',
                    tag: 'button',
                    content: '%=removeTemplate=%'
                  }, {
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
                    elem: 'name',
                    content: '@@name'
                  }, {
                    elem: 'color-scheme',
                    content: '@@color_scheme'
                  }, {
                    elem: 'color',
                    content: '@@color' //some icon with color	  
                  }]
                }]
              }]
            }, {
              block: 'over-wrap',
              content: [{
                block: 'shw-episodes',
                demo: true,
                retry: 3,
                content: [{
                  block: 'shw-episode',
                  mdl: 'episode_template',
                  content: [{
                    elem: 'header',
                    content: '%=episode=%'
                  }, {
                    elem: 'order_in_movie',
                    content: '@@order_in_movie'
                  }, {
                    elem: 'name',
                    content: '@@name'
                  }, {
                    elem: 'story',
                    content: '@@story'
                  }, {
                    elem: 'conds',
                    content: '@@conds'
                  }, {
                    elem: 'count-of-bids',
                    content: '@@count_of_bids'
                  }, {
                    elem: 'count-of-variants',
                    content: '@@count_of_variants'
                  }, {
                    elem: 'tweet-fnc',
                    tag: 'button',
                    content: '%=tweetEpisode=%'
                  }, {
                    elem: 'take-fnc', // start to snap it
                    tag: 'button',
                    content: '%=takeEpisode=%'
                  }, {
                    elem: 'attach-video-fnc',
                    tag: 'button',
                    content: '%=attachVideo=%'
                  }, {
                    elem: 'attached-videos-fnc', // author can watch videos, but choose - only when template is finished
                    tag: 'button',
                    content: '%=showAttachedVideos=%'
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
    }]
  }]
};
