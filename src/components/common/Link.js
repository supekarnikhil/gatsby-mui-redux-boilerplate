import * as React from "react";
import MuiLink from "@mui/material/Link";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

const Link = React.forwardRef(function Link(props, ref) {
  return (
    <MuiLink to={props.href} component={GatsbyLink} ref={ref} {...props} />
  );
});

Link.propTypes = {
  href: PropTypes.string.isRequired,
};
export default Link;
