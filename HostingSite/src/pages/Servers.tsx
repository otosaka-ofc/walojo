import { useEffect } from "react";
import { Server, useServers } from "../context/ServersContext";
import ServerCard from "../components/ServerCard";

export const Servers = () => {
    const { servers, getServers } = useServers();

    useEffect(() => {
        getServers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="mt-40 grid grid-cols-3 gap-3 me-20 ms-20 mb-5">
            {servers.map((server: Server) => (
                <ServerCard server={server} key={server._id} />
            ))}
        </div>
    );
};
