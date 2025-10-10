import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "./Icon"; // sibling of HomeCard.jsx

export default function HomeCard({
  home,
  linkPrefix = "/services/residential",
}) {
  if (!home) return null;

  const {
    slug,
    name = "Unnamed Home",
    address = "",
    description = "",
    image,
    images = [],
    ciwRating = "",
    capacity = "",
    established = "",
    specialties = [],
    features = [],
  } = home;

  // prefer explicit image, then first in array; if none -> null (so we can show fallback)
  const primaryImage = image || images[0] || null;

  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(primaryImage) && !imgError;

  const topSpecialties = (Array.isArray(specialties) ? specialties : []).slice(
    0,
    3
  );

  const ratingBadge =
    ciwRating === "Excellent"
      ? "bg-green-600 text-white"
      : ciwRating === "Good"
        ? "bg-blue-600 text-white"
        : ciwRating === "Requires Improvement"
          ? "bg-yellow-600 text-white"
          : "bg-gray-600 text-white";

  // Use prefix to tint the fallback icon
  const isSpecialist = linkPrefix.includes("specialist");
  const iconColorClass = isSpecialist
    ? "text-secondary-purple"
    : "text-secondary-coral";
  const iconBgClass = "bg-gray-100";

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56">
        {hasImage ? (
          <img
            src={primaryImage}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`w-full h-full ${iconBgClass} flex items-center justify-center`}
          >
            <Icon
              name="home"
              className={`w-14 h-14 ${iconColorClass} opacity-70`}
            />
          </div>
        )}

        {ciwRating ? (
          <span
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${ratingBadge}`}
          >
            CIW Environment Rating:&nbsp;{ciwRating}
          </span>
        ) : null}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-navy mb-1">{name}</h3>

        {address ? (
          <p className="text-sm text-gray-500 mb-3">{address}</p>
        ) : null}

        {description ? (
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        ) : null}

        {topSpecialties.length > 0 ? (
          <div className="flex flex-wrap gap-2 mb-4">
            {topSpecialties.map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="bg-secondary-coral/10 text-secondary-coral px-3 py-1 rounded-full text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
          {capacity ? (
            <span className="inline-flex items-center gap-1">
              <svg
                className="w-4 h-4 text-secondary-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              {capacity}
            </span>
          ) : null}
          {established ? (
            <span className="inline-flex items-center gap-1">
              <svg
                className="w-4 h-4 text-secondary-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              Est. {established}
            </span>
          ) : null}
        </div>

        {slug ? (
          <Link
            to={`${linkPrefix}/${slug}`}
            className="inline-flex items-center gap-2 text-secondary-coral font-semibold hover:opacity-90"
          >
            View details →
          </Link>
        ) : null}
      </div>
    </div>
  );
}

HomeCard.propTypes = {
  home: PropTypes.shape({
    slug: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    ciwRating: PropTypes.string,
    capacity: PropTypes.string,
    established: PropTypes.string,
    specialties: PropTypes.arrayOf(PropTypes.string),
    features: PropTypes.arrayOf(PropTypes.string),
  }),
  linkPrefix: PropTypes.string,
};
