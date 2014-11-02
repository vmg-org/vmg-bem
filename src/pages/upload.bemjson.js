/**
 * Page for uploading
 * @todo: #33! Add info about episode_bid (check auth too)
 * @todo: #41! remove vjs script
 */

module.exports = {
  block: 'html',
  tag: 'html',
  bem: false,
  content: ['_head.bj.js', {
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
              sm: 12
            },
            content: [{
              block: 'over-wrap',
              content: [{
                block: 'ratio16-9',
                content: [{
                  elem: 'workspace',
                  content: [{
                    block: 'upl-loader',
                    content: 'init...'
                  }, {
                    block: 'upl-selector',
                    content: [{
                        elem: 'file-wrap',
                        content: [{
                          elem: 'file-opener',
                          tag: 'span',
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
                          type: 'file', // onChange - dynamically
                          accept: 'video/*'
                        }
                      }]
                      // if you want to choose other video - click "Cancel" under video
                      // After Cancelling - refresh a page (to free resources) or hide/show blocks
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
              content: 'Movie, episode, bid info'
            }]
          }]
        }]
      }]
    }, {
      elem: 'footer',
      content: '_footer.bj.js'
    }, '_underground.bj.js', {
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
        src: './js/upload-bundle.js'
      }
    }, {
      // page script initialize window.FileAPI (with some options);
      elem: 'file-api-script',
      tag: 'script',
      bem: false,
      attrs: {
        src: './libs/file-api/FileAPI.min.js'
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
