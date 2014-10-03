module.exports = {
  block: 'movie-preview',
  mdl: 'movie_record',
  content: [{
    elem: 'watch',
    content: [{
      block: 'link-to-watch',
      // it is global styled elements - no need to create blocks
      tag: 'a',
      bem: false,
      attrs: {
        href: '@@url'
      },
      content: [{
        elem: 'img', // img to link to watch
        tag: 'img',
        bem: false,
        attrs: {
          src: '@@img_preview_url'
            // src: './css/img/movie-black.png'
        }
      }]
    }]
  }, {
    elem: 'title',
    content: '@@upper_name'
  }, {
    elem: 'rating'
  }]
};
