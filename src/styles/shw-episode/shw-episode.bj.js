module.exports = {
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
      content: '{{order_in_movie}}'
    }, {
      elem: 'name',
      tag: 'span',
      content: '{{name}}'
    }]
  }, {
    elem: 'story',
    content: '{{story}}'
  }, {
    elem: 'conds-wrap',
    content: [{
      elem: 'conds-header',
      tag: 'span',
      content: 'Conditions:'
    }, {
      elem: 'conds',
      tag: 'span',
      content: '{{conds}}'
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
      content: '{{episode_bid_count_non_ready}}'
    }, {
      elem: 'count-of-variants-header',
      tag: 'span',
      content: '%=countOfVariants=%'
    }, {
      elem: 'count-of-variants',
      tag: 'span',
      content: '{{episode_bid_count_ready}}'
    }]
  }, {
    elem: 'fnc-tweet-story',
    tag: 'button',
    content: '%=fncTweetEpisode=%',
    attrs: {
      'data-order': '{{order_in_movie}}',
      'data-id': '{{id}}'
    }
  }, {
    elem: 'fnc-upload-later', // start to snap it
    tag: 'button',
    content: '%=fncUploadLater=%',
    attrs: {
      'data-order': '{{order_in_movie}}',
      'data-id': '{{id}}',
      onclick: '{{fnc_upload_later}}'
    }
  }, {
    elem: 'fnc-upload-now', // go to upload.html?v=id_of_media_spec (redirect from a client, to show addt msg and assign query param
    tag: 'button',
    content: '%=fncUploadNow=%',
    attrs: {
      'data-order': '{{order_in_movie}}',
      'data-id': '{{id}}',
      onclick: '{{fnc_upload_now}}'
    }
  }, {
    elem: 'fnc-show-attachments', // author can watch videos, but choose - only when template is finished
    tag: 'button',
    content: '%=fncShowAttachments=%',
    attrs: {
      onclick: '{{fnc_show_atts}}',
      'data-order': '{{order_in_movie}}',
      'data-id': '{{id}}',
      'data-for': 'shw-episode__attachments'
    }
  }, {
    elem: 'attachments',
    attrs: {
      'data-id': '{{id}}'
    },
    content: [{
        block: 'att-row',
        content: [{
          block: 'bsp-row',
          content: [{
            block: 'bsp-col',
            mods: {
              md: 4,
              lg: 4
            },
            content: [{
              block: 'att-info-scope',
              attrs: {
                'data-id': '{{id}}' // id of episode template
              },
              demo: true,
              retry: 10,
              content: [
                '_att-info-0.bj.js',
                '_att-info-1.bj.js',
                '_att-info-2.bj.js',
                '_att-info-4.bj.js'
              ]
            }]
          }, {
            block: 'bsp-col',
            mods: {
              md: 8,
              lg: 8
            },
            content: [{
              block: 'att-content-scope',
              content: [{
                elem: 'item',
                content: [{
                  block: 'ratio16-9',
                  content: [{
                    elem: 'workspace',
                    content: [{
                      block: 'att-player',
                      attrs: {
                        'data-id': '{{id}}' // id_of_episode_template
                      },
                      content: 'player'
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
      // here will be loaded att-row when user clicks to fncShowAttachments
  }]
};
