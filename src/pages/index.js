import * as React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../components/widgets/ProTip";
import Link from "../components/common/Link";
import Layout from "../components/layouts/Layout";

export default function Index({ data, location }) {
  const MetaData = {
    title: "Homepage",
    description: "This is my website",
    keywords: "my website",
    canonicalUrl: data.site.siteMetadata.homepage + location.pathname,
  };

  return (
    <Layout MetaData={MetaData}>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Gatsby example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
        </Box>
      </Container>
    </Layout>
  );
}

Index.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        homepage: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const postQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        homepage
      }
    }
  }
`;
