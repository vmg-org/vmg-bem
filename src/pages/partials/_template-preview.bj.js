module.exports = [{
  elem: 'watch',
  content: [{
    block: 'link-to-watch',
    // it is global styled elements - no need to create blocks
    tag: 'a',
    bem: false,
    attrs: {
      href: './template.html?asdf'
    },
    content: [{
      elem: 'img', // img to link to watch
      tag: 'img',
      bem: false,
      attrs: {
        src: './css/img/movie-black.png'
      }
    }]
  }]
}, {
  elem: 'title',
  content: '%%template-title'
}];
