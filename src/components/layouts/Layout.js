import React from "react";
import PropTypes from "prop-types";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Header from "./Header";
import Footer from "./Footer";
import MetaTags from "../seo/MetaTags";

export default function Layout({ MetaData, children }) {
  return (
    <>
      <MetaTags {...MetaData} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Container component="main" fixed maxWidth="xl">
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  MetaData: PropTypes.objectOf(PropTypes.string).isRequired,
};
