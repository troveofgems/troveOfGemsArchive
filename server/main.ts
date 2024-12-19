import {debug} from "node:util";
import express from "express";
import path, {dirname} from "path";
import { fileURLToPath } from "url";

import LoggerMiddleware from "./middleware/logger/logger.middleware.js";

import connectToDB from "./config/db/connect.db.js";
import mountRouter from "./router/main.router.js";
import configureApplicationSettings from "./config/app/settings.js";
import enableSecurityPackages from "./config/security/secure.server.js";

const
    logger = new LoggerMiddleware(),
    FINAL_FALLBACK_PORT = 33702,
    port = process.env.PORT || FINAL_FALLBACK_PORT;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

       // Production Serve
       if(process.env.NODE_ENV === "production") {
           console.log("Serving Production? ");
           const pathToServe = path.join(__dirname, "..", "/client/build");
           app.use(express.static(pathToServe));

           let filePath = path.resolve(__dirname, "..", "client", "build", "index.html");

           app.get("*", (req, res) => {
              res.sendFile(filePath);
           });
       } else {
           console.log("Serving Development?");
           // Need Cors?
           app.get("/", (req, res) => {
              return res.send("ToGA BE Ping Successful...");
           });
       }

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