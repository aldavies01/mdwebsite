import { useParams } from "react-router-dom";
import ServiceDetailPage from "../components/service-detail/ServiceDetailPage";
import { specialistDetails } from "../data/specialist.details";

export default function SpecialistServiceRoute() {
  const { slug } = useParams();
  return <ServiceDetailPage slug={slug} detailsMap={specialistDetails} />;
}
