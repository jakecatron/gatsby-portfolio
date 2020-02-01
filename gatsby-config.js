module.exports = {
  siteMetadata: {
    title: `Jake Catron | Front-End Developer`,
    description: `My slice of the internet.`,
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JakeCatron`,
        short_name: `JakeCatron`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },  
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
           
          `montserrat`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
          `orbitron`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-157140117-1`,
        head: true
      },
    },
  ],
}