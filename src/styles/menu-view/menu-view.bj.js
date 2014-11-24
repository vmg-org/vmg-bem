/**
 * Menu list and header and other tools
 *    separated from menu-popup to possible existing without a popup window
 */
module.exports = {
  block: 'menu-view',
  content: [{
    elem: 'header',
    content: '%=menuTitle=%'
  }, {
    elem: 'list',
    content: 'super list with apps'
  }]
};
