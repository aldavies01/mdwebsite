import { useParams } from "react-router-dom";
import ServiceDetailPage from "../components/service-detail/ServiceDetailPage";
import { residentialDetails } from "../data/residential.details";

export default function ResidentialServiceRoute() {
  const { slug } = useParams();
  return <ServiceDetailPage slug={slug} detailsMap={residentialDetails} />;
}
