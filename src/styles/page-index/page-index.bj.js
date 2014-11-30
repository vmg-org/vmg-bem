/**
 * Page index
 */
module.exports = {
  block: 'page-index',
  tag: 'body',
  content: [{
    elem: 'workspace',
    mix: {
      block: 'bsp-container'
    },
    content: [{
      elem: 'row',
      mix: {
        block: 'bsp-row'
      },
      content: [{
        elem: 'side-wrap',
        mix: {
          block: 'bsp-col',
          mods: {
            lg: 2,
            md: 2
          }
        }
      }, {
        elem: 'main-wrap',
        mix: {
          block: 'bsp-col',
          mods: {
            lg: 8,
            md: 8
          }
        },
        content: [{
          elem: 'app-name',
          tag: 'h1',
          content: 'ISNAPPY'
        }, {
          elem: 'app-desc',
          tag: 'p',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
          elem: 'fnc-login',
          tag: 'button',
          attrs: {
            onclick: 'window.app.showLoginChoice()'
          },
          content: 'Log in'
        }, {
          elem: 'fnc-explore',
          tag: 'a',
          attrs: {
            href: './explore.html'
          },
          content: 'Explore'
        }]
      }]
    }]
  }, {
    elem: 'footer',
    content: ['_license-info.bj.js']
  }, '_popup-scope.bj.js', {
    block: 'jquery-script',
    tag: 'script',
    bem: false,
    attrs: {
      src: './libs/jquery.js'
    }
  }, {
    block: 'page-script',
    tag: 'script',
    bem: false,
    attrs: {
      src: './js/index-bundle.js'
    }
  }]
};
