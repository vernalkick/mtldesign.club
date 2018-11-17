module.exports = {
  siteMetadata: {
    title: 'Montréal Design Club'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#1F1F1F',
        theme_color: '#1F1F1F',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /assets\/images\/svg/
          }
      }
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-yaml-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        // ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
}
