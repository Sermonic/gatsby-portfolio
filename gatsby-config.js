module.exports = {
  siteMetadata: {
    title: "Vitaliy Shcherbanych Portfolio",
    description: "This is Vitaliy Shcherbanych Portfolio Site",
    author: "Vitaliy Shcherbanych <vitaliyshcherbanych@gmail.com>",
    twitterUsername: "@werbaniz",
    image: "/1.png",
    siteUrl: "https://vshcherbanych.netlify.app/",
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
  ],
}
