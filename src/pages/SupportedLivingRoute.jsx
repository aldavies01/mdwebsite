import { useParams } from "react-router-dom";
import ServiceDetailPage from "../components/service-detail/ServiceDetailPage";
import { supportedLivingDetails } from "../data/supported-living.details";
import SEO from "../components/SEO";

// Small helper to pick a reliable OG image
function pickServiceImage(service) {
  if (!service) return "/images/og-image.jpg";
  return service.image || service.images?.[0] || "/images/og-image.jpg";
}

export default function SupportedLivingServiceRoute() {
  const { slug } = useParams();
  const service = supportedLivingDetails[slug];

  const title = service?.name || "Supported Living Service";
  const description =
    service?.seoDescription ||
    `Learn more about ${title} at M&D Care — empowering individuals to live independently with personalised, person-centred support across Wales.`;
  const image = pickServiceImage(service);
  const path = `/services/supported-living/${slug ?? ""}`;

  return (
    <>
      {/* ✅ Dynamic SEO with robust image fallback */}
      <SEO title={title} description={description} path={path} image={image} />

      {/* Page content */}
      <ServiceDetailPage slug={slug} detailsMap={supportedLivingDetails} />
    </>
  );
}
