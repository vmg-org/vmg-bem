({
  block: 'page',
  title: '',
  favicon: 'favicon.ico',
  head: [{
    elem: 'css',
    url: 'template.css'
  }, {
    elem: 'meta',
    attrs: {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  }],
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
          block: 'movie-template',
          mix: {
            block: 'over-wrap'
          },
          content: [{
            elem: 'preview',
            imgSrc: './css/img/movie-black.png'
          }, {
            elem: 'title',
            content: 'Template title'
          }, {
            elem: 'episodes-header',
            content: '%=episodes=%'
          }, {
            elem: 'episodes',
            content: [{
              block: 'template-episodes',
              arr: [{
                title: 'episode1',
                story: 'someStory'
              }, {
                title: 'episode2',
                story: 'someStory'
              }, {
                title: 'episode3',
                story: 'someStory'
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
          block: 'best-other-templates',
          mix: {
            block: 'over-wrap'
          },
          content: 'best other templates'
        }, {
          block: 'other-templates',
          mix: {
            block: 'over-wrap'
          },
          content: 'other templates'
        }]
      }]
    }]
  }]
})
