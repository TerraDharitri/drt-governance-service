"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicModuleUtils = void 0;
var sdk_nestjs_cache_1 = require("@terradharitri/sdk-nestjs-cache");
var common_app_module_1 = require("../common.app.module");
var config_1 = require("../config");
var api_config_service_1 = require("../helpers/api.config.service");
var DynamicModuleUtils = /** @class */ (function () {
    function DynamicModuleUtils() {
    }
    DynamicModuleUtils.getCacheModule = function () {
        return sdk_nestjs_cache_1.CacheModule.forRootAsync({
            imports: [common_app_module_1.CommonAppModule],
            inject: [api_config_service_1.ApiConfigService],
            useFactory: function (configService) {
                return new sdk_nestjs_cache_1.RedisCacheModuleOptions({
                    host: configService.getRedisUrl(),
                    port: configService.getRedisPort(),
                    password: configService.getRedisPassword(),
                });
            },
        }, {
            maxItems: config_1.drtConfig.localCacheMaxItems,
        });
    };
    return DynamicModuleUtils;
}());
exports.DynamicModuleUtils = DynamicModuleUtils;
