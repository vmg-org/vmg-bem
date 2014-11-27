/**
 * Popup wrap for login elements
 *    buttons to login through social providers
 *    possible: elements to login/register through project provider
 *    only wrap without content: without auth-login
 *    to possible existing auth-scope without a popup-wrap
 */
module.exports = {
  block: 'auth-popup',
  content: [{
    elem: 'space',
    content: [{
      elem: 'workspace',
      content: ['_auth-login.bj.js']
    }, {
      elem: 'close',
      content: [{
        elem: 'close-icon',
        content: '&#xe014;'
      }]
    }]
  }]
};
