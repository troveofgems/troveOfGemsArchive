import mongoose from "mongoose";

import {default as tryRequest} from "../../middleware/try/try.middleware";
import {Request, Response, NextFunction} from "express";

import session, {Store} from "express-session";
import MongoDBStore from "connect-mongodb-session";

const
    {
        MONGODB_CONN_USER, MONGODB_CONN_PWD, MONGODB_CONN_URI, MONGODB_CONN_PORT,
        NODE_ENV
    } = process.env,
    devURI = `mongodb://${MONGODB_CONN_USER}:${MONGODB_CONN_PWD}@${MONGODB_CONN_URI}:${MONGODB_CONN_PORT}`,
    prodURI = "",
    mongoURI = NODE_ENV === "development" ? devURI : prodURI,
    connectionStringOptions = "/tog_archives?",
    fullConnectionString = mongoURI + connectionStringOptions;

export default async function connectToDB() {
    tryRequest(async (req: Request, res: Response, next: NextFunction) => {
        await mongoose.connect(fullConnectionString);
    });
    setAndUseMongoDBStore();
}

export const storage: { connection: any } = { connection : null };

function setAndUseMongoDBStore() {
    let
        storeOptions = {
            uri: `mongodb://${MONGODB_CONN_USER}:${MONGODB_CONN_PWD}@${MONGODB_CONN_URI}:${MONGODB_CONN_PORT}`,
            collection: 'archiveSessions'
        },
        mongoDBStore = MongoDBStore(session);

    storage.connection = new mongoDBStore(storeOptions);
}


