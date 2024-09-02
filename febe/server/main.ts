import { setApplicationKeyRing } from "./config/keys/set.keys";
setApplicationKeyRing();

import express, { Express, Request, Response, NextFunction } from "express";
import LoggerMiddleware from "./middleware/logger/logger.middleware";

import connectToDB, { storage } from "./config/db/connect.db";
import session from "express-session";

import morgan from "morgan";
import {debug} from "node:util";

import mountRouter from "./router/main.router";

/*import { v4 as uuidv4 } from 'uuid';*/

/*
import chalk from "chalk";*/

const
    logger = new LoggerMiddleware(),
    FINAL_FALLBACK_PORT = 33702,
    port = process.env.PORT || FINAL_FALLBACK_PORT;

let app: express.Application = express();

// Open Database Connection And Connect Application
connectToDB()
    .then(async () => {
       logger.print(`Connected To Database...up and running on port: ${port}`);

       // Application Settings
       // app.use(express.json());
       app.use(session({
          secret: process.env.EXPRESS_SESSION_SECRET || "",
          cookie: {
             maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
          },
          store: storage.connection,
          resave: true,
          saveUninitialized: true
          // Boilerplate options, see:
          // * https://www.npmjs.com/package/express-session
       }));

       app.use(morgan("combined")); // HTTP Logger

/*   function(tokens: any, req: Request, res: Response) {
      return [
         chalk.green.bold(tokens.method(req, res)),
         chalk.red.bold(tokens.status(req, res)),
         chalk.white(tokens.url(req, res)),
         chalk.yellow(tokens['response-time'](req, res) + ' ms'),
      ].join();
   }*/

       // Mount the Main Application Router
       app = await mountRouter(app);

       /* app.get("/", (req, res, next) => {
            res.status(200).json({
                homePage: true
            });
        });*/

      // Start Server and Open Port
      const server = app.listen(port, () => {
         logger.print(`Application Server up and running on port: ${port}`);
      });

      process.on('SIGTERM', () => {
         debug('Close Server Signal received: closing server');
         server.close(() => {
            debug('Server closed');
         });
      });
});