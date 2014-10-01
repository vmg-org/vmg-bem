module.exports = {
  block: 'html',
  tag: 'html',
  bem: false,
  content: [{
    block: 'head',
    tag: 'head',
    bem: false,
    content: '_head.bemjson.js'
  }, {
    block: 'page',
    tag: 'body',
    content: [{
      elem: 'header',
      content: '_header.bemjson.js'
    }, {
      elem: 'workspace',
      content: [{
        block: 'grid',
        content: [{
          block: 'row',
          content: [{
            elem: 'col',
            mods: {
              mw: 8,
              sw: 12
            },
            content: [{
              block: 'movie-records-col',
              mix: {
                block: 'over-wrap'
              },
              content: [{
                elem: 'header',
                content: '%=movieRecords=%'
              }, {
                elem: 'workspace',
                content: [{
                  block: 'movie-records',
                  content: [{
                    elem: 'item',
                    content: [{
                      block: 'movie-preview',
                      content: [{
                        elem: 'watch',
                        content: [{
                          block: 'img-link',
                          attrs: {
                            href: './watch.html?asdf'
                          },
                          content: [{
                            elem: 'inner-img',
                            tag: 'img',
                            attrs: {
                              src: './css/img/movie-black.png'
                            }
                          }]
                        }]
                      }, {
                        elem: 'title',
                        content: 'Krepkiy oreshek'
                      }, {
                        elem: 'rating'
                      }]
                    }]
                  }, {
                    elem: 'item',
                    content: [{
                      block: 'movie-preview',
                      content: [{
                        elem: 'watch',
                        content: [{
                          block: 'img-link',
                          attrs: {
                            href: './watch.html?asdf'
                          },
                          content: [{
                            elem: 'inner-img',
                            tag: 'img',
                            attrs: {
                              src: './css/img/movie-black.png'
                            }
                          }]
                        }]
                      }, {
                        elem: 'title',
                        content: 'Krepkiy oreshek 2'
                      }, {
                        elem: 'rating'
                      }]
                    }]
                  }]

                  //              arr: [{
                  //                ttl: 'Movie preview image',
                  //                imgSrc: './css/img/movie-black.png',
                  //                linkHref: './watch.html?v=13453245'
                  //              }, {
                  //                ttl: 'Other movie preview',
                  //                imgSrc: './css/img/movie-black.png',
                  //                linkHref: './watch.html?v=12341324'
                  //              }]
                  //      block: 'movie-preview',
                  //      content: [{
                  //        elem: 'watch',
                  //        imgSrc: applyNext().imgSrc,
                  //        linkHref: applyNext().linkHref
                  //      }, {
                  //        elem: 'title',
                  //        content: applyNext().ttl
                  //      }, {
                  //        elem: 'rating'
                  //      }]
                }]
              }]
            }]
          }, {
            elem: 'col',
            mods: {
              mw: 4,
              sw: 12
            },
            content: [{
              block: 'best-templates-col',
              mix: {
                block: 'over-wrap'
              },
              content: [{
                elem: 'header',
                content: '%=movieTemplates=%'
              }, {
                elem: 'workspace',
                content: [{
                  block: 'best-templates',
                  arr: [{
                    ttl: 'Template preview',
                    imgSrc: './css/img/movie-black.png',
                    linkHref: './template.html?v=13453245'
                  }, {
                    ttl: 'Template preview',
                    imgSrc: './css/img/movie-black.png',
                    linkHref: './template.html?v=12341324'
                  }, {
                    ttl: 'Template preview',
                    imgSrc: './css/img/movie-black.png',
                    linkHref: './template.html?v=12341324'
                  }, {
                    ttl: 'Template preview',
                    imgSrc: './css/img/movie-black.png',
                    linkHref: './template.html?v=12341324'
                  }, {
                    ttl: 'Template preview',
                    imgSrc: './css/img/movie-black.png',
                    linkHref: './template.html?v=12341324'
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }, {
      elem: 'footer',
      content: '_footer.bemjson.js'
    }, {
      block: 'underground',
      bem: false,
      content: '_underground.bemjson.js'
    }, {
      block: 'jquery-script',
      tag: 'script',
      bem: false,
      attrs: {
        src: './lib/jquery.js'
      }
    }, {
      block: 'page-script',
      tag: 'script',
      bem: false,
      attrs: {
        src: './js/index-bundle.js'
      }
    }]
  }]
};