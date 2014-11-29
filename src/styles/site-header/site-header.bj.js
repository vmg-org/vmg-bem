module.exports = {
  block: 'site-header', // bsp-container
  content: [{
    elem: 'row', // bsp-row
    content: [{
      elem: 'col-logo', // bsp-col 4
      mix: {
        block: 'bsp-col',
        mods: {
          lg: 4,
          md: 4
        }
      },
      content: [{
        elem: 'call-logo-wrap',
        content: [{
          elem: 'logo-wrap',
          content: ['_vmg-logo.bj.js']
        }, {
          elem: 'call-wrap',
          content: ['_menu-call.bj.js']
        }]
      }]
    }, {
      elem: 'col-search',
      mix: {
        block: 'bsp-col',
        mods: {
          lg: 4,
          md: 4
        }
      },
      content: [{
        block: 'vmg-search'
      }]
    }, {
      elem: 'col-auth',
      mix: {
        block: 'bsp-col',
        mods: {
          lg: 4,
          md: 4
        }
      },
      content: [{
        elem: 'auth-wrap',
        content: [{
          elem: 'auth-no-wrap',
          demo: true,
          retry: 1,
          content: ['_auth-no.bj.js']
        }]
      }, {
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
};
