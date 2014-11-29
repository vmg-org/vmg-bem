/**
 * User profile, with logout function
 */
module.exports = {
  block: 'auth-profile',
  content: [{
    elem: 'logout', // and settings for example
    attrs: {
      title: '{{lbl_logout}}',
      onclick: '{{fnc_logout}}'
    },
    content: [{
      elem: 'logout-icon',
      content: '&#xe163;'
    }]
  }, {
    elem: 'display-name-link',
    tag: 'a',
    attrs: {
      href: '{{link_cabinet}}'
    },
    content: [{
      elem: 'display-name',
      tag: 'span',
      content: '{{display_name}}' // and @@photo_url for example
    }]
  }, {
    elem: 'link-to-upload',
    tag: 'a',
    attrs: {
      href: '{{link_create_template}}'
    },
    content: '{{lbl_create_template}}'
  }]
};
