({
  block: 'page',
  title: 'pagename', //overide title of a page
  favicon: 'favicon.ico',
  head: [{
    elem: 'css',
    url: 'layout.css' // merge css from layout and pages: combine and remove the same classes (during minification) - latter classes have priority
  }, {
    elem: 'js',
    url: './static/libs/modernizr.js'
  }, {
    elem: 'meta',
    attrs: {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  }],
  scripts: [{
    elem: 'js',
    url: './static/libs/jquery.js'
  }, {
    elem: 'js',
    url: 'page-bundle.js'
  }],
  content: [{
    elem: 'header',
    content: [{
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
    }]
  }, {
    elem: 'workspace',
    content: '%%%%%'
  }, {
    elem: 'footer',
    content: [{
      block: "license-info",
      content: "%=licenseInfo=%"
    }]
  }, {
    block: 'pip-popup', // all popups under html
    mix: [{
      block: 'menu-popup' // to open with JS and new styles
    }, {
      block: 'hidden'
    }],
    content: [{
      elem: 'space',
      content: [{
        block: 'menu-view',
        content: [{
          elem: 'close',
          mix: [{
            block: 'glyphicon'
          }, {
            block: 'glyphicon-remove-circle'
          }]
        }, {
          elem: 'header',
          content: '%=menuTitle=%'
        }, {
          elem: 'list',
          content: 'super list with apps'
        }]
      }]
    }]
  }]
})
