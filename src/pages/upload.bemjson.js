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
      'onkeyup': "app.hidePopupByEscape(this, event, 'menu-popup')",
      'onload': "app.fillMovieRecords(this, event, 'movie-records'); app.fireAuth(this);",
      'data-auth-no': 'auth-no',
      'data-auth-profile': 'auth-profiles',
      'data-goog-btn': 'auth-no__auth-button_social_goog',
      'data-fb-btn': 'auth-no__auth-button_social_fb',
      'data-dev-btn': 'auth-no__auth-button_social_dev'
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
              sm: 12
            },
            content: [{
              block: 'over-wrap',
              content: [{
                block: 'ratio16-9',
                content: [{
                  elem: 'workspace',
                  content: [{
                    block: 'upl-selector',
                    content: [{
                        elem: 'file-wrap',
                        content: [{
                          elem: 'file-opener',
                          attrs: {
                            onclick: "app.fireFileSelector(this, event, 'upl-selector__file-input');"
                          },
                          content: [{
                            block: 'glyphicon',
                            tag: 'span',
                            mods: {
                              q: 'open'
                            }
                          }]
                        }, {
                          elem: 'description',
                          content: 'Select a file or drag it'
                        }]

                      }, {
                        elem: 'file-input',
                        tag: 'input',
                        attrs: {
                          accept: 'video/*',
                          onchange: 'app.handleUpload(this)'
                        }
                      }]
                      // if you want to choose other video - click "Cancel" under video
                      // After Cancelling - refresh a page (to free resources) or hide/show blocks
                      // Need place for drag-drop
                      //                  }, {
                      //                    block: 'upl-player',
                      //		    bem: false
                      //                    content: 'Player with uploaded video'
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
