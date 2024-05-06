import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Controller/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/services/${id}`);
        const data = await response.json();
        setServiceData(data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServiceData();
  }, [id]);

  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const date = form.date.value;
    const message = form.message.value;
    const userEmail = user?.email;
    const serviceID = serviceData?.service_id;
    const serviceTitle = serviceData?.title;
    const servicePrice = serviceData?.price;
    const order = {
      name,
      phone,
      date,
      email,
      message,
      userEmail,
      serviceID,
      serviceTitle,
      servicePrice,
    };

    console.log(order);

    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Thank you for booking!");
        }
        form.reset();
      });
  };

  return (
    <div className="space-y-24 mb-24">
      <div
        className="hero min-h-60 rounded-xl "
        style={{
          backgroundImage: "url(https://i.ibb.co/g32mbDJ/checkout.png)",
        }}
      >
        <div className="hero-overlay bg-gradient-to-r from-black rounded-xl"></div>
        <div className="hero-content text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold pb-8">Check Out</h1>
            <span className="px-6 py-2 bg-color rounded-lg">Home/Checkout</span>
          </div>
        </div>
      </div>

      {/* form  */}
      <div className="card shrink-0 w-full rounded-none bg-[#F3F3F3] px-24 py-6">
        <form
          onSubmit={handleCheckOut}
          className="card-body grid lg:grid-cols-2 gap-6"
        >
          {serviceData && (
            <div className="card-body pt-12 col-span-2">
              <h2 className="text-4xl font-semibold mb-8">Service Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="text-lg font-semibold">Service ID:</label>
                  <p className="text-xl">{serviceData?.service_id}</p>
                </div>
                <div className="form-control">
                  <label className="text-lg font-semibold">Title:</label>
                  <p className="text-xl">{serviceData?.title}</p>
                </div>
              </div>
            </div>
          )}
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input w-full"
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="input w-full"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              required
              className="input w-full"
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              name="date"
              placeholder=""
              required
              className="input w-full"
            />
          </div>
          <div className="form-control col-span-2">
            <textarea
              className="textarea text-base"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="form-control col-span-2 mb-16">
            <button className="btn text-base bg-[#FF3811] border-[#FF3811] text-white hover:text-[#FF3811] hover:bg-white hover:border-[#FF3811]">
              Order Confirm
            </button>
          </div>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Checkout;
