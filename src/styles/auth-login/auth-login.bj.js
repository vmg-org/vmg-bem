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
    elem: 'buttons',
    retry: 3,
    demo: true,
    content: ['_auth-button.bj.js', '_auth-pre-button.bj.js']
  }]
};
