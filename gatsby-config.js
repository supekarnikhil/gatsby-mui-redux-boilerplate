require("dotenv").config();

module.exports = {
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-react-helmet",
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    "gatsby-plugin-mui-emotion",
  ],
  siteMetadata: {
    title: process.env.SITE_NAME,
    homepage: process.env.SITE_HOME,
  },
};
