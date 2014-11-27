/**
 * A block for non-auth users
 *    show a button or text+icon to open an auth-login block
 * @todo #33! move a logic to auth-login
 */
module.exports = {
  block: 'auth-no',
  attrs: {
    onclick: '{{open_login_popup}}'
  },
  content: [{
    elem: 'icon',
    tag: 'span',
    content: '&#xe161;'
  }, {
    elem: 'welcome',
    tag: 'span',
    content: '%=login=%'
  }]
};
