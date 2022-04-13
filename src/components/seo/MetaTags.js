import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

export default function MetaTags(props) {
  const {
    title,
    description,
    keywords,
    imageUrl,
    canonicalUrl,
    authorName,
    lang,
  } = props;
  return (
    <Helmet>
      <title>{title}</title>

      <link rel="canonical" href={canonicalUrl} />

      <meta property="title" content={title} />
      <meta property="description" content={description} />
      <meta property="keywords" content={keywords} />

      {imageUrl && <meta property="image" content={imageUrl} />}

      {authorName && <meta name="author" content={authorName} />}

      <meta property="og:locale" content={lang} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {imageUrl && <meta property="twitter:image" content={imageUrl} />}
    </Helmet>
  );
}

MetaTags.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  canonicalUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  authorName: PropTypes.string,
  lang: PropTypes.string,
};

MetaTags.defaultProps = {
  imageUrl: "",
  authorName: "",
  lang: "en_US",
};
