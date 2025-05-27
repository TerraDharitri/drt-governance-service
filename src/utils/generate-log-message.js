"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateComputeLogMessage = exports.generateDeleteLogMessage = exports.generateSetLogMessage = exports.generateGetLogMessage = exports.generateLogMessage = void 0;
var LogType;
(function (LogType) {
    LogType["GET"] = "get";
    LogType["SET"] = "set";
    LogType["DELETE"] = "delete";
    LogType["COMPUTE"] = "compute";
    LogType["RUN_QUERY"] = "runQuery";
})(LogType || (LogType = {}));
var generateLogMessage = function (className, methodName, messageKey, error, logType) {
    var path = "".concat(className, ".").concat(methodName);
    var message = logType
        ? "An error occurred while ".concat(logType, " ").concat(messageKey)
        : "An error occurred while ".concat(messageKey);
    return {
        message: message,
        path: path,
        error: error,
    };
};
exports.generateLogMessage = generateLogMessage;
var generateGetLogMessage = function (className, methodName, messageKey, error) {
    return (0, exports.generateLogMessage)(className, methodName, messageKey, error, LogType.GET);
};
exports.generateGetLogMessage = generateGetLogMessage;
var generateSetLogMessage = function (className, methodName, messageKey, error) {
    return (0, exports.generateLogMessage)(className, methodName, messageKey, error, LogType.SET);
};
exports.generateSetLogMessage = generateSetLogMessage;
var generateDeleteLogMessage = function (className, methodName, messageKey, error) {
    return (0, exports.generateLogMessage)(className, methodName, messageKey, error, LogType.DELETE);
};
exports.generateDeleteLogMessage = generateDeleteLogMessage;
var generateComputeLogMessage = function (className, methodName, messageKey, error) {
    return (0, exports.generateLogMessage)(className, methodName, messageKey, error, LogType.COMPUTE);
};
exports.generateComputeLogMessage = generateComputeLogMessage;
