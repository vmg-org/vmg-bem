module.exports = {
  block: 'att-info-0',
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
    elem: 'fnc-good', // accessible if no moder_rating
    tag: 'button',
    attrs: {
      onclick: '{{fnc_rate_good}}'
    },
    content: '%=fncGoodVideo=%'
  }, {
    elem: 'fnc-bad', // accessible if no moder_rating
    tag: 'button',
    attrs: {
      onclick: '{{fnc_rate_bad}}'
    },
    content: '%=fncBadVideo=%'
  }]
};
