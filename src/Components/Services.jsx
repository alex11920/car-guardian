import { useEffect, useState } from "react";
import { CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center space-y-4">
        <h1 className="text-2xl text-color font-bold">Service</h1>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="text-p max-w-2xl mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service._id}>
            <Link
              to={`/service/${service._id}`}
              className="card max-w-96 border my-12"
            >
              <figure className="px-6 pt-6">
                <img src={service.img} className="rounded-xl" />
              </figure>
              <div className="card-body">
                <h2 className="text-[#444] text-2xl font-bold">
                  {service.title}
                </h2>
                <div className="flex justify-between text-color">
                  <p className="text-xl font-semibold">
                    Price: ${service.price}
                  </p>
                  <CgArrowRight className="text-2xl"></CgArrowRight>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center">
        <span className="btn btn-outline border-[#FF3811] text-color hover:text-white hover:bg-[#FF3811] hover:border-[#FF3811]">
          More Services
        </span>
      </div>
    </div>
  );
};

export default Services;
