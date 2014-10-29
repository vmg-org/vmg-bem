module.exports = {
  block: 'html',
  tag: 'html',
  bem: false,
  content: [{
    block: 'head',
    tag: 'head',
    bem: false,
    content: '_head.bj.js'
  }, {
    block: 'page',
    tag: 'body',
    content: [{
      elem: 'header',
      content: '_header.bj.js'
    }, {
      elem: 'workspace',
      content: [{
        block: 'bsp-container',
        content: ['_notif-row.bj.js', {
          block: 'bsp-row',
          content: [{
            block: 'bsp-col',
            mods: {
              md: 4,
              sm: 12
            },
            content: [{
              block: 'over-wrap',
              content: [{
                block: 'crt-movie-template',
                content: [{
                  elem: 'header',
                  content: '%=myMovieTemplate=%'
                }, {
                  elem: 'inp-name-wrap',
                  content: [{
                    elem: 'inp-name',
                    tag: 'input',
                    attrs: {
                      autofocus: true,
                      placeholder: '%=movieNameFex=%',
                      onkeyup: "app.checkInputNameOfTemplate(this, event, 'crt-movie-template__help-name')"
                        //  maxLength: '@@maxLength' // need models definitions for this purposes - if a model is changed - change auto
                    }
                  }, {
                    elem: 'help-name',
                    tag: 'span',
                    attrs: {
                      onclick: "app.showTipNameOfTemplate(this, event, 'crt-movie-template__tooltip-name');"
                    },
                    content: [{
                      block: 'glyphicon',
                      tag: 'span',
                      mods: {
                        q: 'exclamation-sign'
                      }
                    }]
                  }, {
                    elem: 'tooltip-name',
                    content: [{
                      block: 'tooltip',
                      content: 'Max length: 50<br>Min length: 3' // get it from JS in perfect world
                    }]
                  }]
                }, {
                  elem: 'genre',
                  content: '%=genreOfMovie=%'
                }, {
                  elem: 'inp-genre',
                  content: [{
                    block: 'movie-genres',
                    demo: true,
                    retry: 5,
                    content: [{
                      elem: 'item',
                      tag: 'label',
                      content: [{
                        elem: 'checker',
                        tag: 'input',
                        attrs: {
                          type: 'radio',
                          name: 'movie-genre-radio',
                          value: '@@genre_id',
                          onclick: "app.onSelectGenre(this, event, 'hero-scope', 'animal-scope')" // send all possible elements, which triggered
                        }
                      }, {
                        elem: 'name',
                        tag: 'span',
                        content: '@@genre_name'
                      }, {
                        elem: 'icon',
                        tag: 'span',
                        attrs: {
                          style: '@@genre_icon_style'
                        },
                        content: [{
                          block: 'glyphicon',
                          tag: 'span',
                          mods: {
                            q: 'tag'
                          }
                        }]
                      }]
                    }]
                  }]
                }, {
                  elem: 'duration-of-episodes',
                  content: '%=durationOfEpisodes=%'
                }, {
                  elem: 'inp-duration-of-episodes',
                  tag: 'select',
                  attrs: {
                    required: true,
                    onchange: 'app.onChangeDurationOfEpisodes(this, event);'
                  },
                  content: [{
                    elem: 'c15',
                    bem: false,
                    tag: 'option',
                    content: '15'
                  }, {
                    elem: 'c30',
                    bem: false,
                    tag: 'option',
                    content: 30
                  }]
                }, {
                  elem: 'slc-preview-img',
                  content: '%=selectAPreviewImg=%'
                }, {
                  elem: 'inp-preview-img',
                  tag: 'input',
                  attrs: {
                    type: 'file'
                  }
                }]
              }]
            }, {
              block: 'over-wrap',
              content: [{
                block: 'hero-scope',
                content: [{
                  elem: 'header',
                  content: '%=pickColorsForHero=%'
                }, {
                  elem: 'color-picker',
                  content: 'a template image with hero'
                }]
              }]
            }, {
              block: 'over-wrap',
              content: [{
                block: 'animal-scope',
                content: [{
                  elem: 'header',
                  content: '%=pickColorsForAnimal=%'
                }, {
                  elem: 'color-picker',
                  content: 'images with animals'
                }]
              }]
            }]
          }, {
            block: 'bsp-col',
            mods: {
              md: 8,
              sm: 12
            },
            content: [{
              block: 'over-wrap',
              content: [{
                block: 'crt-episodes',
                demo: true,
                retry: 3,
                mdl: 'crt_episode',
                content: [{
                  block: 'crt-episode',
                  content: [{
                    elem: 'header',
                    content: '@@name_order'
                  }, {
                    elem: 'inp-name-wrap',
                    content: [{
                      elem: 'inp-name',
                      tag: 'input',
                      attrs: {
                        placeholder: '@@ph_name',
                        'data-bind': '@@order', // it is like value in radio button
                        onkeyup: "app.checkInputNameOfEpisode(this, event, 'crt-episode__help-name');",
                        value: '@@name'
                      }
                    }, {
                      elem: 'help-name',
                      tag: 'span',
                      attrs: {
                        onclick: "app.showTipNameOfEpisode(this, event, 'crt-episode__tooltip-name')",
                        'data-bind': '@@order'
                      },
                      content: [{
                        block: 'glyphicon',
                        tag: 'span',
                        mods: {
                          q: 'exclamation-sign'
                        }
                      }]
                    }, {
                      elem: 'tooltip-name',
                      content: [{
                        block: 'tooltip',
                        content: '@@tooltip_name'
                      }]
                    }]
                  }, {
                    elem: 'inp-story-wrap',
                    content: [{
                      elem: 'inp-story',
                      tag: 'textarea',
                      attrs: {
                        placeholder: '@@ph_story',
                        'data-bind': '@@order',
                        onkeyup: "app.checkInputStoryOfEpisode(this, event, 'crt-episode__help-story');"
                      },
                      content: '@@story'
                    }, {
                      elem: 'help-story',
                      tag: 'span',
                      attrs: {
                        onclick: "app.showTipStoryOfEpisode(this, event, 'crt-episode__tooltip-story')",
                        'data-bind': '@@order'
                      },
                      content: [{
                        block: 'glyphicon',
                        tag: 'span',
                        mods: {
                          q: 'exclamation-sign'
                        }
                      }]
                    }, {
                      elem: 'tooltip-story',
                      content: [{
                        block: 'tooltip',
                        content: '@@tooltip_story'
                      }]
                    }]
                  }, {
                    elem: 'inp-conds-wrap',
                    content: [{
                      elem: 'inp-conds',
                      tag: 'input',
                      attrs: {
                        placeholder: '@@ph_conds',
                        'data-bind': '@@order',
                        onkeyup: "app.checkInputCondsOfEpisode(this, event, 'crt-episode__help-conds');",
			value: '@@conds'
                      }
                    }, {
                      elem: 'help-conds',
                      tag: 'span',
                      attrs: {
                        onclick: "app.showTipCondsOfEpisode(this, event, 'crt-episode__tooltip-conds')",
                        'data-bind': '@@order'
                      },
                      content: [{
                        block: 'glyphicon',
                        tag: 'span',
                        mods: {
                          q: 'exclamation-sign'
                        }
                      }]
                    }, {
                      elem: 'tooltip-conds',
                      content: [{
                        block: 'tooltip',
                        content: '@@tooltip_conds'
                      }]
                    }]
                  }]
                }]
              }]
            }, {
              block: 'over-wrap',
              content: [{
                block: 'crt-template-saving',
                content: [{
                  elem: 'approving-label',
                  tag: 'label',
                  content: [{
                    elem: 'approving-check',
                    tag: 'input',
                    attrs: {
                      type: 'checkbox'
                    }
                  }, {
                    elem: 'approving-text',
                    tag: 'span',
                    content: '%=iAgreeToPublishTemplate=%'
                  }, {
                    elem: 'cancel-btn',
                    tag: 'button',
                    content: '%=cancelTemplate=%'
                  }, {
                    elem: 'saving-btn',
                    tag: 'button',
                    content: '%=saveTemplate=%',
                    attrs: {
                      onclick: "app.createTemplate(this, event, 'notif-wrap__notif')"
                    }
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }, {
      elem: 'footer',
      content: '_footer.bj.js'
    }, {
      block: 'underground',
      bem: false,
      content: '_underground.bj.js'
    }, {
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
        src: './js/template-editor-bundle.js'
      }
    }]
  }]
};
