import PropTypes from "prop-types";
import { useHead } from "../lib/useHead";

export default function SEO({
  title,
  description,
  path = "",
  image, // optional now
}) {
  const siteUrl = "https://manddcare.co.uk";
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = title
    ? `${title} | M&D Care`
    : "M&D Care | Specialist Adult Social Care Across Wales";

  // Base meta tags
  const metaTags = [
    { name: "description", content: description },

    // Open Graph
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: fullUrl },
    { property: "og:type", content: "website" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];

  // Only add image tags if one is provided
  if (image) {
    const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
    metaTags.push({ property: "og:image", content: imageUrl });
    metaTags.push({ name: "twitter:image", content: imageUrl });
  }

  useHead({
    title: fullTitle,
    meta: metaTags,
    links: [{ rel: "canonical", href: fullUrl }],
  });

  return null; // nothing to render in the DOM
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string,
  image: PropTypes.string, // now optional
};
