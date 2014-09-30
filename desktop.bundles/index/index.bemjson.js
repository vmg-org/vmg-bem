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
                imgSrc: './css/img/movie-black.png',
                linkHref: './watch.html?v=13453245'
              }, {
                ttl: 'Other movie preview',
                imgSrc: './css/img/movie-black.png',
                linkHref: './watch.html?v=12341324'
              }, {
                ttl: 'Other movie preview',
                imgSrc: './css/img/movie-black.png',
                linkHref: './watch.html?v=12341324'
              }, {
                ttl: 'Other movie preview',
                imgSrc: './css/img/movie-black.png',
                linkHref: './watch.html?v=12341324'
              }, {
                ttl: 'Other movie preview',
                imgSrc: './css/img/movie-black.png',
                linkHref: './watch.html?v=12341324'
              }, {
                ttl: 'Other movie preview',
                imgSrc: './css/img/movie-black.png',
                linkHref: './watch.html?v=12341324'
              }, {
                ttl: 'Other movie preview',
                imgSrc: './css/img/movie-black.png',
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
          block: 'best-templates-col',
          mix: {
            block: 'over-wrap'
          },
          content: [{
            elem: 'header',
            content: '%=movieTemplates=%'
          }, {
            elem: 'workspace',
            content: [{
              block: 'best-templates',
              arr: [{
                ttl: 'Template preview',
                imgSrc: './css/img/movie-black.png',
                linkHref: './template.html?v=13453245'
              }, {
                ttl: 'Template preview',
                imgSrc: './css/img/movie-black.png',
                linkHref: './template.html?v=12341324'
              }, {
                ttl: 'Template preview',
                imgSrc: './css/img/movie-black.png',
                linkHref: './template.html?v=12341324'
              }, {
                ttl: 'Template preview',
                imgSrc: './css/img/movie-black.png',
                linkHref: './template.html?v=12341324'
              }, {
                ttl: 'Template preview',
                imgSrc: './css/img/movie-black.png',
                linkHref: './template.html?v=12341324'
              }]
            }]
          }]
        }]
      }]
    }]
  }]
})
