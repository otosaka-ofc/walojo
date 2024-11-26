import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config";

export function createAccessToken(payload: any) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d",
            },
            (error: Error | null, token: string | undefined) => {
                if (error) {
                    reject(error);
                }
                resolve(token);
            }
        );
    });
}
