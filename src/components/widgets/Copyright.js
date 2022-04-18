import * as React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Link from "../common/Link";

export default function Copyright({ siteTitle }) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        {siteTitle}
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

Copyright.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};
