"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestCachingMiddleware = void 0;
var common_1 = require("@nestjs/common");
var moment_1 = require("moment");
var crypto = require("crypto");
var sdk_nestjs_common_1 = require("@terradharitri/sdk-nestjs-common");
var metrics_collector_1 = require("../utils/metrics.collector");
var config_1 = require("../config");
var GuestCachingMiddleware = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var GuestCachingMiddleware = _classThis = /** @class */ (function () {
        function GuestCachingMiddleware_1(cacheService) {
            this.cacheService = cacheService;
            this.cacheHitsCounter = {};
        }
        GuestCachingMiddleware_1.prototype.use = function (req, res, next) {
            return __awaiter(this, void 0, void 0, function () {
                var prefix, dateFormat, currentMinute, previousMinute, gqlQueryMd5, redisQueryKey, redisQueryResponse, batchSize, isFirstEntryForThisKey, cacheHitsCurrentMinute, redisCounterKey, operation, cacheResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (req.headers['authorization'] || req.headers['no-cache'] === 'true') {
                                // If user is logged in or no-cache header present -> skip cache
                                return [2 /*return*/, next()];
                            }
                            prefix = 'guestCache';
                            dateFormat = 'YYYY-MM-DD_HH:mm';
                            currentMinute = (0, moment_1.default)().format(dateFormat);
                            previousMinute = (0, moment_1.default)().subtract(1, 'minute').format(dateFormat);
                            gqlQueryMd5 = crypto.createHash('md5').update(JSON.stringify(req.body)).digest('hex');
                            redisQueryKey = "".concat(prefix, ".").concat(gqlQueryMd5, ".body");
                            redisQueryResponse = "".concat(prefix, ".").concat(gqlQueryMd5, ".response");
                            batchSize = Number(process.env.GUEST_CACHE_REDIS_BATCH_SIZE) || 3;
                            isFirstEntryForThisKey = false;
                            if (!this.cacheHitsCounter[currentMinute]) {
                                isFirstEntryForThisKey = true;
                                this.cacheHitsCounter[currentMinute] = {};
                            }
                            cacheHitsCurrentMinute = this.cacheHitsCounter[currentMinute];
                            if (!cacheHitsCurrentMinute[gqlQueryMd5]) {
                                cacheHitsCurrentMinute[gqlQueryMd5] = 0;
                            }
                            if (cacheHitsCurrentMinute[gqlQueryMd5] < batchSize) {
                                cacheHitsCurrentMinute[gqlQueryMd5]++;
                            }
                            else {
                                cacheHitsCurrentMinute[gqlQueryMd5] = 1;
                            }
                            redisCounterKey = "".concat(prefix, ".").concat(currentMinute);
                            if (!(cacheHitsCurrentMinute[gqlQueryMd5] >= batchSize)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.cacheService.getOrSet(redisQueryKey, function () { return Promise.resolve(req.body); }, config_1.cacheConfig.default)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.cacheService.zIncrementRemote(redisCounterKey, cacheHitsCurrentMinute[gqlQueryMd5], gqlQueryMd5)];
                        case 2:
                            _a.sent();
                            operation = req.body['operationName'];
                            metrics_collector_1.MetricsCollector.incrementGuestQueries(operation, cacheHitsCurrentMinute[gqlQueryMd5]);
                            _a.label = 3;
                        case 3:
                            if (!isFirstEntryForThisKey) return [3 /*break*/, 6];
                            // If it is first entry for this key, set expire
                            return [4 /*yield*/, this.cacheService.zIncrementRemote(redisCounterKey, 0, gqlQueryMd5)];
                        case 4:
                            // If it is first entry for this key, set expire
                            _a.sent();
                            return [4 /*yield*/, this.cacheService.setTtlRemote(redisCounterKey, 2 * sdk_nestjs_common_1.Constants.oneMinute())];
                        case 5:
                            _a.sent();
                            _a.label = 6;
                        case 6: return [4 /*yield*/, this.cacheService.get(redisQueryResponse)];
                        case 7:
                            cacheResponse = _a.sent();
                            res.setHeader('X-Guest-Cache-Hit', !!cacheResponse);
                            // Delete data for previous minute
                            if (this.cacheHitsCounter[previousMinute]) {
                                delete this.cacheHitsCounter[previousMinute];
                            }
                            if (cacheResponse) {
                                metrics_collector_1.MetricsCollector.incrementGuestHits();
                                return [2 /*return*/, res.json(cacheResponse)];
                            }
                            else {
                                metrics_collector_1.MetricsCollector.incrementGuestNoCacheHits();
                            }
                            return [2 /*return*/, next()];
                    }
                });
            });
        };
        return GuestCachingMiddleware_1;
    }());
    __setFunctionName(_classThis, "GuestCachingMiddleware");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GuestCachingMiddleware = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GuestCachingMiddleware = _classThis;
}();
exports.GuestCachingMiddleware = GuestCachingMiddleware;
