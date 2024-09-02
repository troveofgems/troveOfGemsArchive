import * as fs from 'fs';
import * as path from 'path';
import express, {Router} from 'express';
import LoggerMiddleware from "../middleware/logger/logger.middleware";
import tryMiddleware from "../middleware/try/try.middleware";

const logger = new LoggerMiddleware();

export default async function mountRouter(app: express.Application): Promise<express.Application> {
    const // This is the main router. It bundles all sub-routes and mounts them to the application.
        apiPrefix = process.env.API_PREFIX || "/api/",
        apiVersion = process.env.API_VERSION || "0.0.0",
        apiPathPrefix = `${apiPrefix}${apiVersion}/`,
        routePaths = _getRoutePaths();

    logger.print("Generated Route Paths are: ", routePaths);
    tryMiddleware(await attachRoutes(app, routePaths, apiPathPrefix));

    return app;
}

async function attachRoutes(
    app: express.Application,
    routePaths: string[],
    apiPathPrefix: string
): Promise<express.Application> {
    for (const route of routePaths) {
        logger.print("Attaching Route...", { route });

        const
            API_RoutePath = `${apiPathPrefix}${route}`,
            module = await import(`./routes/${route}.routes.ts`);

        logger.print("Module fetched? ", module);
        logger.print("Attaching To API Prefix Route...", { API_RoutePath });

        app.use(API_RoutePath, module.default);
        logger.print(`Route ${route} loaded successfully.`);
    }

    return app;
}

function _getRoutePaths(): string[] {
    const routesDir = path.join(__dirname, 'routes');
    const files = fs.readdirSync(routesDir);

    return files.filter(file => {
        const filePath = path.join(routesDir, file);
        const stat = fs.statSync(filePath);
        return stat.isFile() && file.endsWith('.routes.ts');
    }).map(file => file.replace(/\.routes\.ts$/, ''));
}