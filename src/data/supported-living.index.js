// src/data/supported-living.index.js
// Mirrors residential.index.js, but reads from supported-living.details
import {
  supportedLivingDetails,
  supportedLivingOrder,
} from "./supported-living.details";

/** Optional: prettify a slug like "independent-living-west" -> "Independent Living West" */
const slugToTitle = (slug) =>
  slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

/** Map a full details object to the fields your HomesGrid cards expect */
function mapToIndex(slug, d, i) {
  if (!d) {
    if (typeof window !== "undefined" && window?.console) {
      console.warn(
        `[supported-living.index] Missing details for slug "${slug}". Skipping.`
      );
    }
    return null;
  }

  const image = d.image || (Array.isArray(d.images) ? d.images[0] : "");

  return {
    id: d.id ?? i + 1,
    slug,
    name: d.name ?? slugToTitle(slug),
    address: d.address ?? "",
    description: d.description ?? "",
    capacity: d.capacity ?? "",
    established: d.established ?? "",
    image: image || "/images/residential/placeholder.jpg", // reuse placeholder
    ciwRating: d.rating ?? "",
    specialties: Array.isArray(d.specialties) ? d.specialties : [],
    features: Array.isArray(d.features) ? d.features : [],
    images: Array.isArray(d.images) ? d.images : [],
  };
}

// Build the list in a controlled order, falling back to alpha by name
const slugs =
  Array.isArray(supportedLivingOrder) && supportedLivingOrder.length
    ? supportedLivingOrder
    : Object.keys(supportedLivingDetails || {}).sort((a, b) => {
        const an = supportedLivingDetails?.[a]?.name || slugToTitle(a);
        const bn = supportedLivingDetails?.[b]?.name || slugToTitle(b);
        return an.localeCompare(bn);
      });

export const supportedLivingHomes = slugs
  .map((slug, i) => mapToIndex(slug, supportedLivingDetails?.[slug], i))
  .filter(Boolean);
