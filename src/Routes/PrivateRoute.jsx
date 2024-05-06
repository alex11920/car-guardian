import { useContext } from "react";
import { AuthContext } from "../Controller/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (user?.email) {
    return children;
  }

  if (loading) {
    return (
      <div className="flex justify-center my-24">
        <progress className="progress w-56 "></progress>
      </div>
    );
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.object,
};
