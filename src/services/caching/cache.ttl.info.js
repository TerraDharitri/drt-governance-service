"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheTtlInfo = void 0;
var sdk_nestjs_common_1 = require("@terradharitri/sdk-nestjs-common");
var CacheTtlInfo = /** @class */ (function () {
    function CacheTtlInfo(remoteTtl, localTtl) {
        if (remoteTtl === void 0) { remoteTtl = sdk_nestjs_common_1.Constants.oneMinute(); }
        this.remoteTtl = remoteTtl;
        this.localTtl = localTtl ? localTtl : this.remoteTtl / 2;
    }
    CacheTtlInfo.Token = new CacheTtlInfo(sdk_nestjs_common_1.Constants.oneMinute() * 10, sdk_nestjs_common_1.Constants.oneMinute() * 5);
    CacheTtlInfo.ContractState = new CacheTtlInfo(sdk_nestjs_common_1.Constants.oneMinute() * 10, sdk_nestjs_common_1.Constants.oneMinute() * 3);
    CacheTtlInfo.ContractInfo = new CacheTtlInfo(sdk_nestjs_common_1.Constants.oneMinute() * 3, sdk_nestjs_common_1.Constants.oneMinute());
    CacheTtlInfo.ContractBalance = new CacheTtlInfo(sdk_nestjs_common_1.Constants.oneMinute(), sdk_nestjs_common_1.Constants.oneSecond() * 30);
    CacheTtlInfo.Price = new CacheTtlInfo(sdk_nestjs_common_1.Constants.oneMinute(), sdk_nestjs_common_1.Constants.oneSecond() * 30);
    CacheTtlInfo.Analytics = new CacheTtlInfo(sdk_nestjs_common_1.Constants.oneMinute() * 30, sdk_nestjs_common_1.Constants.oneMinute() * 10);
    CacheTtlInfo.Attributes = new CacheTtlInfo(sdk_nestjs_common_1.Constants.oneHour(), sdk_nestjs_common_1.Constants.oneMinute() * 45);
    return CacheTtlInfo;
}());
exports.CacheTtlInfo = CacheTtlInfo;
