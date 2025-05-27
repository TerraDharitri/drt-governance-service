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
exports.DRTGatewayService = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("../../config");
var agentkeepalive_1 = require("agentkeepalive");
var axios_1 = require("axios");
var performance_profiler_1 = require("../../utils/performance.profiler");
var metrics_collector_1 = require("../../utils/metrics.collector");
var out_1 = require("@terradharitri/sdk-core/out");
var DRTGatewayService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DRTGatewayService = _classThis = /** @class */ (function () {
        function DRTGatewayService_1(apiConfigService, logger) {
            this.apiConfigService = apiConfigService;
            this.logger = logger;
            var keepAliveOptions = {
                maxSockets: config_1.drtConfig.keepAliveMaxSockets,
                maxFreeSockets: config_1.drtConfig.keepAliveMaxFreeSockets,
                timeout: this.apiConfigService.getKeepAliveTimeoutDownstream(),
                freeSocketTimeout: config_1.drtConfig.keepAliveFreeSocketTimeout,
                keepAlive: true,
            };
            var httpAgent = new agentkeepalive_1.default(keepAliveOptions);
            var httpsAgent = new agentkeepalive_1.HttpsAgent(keepAliveOptions);
            this.url = process.env.DRT_GATEWAY_URL;
            this.config = {
                timeout: config_1.drtConfig.proxyTimeout,
                httpAgent: config_1.drtConfig.keepAlive ? httpAgent : null,
                httpsAgent: config_1.drtConfig.keepAlive ? httpsAgent : null,
            };
        }
        DRTGatewayService_1.prototype.getSCStorageKey = function (address, key) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.doGetGeneric(this.getSCStorageKey.name, "address/".concat(address, "/key/").concat(Buffer.from(key).toString('hex')), function (response) { return response.data.value; })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        DRTGatewayService_1.prototype.getSCStorageKeys = function (address, keys) {
            return __awaiter(this, void 0, void 0, function () {
                var fullKey, _i, keys_1, key, uri, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fullKey = '';
                            for (_i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                key = keys_1[_i];
                                switch (typeof key) {
                                    case 'number':
                                        fullKey = fullKey.concat(key.toString(16).padStart(8, '0'));
                                        break;
                                    case 'string':
                                        fullKey = fullKey.concat(Buffer.from(key).toString('hex'));
                                        break;
                                    case 'object':
                                        if (key instanceof out_1.Address) {
                                            fullKey = fullKey.concat(key.hex());
                                            break;
                                        }
                                        break;
                                }
                            }
                            uri = fullKey !== ''
                                ? "address/".concat(address, "/key/").concat(fullKey)
                                : "address/".concat(address, "/keys");
                            return [4 /*yield*/, this.doGetGeneric(this.getSCStorageKey.name, uri, function (response) { return response.data; })];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, fullKey !== '' ? response.value : response.pairs];
                    }
                });
            });
        };
        /**
         * Get method that receives the resource url and on callback the method used to map the response.
         */
        DRTGatewayService_1.prototype.doGetGeneric = function (name, resourceUrl, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.doGet(name, resourceUrl)];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, callback(response)];
                    }
                });
            });
        };
        DRTGatewayService_1.prototype.doGet = function (name, resourceUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var profiler, url, response, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            profiler = new performance_profiler_1.PerformanceProfiler("".concat(name, " ").concat(resourceUrl));
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, 4, 5]);
                            url = "".concat(this.url, "/").concat(resourceUrl);
                            return [4 /*yield*/, axios_1.default.get(url, this.config)];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response.data];
                        case 3:
                            error_1 = _a.sent();
                            this.handleApiError(error_1, resourceUrl);
                            return [3 /*break*/, 5];
                        case 4:
                            profiler.stop();
                            metrics_collector_1.MetricsCollector.setExternalCall(DRTGatewayService.name, name, profiler.duration);
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        DRTGatewayService_1.prototype.handleApiError = function (error, resourceUrl) {
            if (!error.response) {
                this.logger.warn(error);
                throw new Error("Cannot GET ".concat(resourceUrl, ": [").concat(error, "]"));
            }
            var errorData = error.response.data;
            var originalErrorMessage = errorData.error || errorData.message || JSON.stringify(errorData);
            throw new Error("Cannot GET ".concat(resourceUrl, ": [").concat(originalErrorMessage, "]"));
        };
        return DRTGatewayService_1;
    }());
    __setFunctionName(_classThis, "DRTGatewayService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DRTGatewayService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DRTGatewayService = _classThis;
}();
exports.DRTGatewayService = DRTGatewayService;
