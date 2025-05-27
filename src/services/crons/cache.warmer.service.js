"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheWarmerService = void 0;
var common_1 = require("@nestjs/common");
var schedule_1 = require("@nestjs/schedule");
var generate_cache_key_1 = require("../../utils/generate-cache-key");
var sdk_nestjs_common_1 = require("@terradharitri/sdk-nestjs-common");
var axios_1 = require("axios");
var moment_1 = require("moment");
var metrics_collector_1 = require("../../utils/metrics.collector");
var performance_profiler_1 = require("../../utils/performance.profiler");
var CacheWarmerService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _cacheCurrentEpoch_decorators;
    var _cacheGuest_decorators;
    var _cacheShardCurrentBlockNonce_decorators;
    var CacheWarmerService = _classThis = /** @class */ (function () {
        function CacheWarmerService_1(apiService, cachingService, configService, pubSub, logger) {
            this.apiService = (__runInitializers(this, _instanceExtraInitializers), apiService);
            this.cachingService = cachingService;
            this.configService = configService;
            this.pubSub = pubSub;
            this.logger = logger;
        }
        CacheWarmerService_1.prototype.cacheCurrentEpoch = function () {
            return __awaiter(this, void 0, void 0, function () {
                var stats, ttl, cacheKey;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.apiService.getStats()];
                        case 1:
                            stats = _a.sent();
                            ttl = (stats.roundsPerEpoch - stats.roundsPassed) * 6;
                            cacheKey = (0, generate_cache_key_1.generateCacheKeyFromParams)('context', 'currentEpoch');
                            return [4 /*yield*/, this.cachingService.set(cacheKey, stats.epoch, ttl)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.deleteCacheKeys([cacheKey])];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CacheWarmerService_1.prototype.cacheGuest = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dateFormat, currentDate, previousMinute, prefix, threshold, keysToComputeCurrentMinute, keysToComputePreviousMinute, keysToCompute;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            dateFormat = 'YYYY-MM-DD_HH:mm';
                            currentDate = (0, moment_1.default)().format(dateFormat);
                            previousMinute = (0, moment_1.default)()
                                .subtract(1, 'minute')
                                .format(dateFormat);
                            prefix = 'guestCache';
                            threshold = Number(process.env.ENABLE_CACHE_GUEST_RATE_THRESHOLD || 100);
                            return [4 /*yield*/, this.cachingService.zRangeByScoreRemote("".concat(prefix, ".").concat(currentDate), threshold, Number.POSITIVE_INFINITY)];
                        case 1:
                            keysToComputeCurrentMinute = _a.sent();
                            return [4 /*yield*/, this.cachingService.zRangeByScoreRemote("".concat(prefix, ".").concat(previousMinute), threshold, Number.POSITIVE_INFINITY)];
                        case 2:
                            keysToComputePreviousMinute = _a.sent();
                            keysToCompute = __spreadArray([], new Set(__spreadArray(__spreadArray([], keysToComputeCurrentMinute, true), keysToComputePreviousMinute, true)), true);
                            return [4 /*yield*/, Promise.allSettled(keysToCompute.map(function (key) { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, sdk_nestjs_common_1.Locker.lock(key, function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var parsedKey, keyValue, profiler, data, response, error_1;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                parsedKey = "".concat(prefix, ".").concat(key, ".body");
                                                                return [4 /*yield*/, this.cachingService.get(parsedKey)];
                                                            case 1:
                                                                keyValue = _a.sent();
                                                                if (!keyValue) {
                                                                    return [2 /*return*/, Promise.resolve()];
                                                                }
                                                                console.log("Started warming up query '".concat(JSON.stringify(keyValue), "' for url '").concat(process.env.DRT_GOVERNANCE_URL, "'"));
                                                                profiler = new performance_profiler_1.PerformanceProfiler();
                                                                _a.label = 2;
                                                            case 2:
                                                                _a.trys.push([2, 4, , 5]);
                                                                return [4 /*yield*/, axios_1.default.post("".concat(process.env.DRT_GOVERNANCE_URL, "/").concat(this.configService.getPrefix(), "/graphql"), keyValue, {
                                                                        headers: {
                                                                            'no-cache': true,
                                                                        },
                                                                    })];
                                                            case 3:
                                                                response = _a.sent();
                                                                data = response.data;
                                                                return [3 /*break*/, 5];
                                                            case 4:
                                                                error_1 = _a.sent();
                                                                console.error("An error occurred while warming up query '".concat(JSON.stringify(keyValue), "' for url '").concat(process.env.DRT_GOVERNANCE_URL, "'"));
                                                                console.error(error_1);
                                                                return [3 /*break*/, 5];
                                                            case 5:
                                                                profiler.stop();
                                                                console.log("Finished warming up query '".concat(JSON.stringify(keyValue), "' for url '").concat(process.env.DRT_GOVERNANCE_URL, "'. Response size: ").concat(JSON.stringify(data).length, ". Duration: ").concat(profiler.duration));
                                                                return [4 /*yield*/, this.cachingService.set("".concat(prefix, ".").concat(key, ".response"), data, sdk_nestjs_common_1.Constants.oneSecond() * 30)];
                                                            case 6:
                                                                _a.sent();
                                                                return [2 /*return*/, data];
                                                        }
                                                    });
                                                }); })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }))];
                        case 3:
                            _a.sent();
                            metrics_collector_1.MetricsCollector.setGuestHitQueries(keysToCompute.length);
                            return [2 /*return*/];
                    }
                });
            });
        };
        CacheWarmerService_1.prototype.cacheShardCurrentBlockNonce = function () {
            return __awaiter(this, void 0, void 0, function () {
                var stats, promises, index, shardsNonces, invalidatedKeys, index, cacheKey;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.apiService.getStats()];
                        case 1:
                            stats = _a.sent();
                            promises = [];
                            for (index = 0; index < stats.shards; index++) {
                                promises.push(this.apiService.getCurrentBlockNonce(index));
                            }
                            return [4 /*yield*/, Promise.all(promises)];
                        case 2:
                            shardsNonces = _a.sent();
                            invalidatedKeys = [];
                            index = 0;
                            _a.label = 3;
                        case 3:
                            if (!(index < stats.shards)) return [3 /*break*/, 6];
                            cacheKey = (0, generate_cache_key_1.generateCacheKeyFromParams)('context', 'shardBlockNonce', index);
                            return [4 /*yield*/, this.cachingService.set(cacheKey, shardsNonces[index], sdk_nestjs_common_1.Constants.oneMinute())];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5:
                            index++;
                            return [3 /*break*/, 3];
                        case 6: return [4 /*yield*/, this.deleteCacheKeys(invalidatedKeys)];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CacheWarmerService_1.prototype.deleteCacheKeys = function (invalidatedKeys) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.pubSub.publish('deleteCacheKeys', invalidatedKeys)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return CacheWarmerService_1;
    }());
    __setFunctionName(_classThis, "CacheWarmerService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _cacheCurrentEpoch_decorators = [(0, schedule_1.Cron)('*/6 * * * * *')];
        _cacheGuest_decorators = [(0, schedule_1.Cron)('*/6 * * * * *')];
        _cacheShardCurrentBlockNonce_decorators = [(0, schedule_1.Cron)('*/6 * * * * *')];
        __esDecorate(_classThis, null, _cacheCurrentEpoch_decorators, { kind: "method", name: "cacheCurrentEpoch", static: false, private: false, access: { has: function (obj) { return "cacheCurrentEpoch" in obj; }, get: function (obj) { return obj.cacheCurrentEpoch; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _cacheGuest_decorators, { kind: "method", name: "cacheGuest", static: false, private: false, access: { has: function (obj) { return "cacheGuest" in obj; }, get: function (obj) { return obj.cacheGuest; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _cacheShardCurrentBlockNonce_decorators, { kind: "method", name: "cacheShardCurrentBlockNonce", static: false, private: false, access: { has: function (obj) { return "cacheShardCurrentBlockNonce" in obj; }, get: function (obj) { return obj.cacheShardCurrentBlockNonce; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CacheWarmerService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CacheWarmerService = _classThis;
}();
exports.CacheWarmerService = CacheWarmerService;
