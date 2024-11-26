import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const validateSchema =
    (schema: any) => (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error: any) {
            res.status(400).json(
                error.errors.map((error: any) => error.message)
            );
        }
    };
