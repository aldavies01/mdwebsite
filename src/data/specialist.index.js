import { specialistDetails, specialistOrder } from "./specialist.details";

const slugToTitle = (slug) =>
  slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

function mapToIndex(slug, d, i) {
  if (!d) {
    if (typeof window !== "undefined") {
      console.warn(
        `[specialist.index] Missing details for slug "${slug}". Skipping.`
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
    image: image || "/images/specialist/placeholder.jpg",
    // HomeCard expects ciwRating (you can rename there if you prefer neutral naming)
    ciwRating: d.rating ?? "",
    specialties: Array.isArray(d.specialties) ? d.specialties : [],
    features: Array.isArray(d.features) ? d.features : [],
    images: Array.isArray(d.images) ? d.images : [],
  };
}

const slugs =
  Array.isArray(specialistOrder) && specialistOrder.length
    ? specialistOrder
    : Object.keys(specialistDetails).sort((a, b) => {
        const an = specialistDetails[a]?.name || slugToTitle(a);
        const bn = specialistDetails[b]?.name || slugToTitle(b);
        return an.localeCompare(bn);
      });

export const specialistHomes = slugs
  .map((slug, i) => mapToIndex(slug, specialistDetails[slug], i))
  .filter(Boolean);
