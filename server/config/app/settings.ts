import tryMiddleware from "../../middleware/try/try.middleware";

const COOKIE_AGE = 1000 * 60 * 60 * 24 * 7; // 1 week

import * as path from "path";
import express from "express";
import LoggerMiddleware from "../../middleware/logger/logger.middleware";
import session from "express-session";
import {storage} from "../db/connect.db";
import morgan from "morgan";
import favicon from "serve-favicon";

const logger = new LoggerMiddleware();

export default function configureApplicationSettings(app: express.Application) {
    logger.print("Configuring Application Settings...");
    _setBackendFavicon(app);
    _useExpressSession(app);
    _useMorganHTTPLogger(app);
    return app;
}

export function enforceJSONAndURLEncoded(app: express.Application) {
    app.use(express.json());
    app.use(express.urlencoded());
    return app;
}

export function enforceRaw(app: express.Application) {
    app.use(express.raw());
    return app;
}

function _useExpressSession(app: express.Application) {
    logger.print("Configuring Express Session Settings...");
    app.use(session({
        secret: process.env.EXPRESS_SESSION_SECRET || "",
        cookie: {
            maxAge: COOKIE_AGE
        },
        store: storage.connection,
        resave: true,
        saveUninitialized: true
        // Boilerplate options, see:
        // * https://www.npmjs.com/package/express-session
    }));
    logger.print("Configured and Attached Express Session Settings...");
    return app;
}

function _useMorganHTTPLogger(app: express.Application) {
    app.use(morgan("combined")); // HTTP Logger
    /*   function(tokens: any, req: Request, res: Response) {
      return [
         chalk.green.bold(tokens.method(req, res)),
         chalk.red.bold(tokens.status(req, res)),
         chalk.white(tokens.url(req, res)),
         chalk.yellow(tokens['response-time'](req, res) + ' ms'),
      ].join();
   }*/

    return app;
}

function _setBackendFavicon(app: express.Application) {
    logger.print("Configuring Application Favicon...");
    let filePath = path.join(__dirname, '../../public', 'favicon.ico');
    tryMiddleware(app.use(favicon(filePath)));
    logger.print("Favicon Loaded From ", { filePath });
    return app;
}