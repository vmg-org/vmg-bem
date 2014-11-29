module.exports = {
  block: 'site-header', // bsp-container
  mix: {
    block: 'bsp-container'
  },
  content: [{
    elem: 'row',
    mix: {
      block: 'bsp-row'
    },
    content: [{
      elem: 'col-logo',
      mix: {
        block: 'bsp-col',
        mods: {
          lg: 4,
          md: 4
        }
      },
      content: [{
        elem: 'call-logo-wrap',
        content: [{
          elem: 'logo-wrap',
          content: ['_vmg-logo.bj.js']
        }, {
          elem: 'call-wrap',
          content: ['_menu-call.bj.js']
        }]
      }]
    }, {
      elem: 'col-search',
      mix: {
        block: 'bsp-col',
        mods: {
          lg: 4,
          md: 4
        }
      },
      content: [{
        block: 'vmg-search'
      }]
    }, {
      elem: 'col-auth',
      mix: {
        block: 'bsp-col',
        mods: {
          lg: 4,
          md: 4
        }
      },
      content: [{
        elem: 'auth-wrap',
        content: [{
          elem: 'auth-no-wrap', // if user is not auth - add content here
          demo: true,
          retry: 1,
          content: ['_auth-no.bj.js']
        }, {
          elem: 'auth-yes-wrap', // if user is auth - add content here
          demo: true,
          retry: 1,
          content: ['_auth-profile.bj.js']
        }]
      }]
    }]
  }]
};
