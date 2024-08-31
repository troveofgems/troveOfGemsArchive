import path from "path";
import dotenv from "dotenv";

const
    cwd = __dirname,
    pathToEnvFile = path.resolve(cwd, "../env/", `${process.env.NODE_ENV}.env`);

dotenv.config({ path: pathToEnvFile });