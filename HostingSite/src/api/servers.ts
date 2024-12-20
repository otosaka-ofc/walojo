import { Server } from "../context/ServersContext";
import axios from "./axios";

export const getServersRequest = () => axios.get("/servers");
export const getServerRequest = (id: string) => axios.get(`/servers/${id}`);
export const createServerRequest = (server: unknown) =>
    axios.post("/servers/add", server);
export const updateServerRequest = (server: Partial<Server>) =>
    axios.put(`/servers/${server._id}`, server);
export const dropServerRequest = (id: string) => axios.delete(`/servers/${id}`);
