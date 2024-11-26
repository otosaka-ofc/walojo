import React from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(): React.ReactElement {
    const { isAutenticated, loading } = useAuth();
    console.log(loading, isAutenticated)
    if(loading) return <div>LOADING</div>
    if (!loading && !isAutenticated) return <Navigate to="/auth/login" replace/>;
    return <Outlet />;
}
