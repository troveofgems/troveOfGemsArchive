import "./config/keys/set.keys";
import express, { Express, Request, Response, NextFunction } from "express";

import connectToDB  from "./config/db/connect.db";

import { v4 as uuidv4 } from 'uuid';
import session from "express-session";

const app: Express = express();
const
    FALLBACK_PORT = 33702,
    port = process.env.PORT || FALLBACK_PORT;

// Application Settings
app.use(express.json());

// Open Database Connection
connectToDB().then(() => console.log(`Connected To Database. Opened Port: ${process.env.DB_PORT}`));

console.log("Move onto connecting routes: ", );
// Error Handling Routes || Attach Routes
app.get("/", (req: Request, res: Response, next: NextFunction) => {
   res.send("Express + TypeScript Server");
});

app.listen(port, () => {
   console.log("Server is running on port " + port);
});