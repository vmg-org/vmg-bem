({
  block: 'page',
  title: 'index',
  favicon: 'favicon.ico',
  head: [{
    elem: 'css',
    url: 'index.css'
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
          mw: 8,
          sw: 12
        },
        content: [{
          block: 'movie-records-col',
          mix: {
            block: 'over-wrap'
          },
          content: [{
            elem: 'header',
            content: '%=movieRecords=%'
          }, {
            elem: 'workspace',
            content: [{
              block: 'movie-records',
              arr: [{
                ttl: 'Movie preview image',
                imgSrc: './img/movie-black.png',
                linkHref: './watch.html?v=13453245'
              }, {
                ttl: 'Other movie preview',
                imgSrc: './img/movie-black.png',
                linkHref: './watch.html?v=12341324'
              }, {
                ttl: 'Other movie preview',
                imgSrc: './img/movie-black.png',
                linkHref: './watch.html?v=12341324'
              }, {
                ttl: 'Other movie preview',
                imgSrc: './img/movie-black.png',
                linkHref: './watch.html?v=12341324'
              }, {
                ttl: 'Other movie preview',
                imgSrc: './img/movie-black.png',
                linkHref: './watch.html?v=12341324'
              }, {
                ttl: 'Other movie preview',
                imgSrc: './img/movie-black.png',
                linkHref: './watch.html?v=12341324'
              }, {
                ttl: 'Other movie preview',
                imgSrc: './img/movie-black.png',
                linkHref: './watch.html?v=12341324'
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
          block: 'movie-templates-col',
          mix: {
            block: 'over-wrap'
          },
          content: '%=movieTemplates=%'
        }]
      }]
    }]
  }]
})
