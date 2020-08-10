const pluginRss = require('@11ty/eleventy-plugin-rss')
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

module.exports = (config) => {
  config.addPlugin(pluginRss)

  const isProduction = process.env.NODE_ENV === 'production'
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform)
  }

  config.addPassthroughCopy('src/assets/css')
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
