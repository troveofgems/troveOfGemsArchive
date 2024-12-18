import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import {default as RLF} from "rate-limiter-flexible";
import tryMiddleware from "../../middleware/try/try.middleware";
import LoggerMiddleware from "../../middleware/logger/logger.middleware";

const logger = new LoggerMiddleware();

export default function enableSecurityPackages(app: express.Application) {
    logger.print("Enabling Security Packages!");
    _reduceFingerprinting(app);
    _enableHelmet(app);
    _enableHPP(app);
    //_enableRateLimiter(app);
    return app;
}

function _enableHelmet(app: express.Application) {
    logger.print("Attaching Helmet...");
    tryMiddleware(app.use(helmet()));
    logger.print("Helmet Attached.");
    return app;
}

function _reduceFingerprinting(app: express.Application) {
    logger.print("Reducing Fingerprint...");
    app.disable("x-powered-by");
    logger.print("Fingerprints Reduced.");
    return app;
}

function _enableRateLimiter(app: express.Application) {
    console.log("RLF? ", RLF);
    let rateLimiterMemory = new RLF.RateLimiterMemory({
        points: 6,
        duration: 1, // Per Second
    });

    // To be integrated with REDIS

    rateLimiterMemory
        .consume("remoteAddress", 2)
        .then((rateLimiterRes) => {
            console.log("Rate Limiter Res? ", rateLimiterRes);
        }).catch((rateLimiterRes) => {
            console.log("Rate Limiter Res? ", rateLimiterRes);
        })
}

function _enableHPP(app: express.Application) { // HTTP Query Param Pollution Filter
    app.use(hpp());
    return app;
}