module.exports = [{
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
          content: [{
            block: 'menu-call',
            attrs: {
              onclick: 'app.turnPopup(this, \'menu-popup\')'
            },
            content: [{
              elem: 'full-icon',
              tag: 'span',
              content: [{
                block: 'glyphicon',
                tag: 'span',
                mods: {
                  q: 'list'
                }
              }]
            }]
          }]
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
      block: 'bsp-col',
      mods: {
        lg: 4,
        md: 4
      },
      content: [{
        block: 'auth-no',
        content: [{
          elem: 'welcome',
          tag: 'span',
          content: '%=login=%'
        }, {
          elem: 'auth-button',
          tag: 'button',
          content: 'G+',
          elemMods: {
            social: 'goog'
          }
        }, {
          elem: 'auth-button',
          tag: 'button',
          content: 'FB',
          elemMods: {
            social: 'fb'
          }
        }]
      }, {
        block: 'auth-profile',
        content: [{
          elem: 'name',
          content: '%%myname'
        }, {
          elem: 'icon',
          content: '%%myicon'
        }, {
          elem: 'settings',
          content: 'stn, exit'
        }]
      }]
    }]
  }]
}];
