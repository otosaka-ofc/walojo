import { Request, Response } from "express";
import User from "../models/users.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createAccessToken } from "../libs/jwt";
import { TOKEN_SECRET } from "../config";

export async function register(req: Request, res: Response) {
    const { username, firstname, lastname, email, password } = req.body;
    try {
        const userFound = await User.findOne({ email });
        if (userFound)
            return void res
                .status(400)
                .json(["The email address is already used"]);
        const hash: string = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            firstname,
            lastname,
            email,
            password: hash,
        });
        const userSaved = await newUser.save();
        const token = await createAccessToken({
            id: userSaved._id,
        });

        res.cookie("token", token);
        res.json({
            username: userSaved.username,
            firstname: userSaved.firstname,
            lastname: userSaved.lastname,
            email: userSaved.email,
            id: userSaved._id,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ error: String(error) });
    }
}
export async function login(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
        const userFound = await User.findOne({ username: username });
        if (!userFound) res.status(404).json(["User not found"]);
        const isMatch = await bcrypt.compare(
            password,
            userFound?.password as string
        );
        if (!isMatch) res.status(400).json(["Incorrect password"]);

        const token = await createAccessToken({
            id: userFound?._id,
        });
        res.cookie("token", token);
        res.json({
            username: userFound?.username,
            firstname: userFound?.firstname,
            lastname: userFound?.lastname,
            email: userFound?.email,
            id: userFound?._id,
            createdAt: userFound?.createdAt,
            updatedAt: userFound?.updatedAt,
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export function logout(req: Request, res: Response) {
    res.clearCookie("token");
    return void res.sendStatus(200);
}