import { useParams } from "react-router-dom";
import ServiceDetailPage from "../components/service-detail/ServiceDetailPage";
import { specialistDetails } from "../data/specialist.details";
import SEO from "../components/SEO";

// Small helper to pick a reliable OG image
function pickServiceImage(service) {
  if (!service) return "/images/og-image.jpg";
  return service.image || service.images?.[0] || "/images/og-image.jpg";
}

export default function SpecialistServiceRoute() {
  const { slug } = useParams();
  const service = specialistDetails[slug];

  const title = service?.name || "Specialist Care Service";
  const description =
    service?.seoDescription ||
    `Learn more about ${title} at M&D Care — delivering specialist, person-centred support across Wales.`;
  const image = pickServiceImage(service);
  const path = `/services/specialist-care/${slug ?? ""}`;

  return (
    <>
      {/* ✅ Dynamic SEO with robust image fallback */}
      <SEO title={title} description={description} path={path} image={image} />

      {/* Page content */}
      <ServiceDetailPage slug={slug} detailsMap={specialistDetails} />
    </>
  );
}
