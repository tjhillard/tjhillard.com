require('dotenv').config();

module.exports = {
  siteMetadata: {
    author: 'TJ Hillard',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        strict: true,
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
};
