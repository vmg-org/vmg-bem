// approved att
module.exports = {
  block: 'att-info-2',
  mdl: 'episode_bid',
  content: [{
    elem: 'preview',
    tag: 'img', //clickable image to watch and moder a video
    attrs: {
      onclick: '{{fnc_play}}',
      src: '{{media_spec_item.preview_img_url}}'
    }
  }, {
    elem: 'moder-rating', // approved, banned, best etc.
    tag: 'span',
    content: '{{moder_rating_str}}'
  }, {
    elem: 'fnc-gold', // accessible for author if template is closed and no best video yet
    tag: 'button',
    attrs: {
      onclick: '{{fnc_rate_gold}}'
    },
    content: '%=gold=%'
  }, {
    elem: 'fnc-silver', // accessible for author if template is closed and no best video yet
    tag: 'button',
    attrs: {
      onclick: '{{fnc_rate_silver}}'
    },
    content: '%=silver=%'
  }, {
    elem: 'fnc-bronze', // accessible for author if template is closed and no best video yet
    tag: 'button',
    attrs: {
      onclick: '{{fnc_rate_bronze}}'
    },
    content: '%=bronze=%'
  }, {
    elem: 'fnc-rate-none',
    tag: 'button',
    attrs: {
      onclick: '{{fnc_rate_none}}'
    },
    content: '%=fncRateNone=%'
  }]
};
