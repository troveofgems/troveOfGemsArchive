import "./config/keys/set.keys";
import express, { Express, Request, Response, NextFunction } from "express";

import connectToDB, { storage } from "./config/db/connect.db";
import session from "express-session";

/*import { v4 as uuidv4 } from 'uuid';*/

const app: Express = express();
const
    FALLBACK_PORT = 33702,
    port = process.env.PORT || FALLBACK_PORT;

// Open Database Connection And Connect Application
connectToDB().then(() => {
   // Application Settings
   app.use(express.json());
   app.use(session({
      secret: 'This is a secret',
      cookie: {
         maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
      },
      store: storage.connection,
      // Boilerplate options, see:
      // * https://www.npmjs.com/package/express-session#resave
      // * https://www.npmjs.com/package/express-session#saveuninitialized
      resave: true,
      saveUninitialized: true
   }));


   console.log(`Connected To Database. Opened Port: ${process.env.MONGODB_CONN_PORT}`);

   console.log("Move onto connecting routes: ", );
   // Error Handling Routes || Attach Routes
   app.get("/", (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({
         server: "Express + TypeScript Server",
         session: req.session
      });
   });

   app.listen(port, () => {
      console.log("Server is running on port " + port);
   });
});