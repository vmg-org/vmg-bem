module.exports = {
  block: 'template-preview',
  mdl: 'movie_template',
  content: [{
    elem: 'watch',
    content: [{
      block: 'link-to-watch',
      // it is global styled elements - no need to create blocks
      tag: 'a',
      bem: false,
      attrs: {
        href: '@@url_to_watch'
      },
      content: [{
        elem: 'img', // img to link to watch
        tag: 'img',
        bem: false,
        attrs: {
          src: '@@preview_img_url'
        }
      }]
    }]
  }, {
    elem: 'title',
    content: '@@name'
  }]
};
