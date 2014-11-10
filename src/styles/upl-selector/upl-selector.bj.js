module.exports = {
  block: 'upl-selector',
  content: [{
    elem: 'file-wrap',
    content: [{
      elem: 'file-opener',
      tag: 'span',
      content: [{
        block: 'glyphicon',
        tag: 'span',
        mods: {
          q: 'open'
        }
      }]
    }, {
      elem: 'description',
      content: 'Select a file or drag it'
    }]
  }, {
    elem: 'file-input',
    tag: 'input',
    attrs: {
      type: 'file', // onChange - dynamically
      accept: 'video/*'
    }
  }]
};
