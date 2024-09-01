const {NODE_ENV} = process.env;

export default class LoggerMiddleware {
    private _defaultConsoleMethodSignature = "log";
    private inDevOrUATMode = NODE_ENV === "development" || NODE_ENV === "uat" || NODE_ENV === "test";

    constructor() {}

    private _printToConsole(
        message: string,
        data: object | null = null,
        methodSignature: string = this._defaultConsoleMethodSignature
    ) {
        // @ts-ignore
        console[`${methodSignature}`](message, data);
    }

    print(
        message: string,
        data?: object | null,
        methodSignature?: string | undefined
    ): void { if(this.inDevOrUATMode) { this._printToConsole(message, data, methodSignature) } }
}