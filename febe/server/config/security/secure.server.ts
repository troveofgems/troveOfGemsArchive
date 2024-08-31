import express from "express";
import helmet from "helmet";

export default function turnOnAppSecurityPackages() {

}

function enableHelmet(app: express.Application) {
    try {

    } catch(err) {

    }
    app.use(helmet());
    return app;
}