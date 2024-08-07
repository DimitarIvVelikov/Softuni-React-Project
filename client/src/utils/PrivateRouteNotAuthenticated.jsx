import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
export default function PrivateRouteNotAuthenticate() {
  const { isAuthenticated } = useAuthContext();

  return <>{!isAuthenticated ? <Outlet /> : <Navigate to="/" />}</>;
}
