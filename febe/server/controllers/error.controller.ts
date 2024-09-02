import {Request, Response, NextFunction} from "express";

export function renderError(req: Request, res: Response, next: NextFunction) {
    return res.status(400).json({
        server: "Express + TypeScript Server Error",
        session: req.session
    });
}