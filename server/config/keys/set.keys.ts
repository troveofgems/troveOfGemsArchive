import path from "path";
import dotenv from "dotenv";

const
    cwd = __dirname,
    pathToEnvFile = path.resolve(cwd, "../env/", `${process.env.NODE_ENV}.env`);

export function setApplicationEnvironmentVars() {
    return dotenv.config({ path: pathToEnvFile });
}