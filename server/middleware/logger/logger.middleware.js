const { NODE_ENV } = process.env;
export default class LoggerMiddleware {
    _defaultConsoleMethodSignature = "log";
    inDevOrUATMode = NODE_ENV === "development" || NODE_ENV === "uat" || NODE_ENV === "test";
    constructor() { }
    _printToConsole(message, data = null, methodSignature = this._defaultConsoleMethodSignature) {
        // @ts-ignore
        console[`${methodSignature}`](message, data);
    }
    print(message, data, methodSignature) { if (this.inDevOrUATMode) {
        this._printToConsole(message, data, methodSignature);
    } }
}
