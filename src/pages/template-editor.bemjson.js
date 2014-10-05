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
                    required: true,
                    placeholder: '%=movieNameFex=%'
                      //  maxLength: '@@maxLength' // need models definitions for this purposes - if a model is changed - change auto
                  }
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
                          name: 'movie-genre-radio'
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
                block: 'crt-episode',
                content: [{
                  elem: 'header',
                  content: '%=episode1=%'
                }, {
                  elem: 'inp-name',
                  tag: 'input',
                  attrs: {
                    required: true,
                    placeholder: '%=episode1Name=%'
                  }
                }, {
                  elem: 'inp-story',
                  tag: 'textarea',
                  attrs: {
                    required: true,
                    placeholder: '%=episode1Story=%'
                  }
                }, {
                  elem: 'inp-conditions',
                  tag: 'input',
                  attrs: {
                    required: true,
                    placeholder: '%=episode1Conditions=%'
                  }
                }]
              }, {
                block: 'crt-episode',
                content: [{
                  elem: 'header',
                  content: '%=episode2=%'
                }, {
                  elem: 'inp-name',
                  tag: 'input',
                  attrs: {
                    required: true,
                    placeholder: '%=episode2Name=%'
                  }
                }, {
                  elem: 'inp-story',
                  tag: 'textarea',
                  attrs: {
                    required: true,
                    placeholder: '%=episode2Story=%'
                  }
                }, {
                  elem: 'inp-conditions',
                  tag: 'input',
                  attrs: {
                    required: true,
                    placeholder: '%=episode2Conditions=%'
                  }
                }]
              }, {
                block: 'crt-episode',
                content: [{
                  elem: 'header',
                  content: '%=episode3=%'
                }, {
                  elem: 'inp-name',
                  tag: 'input',
                  attrs: {
                    required: true,
                    placeholder: '%=episode3Name=%'
                  }
                }, {
                  elem: 'inp-story',
                  tag: 'textarea',
                  attrs: {
                    required: true,
                    placeholder: '%=episode3Story=%'
                  }
                }, {
                  elem: 'inp-conditions',
                  tag: 'input',
                  attrs: {
                    required: true,
                    placeholder: '%=episode3Conditions=%'
                  }
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
                    content: '%=publishTemplate=%'
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
