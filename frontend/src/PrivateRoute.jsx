import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function PrivateRoute() {
    const { token } = useAuth()
   
    if(!token) return <Navigate to="/login" />
    return <Outlet />
}

export default PrivateRoute;