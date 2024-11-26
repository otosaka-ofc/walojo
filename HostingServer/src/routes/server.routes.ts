import { Router } from "express";
import { authRequired } from "../middlewares/validateToken";
import {
    addServer,
    dropServer,
    getServer,
    getServers,
    updateServer,
} from "../controllers/server.controller";
import { validateSchema } from "../middlewares/validator.middleware";
import { createServerSchema } from "../schemas/server.schema";

const router = Router();

router.get("/", authRequired, getServers);
router.post(
    "/add",
    authRequired,
    validateSchema(createServerSchema),
    addServer
);
router.delete("/:id", authRequired, async (req, res) => {
    try {
        await dropServer(req, res);
    } catch (error) {
        console.log(error);
    }
});

router.get("/:id", authRequired, async (req, res) => {
    try {
        await getServer(req, res);
    } catch (error) {
        console.log(error);
    }
});
router.put("/:id", authRequired, async (req, res) => {
    try {
        await updateServer(req, res);
    } catch (error) {
        console.log(error);
    }
});

export default router;
