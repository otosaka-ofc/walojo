import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller";
import { validateSchema } from "../middlewares/validator.middleware";
import { loginSchema, registerSchema } from "../schemas/auth.schema";
import { verify } from "jsonwebtoken";
import { Request, Response } from "express";
import { verifyToken } from "../controllers/user.controller";

const router: Router = Router();

router.post("/signup", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.get("/verify", verifyToken);
router.post("/logout", logout);

export default router;
