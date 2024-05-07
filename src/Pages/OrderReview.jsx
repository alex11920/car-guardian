import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Controller/AuthProvider";

const OrderReview = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  const url = `http://localhost:5000/checkout?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (_id) => {
    console.log(_id);
    const proceed = confirm("Are You sure want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/checkout/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted Successfully");
            const remaining = orders.filter((order) => order._id !== _id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div className="mb-24">
      <div
        className="hero min-h-60 rounded-xl mb-16"
        style={{
          backgroundImage: "url(https://i.ibb.co/6J45svw/order-Banner.png)",
        }}
      >
        <div className="hero-overlay bg-gradient-to-r from-black rounded-xl"></div>
        <div className="hero-content text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold pb-8">Manage All Orders</h1>
            <span className="px-6 py-2 bg-color rounded-lg">
              Home - Manage All Orders
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th className="w-14"></th>
            </tr>
          </thead>
          <tbody>
            {/* dynamic row */}
            {orders.map((order) => (
              <tr key={order._id}>
                <td>
                  <div>
                    <h2 className="text-xl text-color font-medium">
                      {order.name}
                    </h2>
                    <small className="text-p">{order.phone}</small>
                  </div>
                </td>
                <td>
                  <p className="italic">{order.email}</p>
                </td>
                <td>
                  <p>{order.date}</p>
                </td>
                <td className="flex flex-row gap-4 items-center">
                  <button className="btn btn-outline border-green-500 text-green-500 hover:bg-green-500 hover:border-none hover:text-white">
                    Approved
                  </button>
                  <button
                    onClick={() =>
                      document.getElementById(`my_modal_1_${order._id}`)
                      .showModal()
                    }
                    className="btn btn-outline btn-circle text-color border-[#ff3811] hover:bg-[#ff3811] hover:border-none hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <dialog id={`my_modal_1_${order._id}`} className="modal">
                    <div className="modal-box">
                      <p className="font-bold text-lg py-4">Are you sure want to delete?</p>
                      <div className="modal-action">
                        <form method="dialog">
                        <button
                          onClick={() => handleDelete(order._id)}
                          className="btn bg-color text-white"
                        >
                          Delete
                        </button>
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default OrderReview;
