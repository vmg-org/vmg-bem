module.exports = {
   block: 'auth-no',
  content: [{
    elem: 'welcome',
    tag: 'span',
    content: '%=login=%'
  }, {
    elem: 'auth-button',
    tag: 'button',
    content: 'G+',
    elemMods: {
      social: 'goog'
    }
  }, {
    elem: 'auth-button',
    tag: 'button',
    content: 'FB',
    elemMods: {
      social: 'fb'
    }
  }, {
    elem: 'auth-button',
    tag: 'button',
    content: 'Dev',
    elemMods: {
      social: 'dev'
    }
  }]
};
