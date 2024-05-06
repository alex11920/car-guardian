import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const service = services.find((service) => service?._id === id);
  return (
    <div className="space-y-8 mb-24">
      <img
        src={service?.img}
        className="object-cover object-left-bottom w-full h-96"
      />
      <h2 className="text-4xl font-bold">{service?.title}</h2>
      <p className="text-p">{service?.description}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {service.facility.map((facility, idx) => (
          <div key={idx}>
            <div className="card-body bg-[#F3F3F3] rounded-xl border-t-2 border-t-[#FF3811]">
              <h4 className="text-xl font-bold">{facility.name}</h4>
              <p className="text-p">{facility.details}</p>
            </div>
          </div>
        ))}
      </div>
      <hr />

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Price: <span className="text-color">${service?.price}</span>
        </h2>
        <Link to={`/checkout/${service._id}`}>
          <button className="btn px-32 text-lg bg-[#FF3811] border-[#FF3811] text-white hover:text-[#FF3811] hover:bg-white hover:border-[#FF3811]">
            Proceed Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
