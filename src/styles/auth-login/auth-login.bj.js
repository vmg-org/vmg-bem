/**
 * Auth buttons, description, social providers
 *     No cancel button - there is a close button in a popup window
 */
module.exports = {
  block: 'auth-login',
  content: [{
    elem: 'header',
    content: 'Login'
  }, {
    elem: 'btn-wrap',
    content: [{
      elem: 'auth-button',
      tag: 'button',
      content: 'G+',
      elemMods: {
        social: 'goog'
      }
    }]
  }, {
    elem: 'btn-wrap',
    content: [{
      elem: 'auth-button',
      tag: 'button',
      content: 'FB',
      elemMods: {
        social: 'fb'
      }
    }]
  }, {
    elem: 'btn-wrap',
    content: [{
      elem: 'auth-button',
      tag: 'button',
      content: 'Dev',
      elemMods: {
        social: 'dev'
      }
    }]
  }]
};
