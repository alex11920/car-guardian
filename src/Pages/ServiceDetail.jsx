import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const service = services.find((service) => service?._id === id);
  return (
    <div>
      <h2>{service?._id}</h2>
    </div>
  );
};

export default ServiceDetail;
