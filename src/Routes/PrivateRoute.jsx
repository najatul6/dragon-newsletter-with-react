import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

const PrivateRoute = (children) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <ProgressBar completed={60} />
        

    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;