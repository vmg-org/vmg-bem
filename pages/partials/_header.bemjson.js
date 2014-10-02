module.exports = [{
  block: 'grid',
  content: [{
    block: 'row',
    content: [{
      elem: 'col',
      mods: {
        mw: 4,
        sw: 12
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
            content: [{
              elem: 'full-icon',
              tag: 'span', // todo: #31! change mix to inner block
              mix: [{
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
      elem: 'col',
      mods: {
        mw: 4,
        sw: 12
      },
      content: [{
        block: 'vmg-search'
      }]
    }, {
      elem: 'col',
      mods: {
        mw: 4,
        sw: 12
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
