module.exports = {
  block: 'page-template',
  tag: 'body',
  content: [{
    elem: 'header',
    content: '_header.bj.js'
  }, {
    elem: 'workspace',
    content: [{
      block: 'bsp-container',
      content: ['_notif-row.bj.js', {
        block: 'bsp-row',
        content: [{
          block: 'bsp-col',
          mods: {
            md: 8,
            lg: 8
          },
          content: [{
            block: 'shw-movie-templates',
            demo: true,
            retry: 1,
            content: ['_shw-movie-template.bj.js']
          }, {
            block: 'shw-movie-genre-scope',
            demo: true,
            retry: 1,
            content: ['_shw-movie-genre.bj.js']
          }, {
            block: 'shw-episodes',
            demo: true,
            retry: 3,
            content: ['_shw-episode.bj.js']
          }, {
            block: 'shw-social-rating',
            content: [{
              elem: 'share-fnc',
              tag: 'button',
              content: '%=shareTemplate=%'
            }, {
              elem: 'like-fnc',
              tag: 'button',
              content: '%=likeTemplate=%'
            }, {
              elem: 'dislike-fnc',
              tag: 'button',
              content: '%=dislikeTemplate=%'
            }]
          }]
        }, {
          block: 'bsp-col',
          mods: {
            lg: 4,
            md: 4
          },
          content: [{
            block: 'best-other-templates',
            content: 'best other templates'
          }, {
            block: 'other-templates',
            content: 'other templates'
          }]
        }]
      }]
    }]
  }, {
    elem: 'footer',
    content: '_footer.bj.js'
  }, '_underground.bj.js', {
    elem: '',
    bem: false,
    tag: 'script',
    attrs: {
      src: './libs/jquery.js'
    }
  }, {
    elem: '',
    bem: false,
    tag: 'script',
    attrs: {
      src: './libs/video.js'
        //      src: '//vjs.zencdn.net/4.9.1/video.js'
    }
  }, {
    elem: '',
    bem: false,
    tag: 'script',
    attrs: {
      src: './js/template-bundle.js'
    }
  }]
};
