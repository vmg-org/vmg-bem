/**
 * Page for enhance (cut and filters)
 * @todo: #33! Add info about episode_bid (check auth too)
 *             movie_template.name, .duration_of_episodes,
 *             episode_template.name, story, conds, order_in_movie
 */
module.exports = {
  block: 'page-enhance',
  tag: 'body',
  content: [{
    elem: 'header',
    content: ['_site-header.bj.js']
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
                  block: 'enh-loader',
                  content: 'conversion...'
                }, {
                  block: 'enh-player'
                }]
              }]
            }]
          }, {
            block: 'over-wrap',
            content: [{
              block: 'enh-slider',
              content: [{
                elem: 'lbl-cutting',
                tag: 'span',
                content: 'Specify range to cut: '
              }, {
                elem: 'inp-start',
                tag: 'input'
              }, {
                elem: 'lbl-between',
                tag: 'span',
                content: ' - '
              }, {
                elem: 'inp-stop',
                tag: 'input'
              }, {
                elem: 'fnc-cut',
                tag: 'button',
                content: 'Cut'
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
    content: ['_license-info.bj.js']
  }, '_menu-popup.bj.js', {
    block: 'jquery-script',
    tag: 'script',
    bem: false,
    attrs: {
      src: './libs/jquery.js'
    }
  }, {
    elem: 'videojs-script',
    tag: 'script',
    bem: false,
    attrs: {
      //        src: '//vjs.zencdn.net/4.9.1/video.js'
      src: './libs/video.js'
    }
  }, {
    block: 'page-script',
    tag: 'script',
    bem: false,
    attrs: {
      src: './js/enhance-bundle.js'
    }
  }]
};
