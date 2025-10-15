import { useParams } from "react-router-dom";
import ServiceDetailPage from "../components/service-detail/ServiceDetailPage";
import { residentialDetails } from "../data/residential.details";
import SEO from "../components/SEO";

// Small helper to pick a reliable OG image
function pickServiceImage(service) {
  if (!service) return "/images/og-image.jpg";
  return service.image || service.images?.[0] || "/images/og-image.jpg";
}

export default function ResidentialServiceRoute() {
  const { slug } = useParams();
  const service = residentialDetails[slug];

  const title = service?.name || "Residential Service";
  const description =
    service?.seoDescription ||
    `Learn more about ${title} at M&D Care — providing person-centred residential support across Wales.`;
  const image = pickServiceImage(service);
  const path = `/services/residential/${slug ?? ""}`;

  return (
    <>
      {/* ✅ Dynamic SEO with robust image fallback */}
      <SEO title={title} description={description} path={path} image={image} />

      {/* Page content */}
      <ServiceDetailPage slug={slug} detailsMap={residentialDetails} />
    </>
  );
}
