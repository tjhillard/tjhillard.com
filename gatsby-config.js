require('dotenv').config();

module.exports = {
  siteMetadata: {
    author: 'TJ Hillard',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-remark-external-links',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        strict: true,
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
  ],
};
