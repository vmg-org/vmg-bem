module.exports = {
  block: 'page-cabinet',
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
            content: ['_cbn-act-movie-scope.bj.js', '_cbn-act-episode-scope.bj.js', '_cbn-act-bid-scope.bj.js']
          }]
        }, {
          block: 'bsp-col',
          mods: {
            md: 4,
            sm: 12
          },
          content: [{
            block: 'over-wrap',
            content: [{
              block: 'cbn-opened-template-header',
              bem: false,
              content: '%=myOpenedTemplates=%'
            }, {
              block: 'cbn-opened-template-scope',
              demo: true,
              retry: 5,
              content: [{
                block: 'cbn-opened-template',
                mdl: 'movie_template',
                content: [{
                  elem: 'link_to_watch',
                  tag: 'a',
                  attrs: {
                    href: '@@link_to_watch'
                  },
                  content: [{
                    elem: 'name',
                    tag: 'span',
                    content: '@@name'
                  }]
                }, {
                  elem: 'finished',
                  content: '@@finished_str'
                }]
              }]
            }]
          }, {
            block: 'over-wrap',
            content: [{
              block: 'cbn-ready-bid-header',
              bem: false,
              content: '%=myReadyBids=%'
            }, {
              block: 'cbn-ready-bid-scope',
              demo: true,
              retry: 5,
              content: [{
                block: 'cbn-ready-bid',
                mdl: 'episode_bid',
                content: [{
                  elem: 'movie-name-wrap',
                  content: [{
                    elem: 'link-to-template',
                    tag: 'a',
                    attrs: {
                      href: '@@link_to_template'
                    },
                    content: [{
                      elem: 'movie-name',
                      tag: 'span',
                      content: '@@episode_template_item__movie_template_item__name'
                    }]
                  }]
                }, {
                  elem: 'created-wrap',
                  content: [{
                    elem: 'created-header',
                    tag: 'span',
                    content: 'Created: '
                  }, {
                    elem: 'created',
                    tag: 'span',
                    content: '@@created_str'
                  }]
                }, {
                  elem: 'fnc-watch-video',
                  tag: 'button',
                  content: '%=fncWatchVideo=%'
                }, {
                  //  elem: 'episode-name',
                  //  content: "@@episode_template_item__name"
                }]
              }]
            }]
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
    block: 'page-script',
    tag: 'script',
    bem: false,
    attrs: {
      src: './js/cabinet-bundle.js'
    }
  }]
};
