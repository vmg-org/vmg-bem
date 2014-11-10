/*
 * @todo: #33! Add info about episode_bid (check auth too)
 */
module.exports = {
  block: 'page-upload',
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
            content: ['_upl-wrap.bj.js']
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
    elem: 'jquery-script',
    tag: 'script',
    bem: false,
    attrs: {
      src: './libs/jquery.js'
    }
  }, {
    elem: 'page-script',
    tag: 'script',
    bem: false,
    attrs: {
      src: './js/upload-bundle.js'
    }
  }, {
    // load after main script! init uses
    // page script initialize window.FileAPI (with some options);
    elem: 'file-api-script',
    tag: 'script',
    bem: false,
    attrs: {
      src: './libs/file-api/FileAPI.min.js'
    }
  }]
};
