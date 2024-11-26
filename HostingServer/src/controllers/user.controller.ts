import { Request, Response } from "express";
import User from "../models/users.model";
import express from "express";
import { TOKEN_SECRET } from "../config";
import jwt from "jsonwebtoken";

export async function profile(
    req: Request & { user?: { id: string; iat: number; exp: number } },
    res: Response
) {
    if (!req.user) return res.status(401).json({ message: "No autorizado" });

    const userFound = await User.findById(req.user?.id);
    if (!userFound)
        return res.status(400).json({ message: "Usuario no encontrado" });

    return void res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        //role: userFound.role,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    });
}

export async function verifyToken(req: Request, res: Response) {
    const { token } = req.cookies;
    console.log(token)
    if (!token)
        return void res.status(401).json({ message: "Unauthorized token" });
    jwt.verify(token, TOKEN_SECRET, async (error: any, decoded: any) => {
        if (error)
            return void res.status(401).json({ message: "Unauthorized token" });

        const userFound = await User.findById(decoded.id);
        if (!userFound)
            return void res.status(401).json({ message: "Unauthorized token" });

        return void res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
    });
}
