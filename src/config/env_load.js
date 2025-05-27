"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envload = void 0;
var dotenv = require("dotenv");
var nodeEnv = process.env.NODE_ENV
    ? process.env.NODE_ENV.trim()
    : 'production';
var envload = function () {
    switch (nodeEnv) {
        case 'test':
            dotenv.config({ path: ".env.example" });
            break;
        default:
            dotenv.config({ path: ".env" });
            break;
    }
};
exports.envload = envload;
