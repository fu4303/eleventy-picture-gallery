const cssMinFilter = require('./src/filters/css-min-filter.js');
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

module.exports = (config) => {

  const isProduction = process.env.NODE_ENV === 'production'
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform)
  }

  config.addFilter('cssmin', cssMinFilter)

  config.addPassthroughCopy('src/assets/favicon')

  config.setDataDeepMerge(true)

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    pathPrefix: isProduction ? '/eleventy-picture-gallery' : '',
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
