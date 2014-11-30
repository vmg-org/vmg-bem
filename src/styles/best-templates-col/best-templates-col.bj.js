module.exports = {
  block: 'best-templates-col',
  content: [{
    elem: 'header',
    content: '%=movieTemplates=%'
  }, {
    elem: 'workspace',
    content: [{
      block: 'best-templates',
      demo: true,
      retry: 5,
      content: [{
        elem: 'item',
        content: [
          '_template-preview.bj.js'
        ]
      }]
    }]
  }]
};
