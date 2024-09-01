import "./config/keys/set.keys";
import express, { Express, Request, Response, NextFunction } from "express";
import LoggerMiddleware from "./middleware/logger/logger.middleware";

import connectToDB, { storage } from "./config/db/connect.db";
import session from "express-session";

import morgan from "morgan";
import {debug} from "node:util";

/*import { v4 as uuidv4 } from 'uuid';*/

const
    logger = new LoggerMiddleware(),
    app: Express = express(),
    FALLBACK_PORT = 33702,
    port = process.env.PORT || FALLBACK_PORT;

// Open Database Connection And Connect Application
connectToDB().then(() => {
   logger.print(`Connected To Database...up and running on port: ${port}`);
   // Application Settings
   app.use(express.json());
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
   app.use(morgan("combined"));

   console.log("Move onto connecting routes: ", );
   // Error Handling Routes || Attach Routes
   app.get("/", (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({
         server: "Express + TypeScript Server",
         session: req.session
      });
   });

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