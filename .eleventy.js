module.exports = (config) => {
  // css and favicon
  config.addPassthroughCopy('./src/css')
  config.addPassthroughCopy('./src/favicon')

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
