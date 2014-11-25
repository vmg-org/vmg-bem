/**
 * A block for non-auth users
 *    show a button to open an auth-login block
 * @todo #33! move a logic to auth-login
 */ 
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
