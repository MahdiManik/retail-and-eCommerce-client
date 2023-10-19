import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Sheared/AuthProvider/AuthProvider";

const PrivateRout = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
//  console.log(location);

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

PrivateRout.propTypes = {
  children: PropTypes.node,
};
export default PrivateRout;
