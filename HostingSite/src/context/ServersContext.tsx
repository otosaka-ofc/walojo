import { createContext, ReactElement, useContext, useState } from "react";
import { createServerRequest, getServersRequest } from "../api/servers";

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
        server.active = true;
        const os: string = server.oss.split(" ")[0].toLocaleLowerCase();

        if (os.includes("ubuntu")) {
            server.os = 1
        } else if(os.includes("devian")) {
            server.os = 2
        } else if(os.includes("opensuse")) {
            server.os = 3
        } else if(os.includes("windows")) {
            server.os = 4
        } else if(os.includes("fedora")) {
            server.os = 5
        } else if(os.includes("centos")) {
            server.os = 6
        } else if(os.includes("arch")) {
            server.os = 7
        }
        delete (server as { oss?: unknown }).oss;
        const response = await createServerRequest(server);
        console.log(response);
    };
    return (
        <ServerContext.Provider value={{ servers, createServer, getServers }}>
            {children}
        </ServerContext.Provider>
    );
}
