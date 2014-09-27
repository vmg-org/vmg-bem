({
  block: 'page',
  title: 'index',
  favicon: 'favicon.ico',
  head: [{
    elem: 'css',
    url: '_index.css'
  }, {
    elem: 'meta',
    attrs: {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  }],
  scripts: [{
    elem: 'js',
    url: '_index.js'
  }],
  content: [{
    block: 'variables'
  }, {
    elem: 'header',
    content: [{
      block: 'grid',
      content: [{
        block: 'row',
        content: [{
          elem: 'col',
          mods: {
            mw: 8
          },
          content: 'ISNAPPY'
        }, {
          elem: 'col',
          mods: {
            mw: 4
          },
          content: [{
            block: 'b-auth',
            content: '%=login_cf=%'
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
            mw: 8
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
                arr: ['sadf1', 'asdf2']
              }]
            }]
          }]
        }, {
          elem: 'col',
          mods: {
            mw: 4
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
  }]
})
