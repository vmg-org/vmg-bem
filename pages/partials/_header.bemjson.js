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
            href: './',
            content: [{
              elem: 'logo-span'
            }]
          }]
        }, {
          block: 'pull-left',
          content: [{
            block: 'menu-call',
            content: [{
              elem: 'full-icon',
              mix: [{
                block: 'glyphicon'
              }, {
                block: 'glyphicon-list'
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
          content: '%=login=%'
        }, {
          elem: 'auth-button',
          content: 'G+',
          elemMods: {
            social: 'goog'
          },
          mix: {
            block: 'button'
          }
        }, {
          elem: 'auth-button',
          content: 'FB',
          elemMods: {
            social: 'fb'
          },
          mix: {
            block: 'button'
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
