"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setClient = void 0;
var crypto = require("crypto");
var Redis = require("ioredis");
var clientMap = {};
var setClient = function (options) {
    var optionsHash = crypto.createHash('md5').update(JSON.stringify(options)).digest('hex');
    if (!clientMap[optionsHash])
        clientMap[optionsHash] = new Redis.default(options);
    return clientMap[optionsHash];
};
exports.setClient = setClient;
