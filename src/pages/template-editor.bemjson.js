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
    attrs: {
      onkeyup: "app.hidePopupByEscape(this, event, 'menu-popup')",
      onload: "app.loadGenresOfMovie(this, event, 'movie-genres'); app.loadCrtEpisodes(this, event, 'crt-episodes');"
    },
    content: [{
      elem: 'header',
      content: '_header.bj.js'
    }, {
      elem: 'workspace',
      content: [{
        // page content
        block: 'bsp-container',
        content: [{
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
                  elem: 'inp-name',
                  tag: 'input',
                  attrs: {
                    autofocus: true,
                    placeholder: '%=movieNameFex=%',
                    onkeyup: 'app.checkInputNameOfTemplate(this)'
                      //  maxLength: '@@maxLength' // need models definitions for this purposes - if a model is changed - change auto
                  }
                }, {
                  elem: 'help-name',
                  tag: 'span',
                  content: [{
                    block: 'glyphicon',
                    tag: 'span',
                    mods: {
                      q: 'exclamation-sign'
                    }
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
                    required: true
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
                    elem: 'inp-name',
                    tag: 'input',
                    attrs: {
                      placeholder: '@@ph_name',
                      'data-bind': '@@order', // it is like value in radio button
                      onkeyup: "app.checkInputNameOfEpisode(this, event, 'crt-episode__help-name');"
                    }
                  }, {
                    elem: 'help-name',
                    tag: 'span',
                    content: [{
                      block: 'glyphicon',
                      tag: 'span',
                      mods: {
                        q: 'exclamation-sign'
                      }
                    }]
                  }, {
                    elem: 'inp-story',
                    tag: 'textarea',
                    attrs: {
                      placeholder: '@@ph_story',
                      'data-bind': '@@order',
                      onkeyup: "app.checkInputStoryOfEpisode(this, event, 'crt-episode__help-story');"
                    }
                  }, {
                    elem: 'help-story',
                    tag: 'span',
                    content: [{
                      block: 'glyphicon',
                      tag: 'span',
                      mods: {
                        q: 'exclamation-sign'
                      }
                    }]
                  }, {
                    elem: 'inp-conds',
                    tag: 'input',
                    attrs: {
                      placeholder: '@@ph_conds',
                      'data-bind': '@@order',
                      onkeyup: "app.checkInputCondsOfEpisode(this, event, 'crt-episode__help-conds');"
                    }
                  }, {
                    elem: 'help-conds',
                    tag: 'span',
                    content: [{
                      block: 'glyphicon',
                      tag: 'span',
                      mods: {
                        q: 'exclamation-sign'
                      }
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
                    content: '%=publishTemplate=%',
                    attrs: {
                      onclick: 'app.publishTemplate(this)'
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
