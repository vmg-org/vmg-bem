module.exports = {
  block: 'movie-records-col',
  content: [{
    elem: 'header',
    content: '%=movieRecords=%'
  }, {
    elem: 'workspace',
    content: [{
      block: 'movie-records',
      demo: true,
      retry: 5,
      content: [{ // for demo - remove this content for production (will be replaced in JS) or retry for development
        elem: 'item',
        content: [
          '_movie-preview.bj.js'
        ]
      }]
    }]
  }]
};
