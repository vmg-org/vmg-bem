module.exports = {
  block: 'shw-movie--usual',
  mdl: 'movie_template',
  content: [{
    elem: 'header-wrap',
    content: [{
      elem: 'preview-img',
      tag: 'img',
      attrs: {
        src: '{{preview_img_url}}'
      }
    }, {
      elem: 'name',
      tag: 'h2',
      content: '{{name}}'
    }]
  }, {
    elem: 'finished-str-header-wrap',
    content: [{
      elem: 'finished-str-header',
      tag: 'span',
      content: '%=youCanParticipateUntil=%'
    }, {
      elem: 'finished-str', // when a template is finished, author choose best episodes (or our moderator). if no best choice - author prolong the template (3 days). Selected episodes - are closed.
      tag: 'span',
      content: '{{finished_str}}'
    }]
  }, {
    elem: 'duration-of-episodes-str-wrap',
    content: [{
      elem: 'duration-of-episodes-str-header',
      tag: 'span',
      content: '%=durationOfEpisodesEquals=%'
    }, {
      elem: 'duration-of-episodes-str',
      tag: 'span',
      content: '{{duration_of_episodes_str}}' // number + ' seconds'
    }]
  }]
};
