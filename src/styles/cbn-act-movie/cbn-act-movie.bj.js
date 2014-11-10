module.exports = {
  block: 'cbn-act-movie',
  mdl: 'movie_template',
  content: [{
    elem: 'name',
    content: '{{name}}'
  }, {
    elem: 'created',
    content: '{{created}}'
  }, {
    elem: 'fnc-view',
    tag: 'a',
    attrs: {
      'href': '{{url_to_view}}'
    },
    content: '%=fncViewMovieTemplate=%'
  }]
};
