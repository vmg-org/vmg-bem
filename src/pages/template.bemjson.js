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
                content: [{
                  block: 'shw-movie-template',
                  mdl: 'movie_template',
                  content: [{
                    elem: 'header-wrap',
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
                    }]
                  }, {
                    elem: 'finished-str-header-wrap',
                    content: [{
                      elem: 'finished-str-header',
                      tag: 'span',
                      content: '%=youCanParticipateUntil=%'
                    }, {
                      elem: 'finished-str', // when a template is finished, author choose best episodes (or our moderator). if no best choice - author prolong the template (3 days). Selected episodes - are closed.
                      tag: 'span',
                      content: '@@finished_str'
                    }]
                  }, {
                    elem: 'duration-of-episodes-str-wrap',
                    content: [{
                      elem: 'duration-of-episodes-str-header',
                      tag: 'span',
                      content: '%=durationOfEpisodesEquals=%'
                    }, {
                      elem: 'duration-of-episodes-str',
                      tag: 'span',
                      content: '@@duration_of_episodes_str' // number + ' seconds'
                    }]
                  }, {
                    elem: 'prolong-fnc', // author can prolong this template, max - 3 times
                    tag: 'button',
                    attrs: {
                      onclick: '@@fnc_prolong'
                    },
                    content: '%=prolongTemplate=%'
                  }, {
                    elem: 'edit-fnc', // author can edit only of no bids
                    tag: 'button',
                    attrs: {
                      onclick: '@@fnc_move_to_edit'
                    },
                    content: '%=editTemplate=%'
                  }, {
                    elem: 'remove-fnc',
                    tag: 'button',
                    content: '%=removeTemplate=%'
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
                content: [{
                  block: 'shw-episode',
                  mdl: 'episode_template',
                  content: [{
                    elem: 'header-wrap',
                    tag: 'h4',
                    content: [{
                      elem: 'header',
                      tag: 'span',
                      content: '%=episode=%'
                    }, {
                      elem: 'order-in-movie',
                      tag: 'span',
                      content: '@@order_in_movie'
                    }, {
                      elem: 'name',
                      tag: 'span',
                      content: '@@name'
                    }]
                  }, {
                    elem: 'story',
                    content: '@@story'
                  }, {
                    elem: 'conds-wrap',
                    content: [{
                      elem: 'conds-header',
                      tag: 'span',
                      content: 'Conditions:'
                    }, {
                      elem: 'conds',
                      tag: 'span',
                      content: '@@conds'
                    }]
                  }, {
                    elem: 'count-wrap',
                    content: [{
                      elem: 'count-of-bids-header',
                      tag: 'span',
                      content: '%=countOfBids=%'
                    }, {
                      elem: 'count-of-bids',
                      tag: 'span',
                      content: '@@episode_bid_count_non_ready'
                    }, {
                      elem: 'count-of-variants-header',
                      tag: 'span',
                      content: '%=countOfVariants=%'
                    }, {
                      elem: 'count-of-variants',
                      tag: 'span',
                      content: '@@episode_bid_count_ready'
                    }]
                  }, {
                    elem: 'fnc-tweet-story',
                    tag: 'button',
                    content: '%=fncTweetEpisode=%',
                    attrs: {
                      'data-order': '@@order_in_movie',
                      'data-id': '@@id'
                    }
                  }, {
                    elem: 'fnc-upload-later', // start to snap it
                    tag: 'button',
                    content: '%=fncUploadLater=%',
                    attrs: {
                      'data-order': '@@order_in_movie',
                      'data-id': '@@id',
                      onclick: '@@fnc_upload_later'
                    }
                  }, {
                    elem: 'fnc-upload-now', // go to upload.html?v=id_of_media_spec (redirect from a client, to show addt msg and assign query param
                    tag: 'button',
                    content: '%=fncUploadNow=%',
                    attrs: {
                      'data-order': '@@order_in_movie',
                      'data-id': '@@id',
                      onclick: '@@fnc_upload_now'
                    }
                  }, {
                    elem: 'fnc-show-attachments', // author can watch videos, but choose - only when template is finished
                    tag: 'button',
                    content: '%=fncShowAttachments=%',
                    attrs: {
                      onclick: '@@fnc_show_atts',
                      'data-order': '@@order_in_movie',
                      'data-id': '@@id',
                      'data-for': 'shw-episode__attachments'
                    }
                  }, {
                    elem: 'attachments',
                    attrs: {
                      'data-id': '@@id'
                    },
                    content: ['_att-row.bj.js']
                      // here will be loaded att-row when user clicks to fncShowAttachments
                  }]
                }]
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
