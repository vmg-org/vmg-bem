module.exports = {
  block: 'site-header',
  bem: false,
  content: [{
    block: 'bsp-container',
    content: [{
      block: 'bsp-row',
      content: [{
        block: 'bsp-col',
        mods: {
          lg: 4,
          md: 4
        },
        content: [{
          block: 'clearfix',
          content: [{
            block: 'pull-left',
            content: [{
              block: 'vmg-logo',
              tag: 'a',
              attrs: {
                href: './'
              },
              content: [{
                elem: 'logo-span',
                tag: 'span'
              }]
            }]
          }, {
            block: 'pull-left',
            content: ['_menu-call.bj.js']
          }]
        }]
      }, {
        block: 'bsp-col',
        mods: {
          lg: 4,
          md: 4
        },
        content: [{
          block: 'vmg-search'
        }]
      }, {
        block: 'bsp-col', // TODO: #33! change this to inner element or real block (structure - not decoration)
        mods: {
          lg: 4,
          md: 4
        },
        content: ['_auth-scope.bj.js', { // TODO: #33! Change authScope to inner element
          block: 'auth-profiles',
          demo: true,
          retry: 1,
          content: [{
            block: 'auth-profile',
            mdl: 'social_profile',
            content: [{
              elem: 'logout', // and settings for example
              attrs: {
                title: 'Log out'
              },
              content: [{
                block: 'glyphicon',
                tag: 'span',
                mods: {
                  q: 'log-out'
                }
              }]
            }, {
              elem: 'display-name-link',
              tag: 'a',
              attrs: {
                href: './cabinet.html'
              },
              content: [{
                elem: 'display-name',
                tag: 'span',
                content: '@@display_name' // and @@photo_url for example
              }]
            }, {
              elem: 'link-to-upload',
              tag: 'a',
              attrs: {
                href: './template-editor.html'
              },
              content: '%=createTemplate=%'
            }]
          }]
        }]
      }]
    }]
  }]
};
