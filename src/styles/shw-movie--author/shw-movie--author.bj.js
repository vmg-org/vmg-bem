module.exports = {
  block: 'shw-movie--author',
  mdl: 'movie_template',
  content: [{
    elem: 'header-wrap',
    // with link to loading a new photo
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
      content: '%=finished=%'
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
  }, {
    elem: 'prolong-fnc', // author can prolong this template, max - 3 times
    tag: 'button',
    attrs: {
      onclick: '{{fnc_prolong}}'
    },
    content: '%=prolongTemplate=%'
  }, {
    elem: 'edit-fnc', // author can edit only of no bids
    tag: 'button',
    attrs: {
      onclick: '{{fnc_move_to_edit}}'
    },
    content: '%=editTemplate=%'
  }, {
    elem: 'remove-fnc',
    tag: 'button',
    attrs: {
      onclick: '{{fnc_remove}}'
    },
    content: '%=removeTemplate=%'
  }, {
    elem: 'fnc-merge-best',
    tag: 'button',
    attrs: {
      onclick: '{{fnc_merge_best}}'
    },
    content: '%=mergeBest=%'
  }]
};
