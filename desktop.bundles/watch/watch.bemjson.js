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
    block: 'grid',
    content: [{
      block: 'row',
      content: [{
        elem: 'col',
        mods: {
          mw: 8
        },
        content: [{
          block: 'movie-record-col',
          content: [{
            elem: 'header',
            content: [{
              block: 'movie-player-wrap',
              mix: {
                block: 'over-wrap'
              },
              content: [{
                block: 'movie-player'
              }]
            }, {
              block: 'movie-info',
              mix: {
                block: 'over-wrap'
              },
              content: [{
                elem: 'title',
                content: '%%movie_title'
              }, {
                elem: 'description',
                content: '%%movie_description'
              }]
            }, {
              block: 'movie-social-tools',
              mix: {
                block: 'over-wrap'
              },
              content: 'likes and share'
            }, {
              block: 'movie-comments-wrap',
              mix: {
                block: 'over-wrap'
              },
              content: 'list of comments'
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
          block: 'best-other-movies',
          mix: {
            block: 'over-wrap'
          },
          content: 'best other movies'
        }, {
          block: 'other-movies',
          mix: {
            block: 'over-wrap'
          },
          content: '%=otherMovies=%'
        }]
      }]
    }]
  }]
})
