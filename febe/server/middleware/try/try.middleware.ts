import {NextFunction, Request, Response} from "express";

export default function tryMiddleware(callback: Function) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await callback(req, res, next);
        } catch(err) {
            // Set Status Code
            res.statusCode = (res.statusCode < 400 ? 400 : (res.statusCode || 500));
            return res
                .send(err);
        }
    }
}