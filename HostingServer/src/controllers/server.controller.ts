import { Request, Response } from "express";
import Server from "../models/server.model";

export async function getServers(
    req: Request & { user?: { id: string; iat: number; exp: number } },
    res: Response
) {
    const servers = await Server.find({ user: req.user?.id }).populate("user");
    res.json(servers);
}
export async function addServer(
    req: Request & { user?: { id: string; iat: number; exp: number } },
    res: Response
) {
    const { name, description, os, ram, cpu, active } = req.body;
    const newServer = new Server({
        name,
        description,
        os,
        ram,
        cpu,
        active,
        user: req.user?.id,
    });
    const savedServer = await newServer.save();
    res.json(savedServer);
}
export async function dropServer(
    req: Request & { user?: { id: string; iat: number; exp: number } },
    res: Response
) {
    const server = await Server.findByIdAndDelete(req.params.id);
    if (!server) return res.status(404).json({ message: "Server not found" });
    res.sendStatus(204);
}
export async function getServer(
    req: Request & { user?: { id: string; iat: number; exp: number } },
    res: Response
) {
    const server = await Server.findById(req.params.id).populate("user");
    if (!server) return res.status(404).json({ message: "Server not found" });
    res.json(server);
}
export async function updateServer(
    req: Request & { user?: { id: string; iat: number; exp: number } },
    res: Response
) {
    const server = await Server.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!server) return res.status(404).json({ message: "Server not found" });
    res.json(server);
}
