import { Router } from "express";
import { profile, verifyToken } from "../controllers/user.controller";
import { authRequired } from "../middlewares/validateToken";
import { Request, Response } from "express";

declare global {
    namespace Express {
        interface Request {
            user?: { id: string; iat: number; exp: number };
        }
    }
}

const router: Router = Router();

router.get(
    "/profile",
    authRequired,
    async (
        req: Request & { user?: { id: string; iat: number; exp: number } },
        res: Response
    ) => {
        await profile(req, res);
    }
);

export default router;
