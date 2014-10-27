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
                // active bid - movie template info
                block: 'cbn-act-movie-scope',
                demo: true,
                retry: 1,
                content: [{
                  block: 'cbn-act-movie',
                  mdl: 'movie_template',
                  content: [{
                    elem: 'name',
                    content: '@@name'
                  }, {
                    elem: 'created',
                    content: '@@created'
                  }, {
                    elem: 'fnc-view',
                    tag: 'button',
                    attrs: {
                      'data-id': '@@id'
                    },
                    content: '%=fncViewMovieTemplate=%'
                  }]
                }]
              }, {
                block: 'cbn-act-episode-scope',
                demo: true,
                retry: 1,
                content: [{
                  block: 'cbn-act-episode',
                  mdl: 'episode_template',
                  content: [{
                    elem: 'name',
                    content: '@@name'
                  }, {
                    elem: 'story',
                    content: '@@story'
                  }]
                }]
              }, {
                block: 'cbn-act-bid-scope',
                demo: true,
                retry: 1,
                content: [{
                  block: 'cbn-act-bid',
                  mdl: 'episode_bid',
                  content: [{
                    elem: 'fnc-upload',
                    tag: 'button',
                    attrs: {
                      'data-id': '@@id_of_media_spec'
                    },
                    content: '%=fncUploadToBid=%'
                  }, {
                    elem: 'fnc-cancel',
                    tag: 'button',
                    attrs: {
                      'data-id': '@@id_of_media_spec'
                    },
                    content: '%=fncCancelBid=%'
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
        src: './js/cabinet-bundle.js'
      }
    }]
  }]
};
