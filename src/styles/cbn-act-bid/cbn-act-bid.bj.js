module.exports = {
  block: 'cbn-act-bid',
  mdl: 'episode_bid',
  content: [{
    elem: 'fnc-upload',
    tag: 'button',
    attrs: {
      onclick: '{{fnc_act_bid_upload}}'
    },
    content: '{{lbl_act_bid_upload}}'
  }, {
    elem: 'fnc-cancel',
    tag: 'button',
    attrs: {
      onclick: '{{fnc_act_bid_cancel}}'
    },
    content: '{{lbl_act_bid_cancel}}'
  }]
};
