module.exports = {
  block: 'shw-movie-genre',
  mdl: 'movie_genre',
  content: [{
    elem: 'header',
    tag: 'span',
    content: '%=genreOfMovie=%'
  }, {
    elem: 'name',
    tag: 'span',
    content: '{{genre_tag_item.name}}'
      //                    elem: 'color-scheme',
      //                    content: '{{color_scheme}}'
  }, {
    elem: 'color-icon',
    tag: 'span',
    attrs: {
      style: '{{genre_tag_item.style}}'
    },
    content: [{
      block: 'glyphicon',
      tag: 'span',
      mods: {
        q: 'tag'
      }
    }]
  }]
};
