({
  block: 'page',
  title: 'watch',
  favicon: 'favicon.ico',
  head: [{
    elem: 'css',
    url: 'watch.css'
  }, {
    elem: 'meta',
    attrs: {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  }],
  content: [{
    block: 'variables',
    bem: false // no 'variables' class
  }, {
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
          block: 'movie-record-col',
          content: [{
            elem: 'header',
            content: '%=movieRecord=%'
          }]
        }]
      }, {
        elem: 'col',
        mods: {
          mw: 4,
          sw: 12
        },
        content: [{
          block: 'other-movies-col',
          content: '%=otherMovies=%'
        }]
      }]
    }]
  }]
})
