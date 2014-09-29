({
  block: 'page',
  title: 'index',
  favicon: 'favicon.ico',
  head: [{
    elem: 'css',
    url: 'index.css'
  }, {
    elem: 'js',
    url: './libs/modernizr.js'
  }, {
    elem: 'meta',
    attrs: {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  }],
  scripts: [{
    elem: 'js',
    url: './libs/jquery.js'
  }, {
    elem: 'js',
    url: './index-bundle.js'
  }],
  content: [{
    block: 'nib', //mixins for stylus
    bem: false
  }, {
    block: 'variables',
    bem: false // no 'variables' class
  }, {
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
          content: 'ISNAPPY'
        }, {
          elem: 'col',
          mods: {
            mw: 4,
	    sw: 12
          },
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
              content: '%=login_cf=%'
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
    content: [{
      block: 'grid',
      content: [{
        block: 'row',
        content: [{
          elem: 'col',
          mods: {
            mw: 8,
            sw: 12
          },
          content: [{
            block: 'movie-records-col',
            content: [{
              elem: 'header',
              content: '%=movie-records_cf=%'
            }, {
              elem: 'workspace',
              content: [{
                block: 'movie-records',
                arr: [
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'sadf1',
                  'asdf2'
                ]
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
            block: 'movie-templates-col',
            content: 'movie templates'
          }]
        }]
      }]
    }]
  }, {
    elem: 'footer',
    content: []
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
          content: '%=menu_header=%'
        }, {
          elem: 'list',
          content: 'super list with apps'
        }]
      }]
    }]
  }]
})
