module.exports = {
  block: 'bsp-row',
  content: [{
    block: 'bsp-col',
    mods: {
      md: 4,
      lg: 4
    },
    content: [{
      block: 'att-info-scope',
      demo: true,
      retry: 10,
      content: [{
        elem: 'item',
        mdl: 'episode_bid',
        content: [{
          block: 'att-info',
          content: [{
            elem: 'preview',
            tag: 'img' //clickable image to watch and moder a video
          }, {
            elem: 'moder-rating', // approved, banned, best etc.
            tag: 'span'
          }]
        }]
      }]
    }]
  }, {
    block: 'bsp-col',
    mods: {
      md: 8,
      lg: 8
    },
    content: [{
      block: 'att-content-scope',
      demo: true,
      retry: 1,
      content: [{
        elem: 'item',
        mdl: 'episode_bid',
        content: [{
          block: 'ratio16-9',
          content: [{
            elem: 'workspace',
            content: [{
              block: 'att-player',
              content: 'player'
            }]
          }]
        }, {
          block: 'att-manager',
          content: [{
            elem: 'fnc-good', // accessible if no moder_rating
            tag: 'button',
            content: '%=fncGoodVideo=%'
          }, {
            elem: 'fnc-bad', // accessible if no moder_rating
            tag: 'button',
            content: '%=fncBadVideo=%'
          }, {
            elem: 'fnc-best', // accessible for author if template is closed and no best video yet
            tag: 'button',
            content: '%=fncBestVideo=%'
          }]
        }]
      }]
    }]
  }]
};
