import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function PrivateRoute() {
    const { token } = useAuth()
   
    if(!token) <Navigate to="/login" />
    else return <Outlet />
}

export default PrivateRoute;