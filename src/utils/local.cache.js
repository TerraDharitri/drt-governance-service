"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lru_cache_1 = require("lru-cache");
var config_1 = require("../config");
exports.default = new lru_cache_1.default({
    max: config_1.drtConfig.localCacheMaxItems,
    // for use with tracking overall storage size
    allowStale: false,
    updateAgeOnGet: false,
    updateAgeOnHas: false,
});
