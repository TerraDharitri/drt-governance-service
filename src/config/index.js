"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constantsConfig = exports.governanceConfig = exports.abiConfig = exports.gasConfig = exports.scAddress = exports.cacheConfig = exports.drtConfig = void 0;
var env_load_1 = require("./env_load");
(0, env_load_1.envload)();
var config_1 = require("config");
/**
 * Wallet object configuration.
 * Has 3rd party API hosts and other configurations
 */
exports.drtConfig = config_1.default.get('dharitri');
/**
 * Caching time config.
 * The values are in seconds
 */
exports.cacheConfig = config_1.default.get('caching');
exports.scAddress = config_1.default.get('scAddress');
exports.gasConfig = config_1.default.get('gasLimits');
exports.abiConfig = config_1.default.get('abi');
exports.governanceConfig = config_1.default.get('governance');
exports.constantsConfig = config_1.default.get('constants');
