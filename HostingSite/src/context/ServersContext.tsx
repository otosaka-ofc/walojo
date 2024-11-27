import { createContext, ReactElement, useContext, useState } from "react";
import {
    createServerRequest,
    dropServerRequest,
    getServersRequest,
    updateServerRequest,
} from "../api/servers";

export interface Server {
    _id: string;
    name: string;
    description: string;
    os: number;
    ram: string;
    cpu: string;
    active?: boolean;
    date?: Date;
    user: string;
    oss: string;
}

interface ServerContextType {
    servers: Server[];
    createServer: (server: Server) => Promise<void>;
    getServers: () => Promise<void>;
    deleteServer: (id: string) => Promise<void>;
    updateServer: (server: Server) => Promise<void>;
}

const ServerContext = createContext<ServerContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useServers = () => {
    const context = useContext(ServerContext);
    if (!context) {
        throw new Error("No ServerContext available for this application");
    }
    return context;
};

export function ServerProvider({ children }: { children: ReactElement }) {
    const [servers, setServers] = useState([]);

    const getServers = async () => {
        try {
            const response = await getServersRequest();
            setServers(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createServer = async (server: Server) => {
        server.ram = server.ram + " GB";
        server.cpu = server.cpu + " cores";
        const os: string = server.oss.split(" ")[0].toLocaleLowerCase();

        if (os.includes("ubuntu")) {
            server.os = 1;
        } else if (os.includes("devian")) {
            server.os = 2;
        } else if (os.includes("opensuse")) {
            server.os = 3;
        } else if (os.includes("windows")) {
            server.os = 4;
        } else if (os.includes("fedora")) {
            server.os = 5;
        } else if (os.includes("centos")) {
            server.os = 6;
        } else if (os.includes("arch")) {
            server.os = 7;
        }
        delete (server as { oss?: unknown }).oss;
        const response = await createServerRequest(server);
        console.log(response);
    };

    const deleteServer = async (id: string) => {
        try {
            const response = await dropServerRequest(id);
            if (response.status === 204)
                setServers(
                    servers.filter((server: Server) => server._id !== id)
                );
        } catch (error: unknown) {
            console.log(error);
        }
    };

    const updateServer = async (server: Server) => {
        try {
            const response = await updateServerRequest(server);
            console.log(response);
            getServers();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ServerContext.Provider
            value={{
                servers,
                createServer,
                getServers,
                deleteServer,
                updateServer,
            }}
        >
            {children}
        </ServerContext.Provider>
    );
}
