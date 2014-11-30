/**
 * Icon to open a popup-menu
 *     full-icon: to bind a click event
 *     call-icon: to draw an icon
 */
module.exports = {
  block: 'menu-call',
  content: [{
    elem: 'full-icon',
    attrs: {
      // attached manually insteead generating a template
      onclick: 'app.showMenuChoice()'
    },
    tag: 'span',
    content: [{
      elem: 'call-icon',
      tag: 'span',
      content: '&#xe011'
    }]
  }]
};
