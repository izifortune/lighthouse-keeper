module.exports = {
  siteMetadata: {
        title: 'Lighthouse Keeper',
        description: `
Lighthouse Keeper helps you creating performance budgets based on
lighthouse reports audits from Google. You just select all the
reports that you are interested and your budget will be calculated.
No file is actually uploaded!`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
  ],
    pathPrefix: "/lighthouse-keeper"
}
