module.exports = {
  siteMetadata: {
    title: `Hello Clean - aplikatory dezynfekujące w wariancie premium`,
    description: `Świeżość, higiena i pełen komfort w kilka chwil! Sprawdź jak łatwo można zadbać o czystość dłoni i nie tylko.`,
    author: `Karer Media`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#23395b`,
        theme_color: `#23395b`,
        display: `minimal-ui`,
        icon: `src/images/meta-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
