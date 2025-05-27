"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCacheKeyFromParams = void 0;
var DEFAULT_REGION = 'defaultregion';
var SEPARATOR = '.';
var isObject = function (input) {
    return input === Object(input);
};
var generateCacheKeyFromParams = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var cacheKey = '';
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (isObject(arg)) {
            cacheKey += "".concat(JSON.stringify(arg)).concat(SEPARATOR);
        }
        else {
            cacheKey += "".concat(arg).concat(SEPARATOR);
        }
    }
    return cacheKey.slice(0, -1);
};
exports.generateCacheKeyFromParams = generateCacheKeyFromParams;
