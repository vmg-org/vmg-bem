/**
 * Popup wrap for menu view
 *    undeground blocks with highest z-index
 *    a close button after main view - to highest index priority
 *    a menu-popup class to open with JS and styles
 */
module.exports = {
  block: 'menu-popup',
  attrs: {
    onclick: '{{fnc_hide_popup_if_out}}'
  },
  content: [{
    elem: 'space',
    content: ['_menu-view.bj.js', {
      elem: 'close',
      content: [{
        elem: 'close-icon',
        tag: 'span',
        attrs: {
          'onclick': '{{fnc_hide_popup}}'
        },
        content: '&#xe014;'
      }]
    }]
  }]
};
