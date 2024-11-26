import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./Root.tsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import { SignUp } from "./pages/SignUp.tsx";
import { LogIn } from "./pages/LogIn.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { ServersAdd } from "./pages/ServersAdd.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import { ServerProvider } from "./context/ServersContext.tsx";
import { Servers } from "./pages/Servers.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthProvider>
            <ServerProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Root />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/auth/signup" element={<SignUp />} />
                            <Route path="/auth/login" element={<LogIn />} />
                            <Route element={<ProtectedRoute />}>
                                <Route path="/servers" element={<Servers />} />
                                <Route
                                    path="/servers/add"
                                    element={<ServersAdd />}
                                />
                                <Route
                                    path="/servers/:id"
                                    element={<h1>Info Server</h1>}
                                />
                                <Route
                                    path="/user/profile"
                                    element={<h1>User Profile</h1>}
                                />
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ServerProvider>
        </AuthProvider>
    </StrictMode>
);
