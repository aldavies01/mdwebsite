import { useParams } from "react-router-dom";
import ServiceDetailPage from "../components/service-detail/ServiceDetailPage";
import { supportedLivingDetails } from "../data/supported-living.details";

export default function SupportedLivingServiceRoute() {
  const { slug } = useParams();
  return <ServiceDetailPage slug={slug} detailsMap={supportedLivingDetails} />;
}
