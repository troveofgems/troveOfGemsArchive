import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 33702;
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
   res.send("Express + TypeScript Server");
});

app.listen(port, () => {
   console.log("Server is running on port " + port);
});