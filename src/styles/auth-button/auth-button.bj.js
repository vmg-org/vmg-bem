/**
 * Block with button for social authentication
 *     button content: 'c' // b (fb) or c (google) or i (dev)
 */
module.exports = {
  block: 'auth-button',
  content: [{
    elem: 'button',
    tag: 'button',
    attrs: {
      onclick: '{{fnc_start_auth}}'
    },
    content: [{
      elem: 'lbl',
      tag: 'span',
      content: '{{login_with}}'
    }, {
      elem: 'icon',
      tag: 'span',
      content: '{{icon_key}}'
    }]
  }]
};
