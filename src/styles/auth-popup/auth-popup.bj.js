/**
 * Popup wrap for login elements
 *    buttons to login through social providers
 *    possible: elements to login/register through project provider
 *    only wrap without content: without auth-login
 *    to possible existing auth-scope without a popup-wrap
 *    Parent: Scope of all popup windows on a page
 *     All windows are not exist by default
 *     after generation through hbrs markup, 
 *     the window showed in this scope
 *     Clean a scope, when an user clicks Esc
 *     Every time a window must be regenerated
 *     yes, it is possible overhead, but
 *     better to generate every time by click, 
 *     then during app starting
 *     and attach events as strings
 */
module.exports = {
  block: 'auth-popup',
  attrs: {
    onclick: '{{fnc_close_auth_popup_out}}'
  },
  content: [{
    elem: 'space',
    content: [{
      elem: 'workspace',
      content: ['_auth-login.bj.js']
    }, {
      elem: 'close',
      attrs: {
        'onclick': '{{fnc_close_auth_popup}}'
      },
      content: [{
        elem: 'close-icon',
        content: '&#xe014;'
      }]
    }]
  }]
};
