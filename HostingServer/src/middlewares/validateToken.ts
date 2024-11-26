import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config";

export function authRequired(
    req: Request & { user?: { id: string; iat: number; exp: number } },
    res: Response,
    next: NextFunction
) {
    const { token } = req.cookies;
    if (!token)
        return void res.status(401).json({ message: "Autorization denied." });

    jwt.verify(token, TOKEN_SECRET, (error: any, decoded: any) => {
        if (error)
            return void res
                .status(403)
                .json({ message: "Authentication failed." });
        req.user = decoded;
        next();
    });
}
