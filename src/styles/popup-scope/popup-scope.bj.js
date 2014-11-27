/**
 * Scope of all popup windows on a page
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
  block: 'popup-scope',
  demo: true,
  retry: 1,
  content: ['_auth-popup.bj.js'] // and menu-popup TODO: #33! later
};
