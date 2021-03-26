/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        preset: require('./src/theme.ts'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Likewise Invest`,
        short_name: `Likewise`,
        description: `The solution to debtor insolvancy`,
        lang: `en`,
        display: `standalone`,
        icon: `static/favicon.png`,
        start_url: `/`,
        background_color: `#008c5a`,
      },
    },
  ],
}
