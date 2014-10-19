/**
 * Page for enhance (cut and filters)
 * @todo: #33! Add info about episode_bid (check auth too)
 *             movie_template.name, .duration_of_episodes,
 *             episode_template.name, story, conds, order_in_movie
 */

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
      'onload': "app.fireAuth(this);",
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
                  content: 'conversion...'                  
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
        src: './js/enhance-bundle.js'
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