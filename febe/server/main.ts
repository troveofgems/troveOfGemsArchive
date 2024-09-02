import {debug} from "node:util";
import express from "express";

import { setApplicationEnvironmentVars } from "./config/keys/set.keys";
setApplicationEnvironmentVars();

import LoggerMiddleware from "./middleware/logger/logger.middleware";

import connectToDB from "./config/db/connect.db";
import mountRouter from "./router/main.router";
import configureApplicationSettings from "./config/app/settings";
import enableSecurityPackages from "./config/security/secure.server";

const
    logger = new LoggerMiddleware(),
    FINAL_FALLBACK_PORT = 33702,
    port = process.env.PORT || FINAL_FALLBACK_PORT;

const app: express.Application = express();

// Connect Application To Open and Listening Database
connectToDB()
    .then(async () => {
       logger.print(`Connected To Database...up and running on port: ${port}`);

       // Application Settings
       configureApplicationSettings(app);

       // Security Settings
       enableSecurityPackages(app);

       // Mount the Main Application Router
       await mountRouter(app);

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