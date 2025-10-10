// src/data/residential.index.js
import { residentialDetails, residentialOrder } from "./residential.details";

/** Optional: prettify a slug like "croft-house" -> "Croft House" */
const slugToTitle = (slug) =>
  slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

/** Map a full details object to the fields your grid/cards expect */
function mapToIndex(slug, d, i) {
  if (!d) {
    // If a slug is listed in residentialOrder but missing in residentialDetails
    if (typeof window !== "undefined" && window?.console) {
      console.warn(
        `[residential.index] Missing details for slug "${slug}". Skipping.`
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
    image: image || "/images/residential/placeholder.jpg",
    ciwRating: d.rating ?? "", // keep legacy prop name expected by HomeCard
    specialties: Array.isArray(d.specialties) ? d.specialties : [], // <-- always array
    features: Array.isArray(d.features) ? d.features : [], // <-- add this if HomeCard uses it
    images: Array.isArray(d.images) ? d.images : [],
  };
}

// Build the list in a controlled order, falling back to alpha by name
const slugs =
  Array.isArray(residentialOrder) && residentialOrder.length
    ? residentialOrder
    : Object.keys(residentialDetails || {}).sort((a, b) => {
        const an = residentialDetails?.[a]?.name || slugToTitle(a);
        const bn = residentialDetails?.[b]?.name || slugToTitle(b);
        return an.localeCompare(bn);
      });

export const residentialHomes = slugs
  .map((slug, i) => mapToIndex(slug, residentialDetails?.[slug], i))
  .filter(Boolean);
