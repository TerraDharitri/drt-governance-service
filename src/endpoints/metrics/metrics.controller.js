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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsController = void 0;
var common_1 = require("@nestjs/common");
var metrics_collector_1 = require("../../utils/metrics.collector");
var MetricsController = function () {
    var _classDecorators = [(0, common_1.Controller)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getMetrics_decorators;
    var _getHello_decorators;
    var _getPairTransactionCount_decorators;
    var _getPairSwapCount_decorators;
    var _getPairAddLiquidityCount_decorators;
    var _getPairRemoveLiquidityCount_decorators;
    var _getPairUniqueUsersCount_decorators;
    var _getPairUserAverageTxCount_decorators;
    var _getFarmTransactionCount_decorators;
    var _getFarmEvents_decorators;
    var _getFarmUniqueUsersCount_decorators;
    var _getFarmUserAverageTxCount_decorators;
    var MetricsController = _classThis = /** @class */ (function () {
        function MetricsController_1(metricsService) {
            this.metricsService = (__runInitializers(this, _instanceExtraInitializers), metricsService);
        }
        MetricsController_1.prototype.getMetrics = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, metrics_collector_1.MetricsCollector.getMetrics()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        MetricsController_1.prototype.getHello = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, 'hello'];
                });
            });
        };
        MetricsController_1.prototype.getPairTransactionCount = function (address) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.metricsService.computeTxCount(address)];
                        case 1: return [2 /*return*/, _b.sent()];
                        case 2:
                            _a = _b.sent();
                            throw new common_1.HttpException('Failed to compute pair tx count', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MetricsController_1.prototype.getPairSwapCount = function (address) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.metricsService.computePairSwapCount(address)];
                        case 1: return [2 /*return*/, _b.sent()];
                        case 2:
                            _a = _b.sent();
                            throw new common_1.HttpException('Failed to compute pair swap count', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MetricsController_1.prototype.getPairAddLiquidityCount = function (address) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.metricsService.computePairAddLiquidityCount(address)];
                        case 1: return [2 /*return*/, _b.sent()];
                        case 2:
                            _a = _b.sent();
                            throw new common_1.HttpException('Failed to compute pair add liquidity count', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MetricsController_1.prototype.getPairRemoveLiquidityCount = function (address) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.metricsService.computePairRemoveLiquidityCount(address)];
                        case 1: return [2 /*return*/, _b.sent()];
                        case 2:
                            _a = _b.sent();
                            throw new common_1.HttpException('Failed to compute pair remove liquidity count', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MetricsController_1.prototype.getPairUniqueUsersCount = function (address) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.metricsService.computeUniqueUsers(address)];
                        case 1: return [2 /*return*/, _b.sent()];
                        case 2:
                            _a = _b.sent();
                            throw new common_1.HttpException('Failed to compute pair unique users count', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MetricsController_1.prototype.getPairUserAverageTxCount = function (address) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.metricsService.computeAvgUserTransactions(address)];
                        case 1: return [2 /*return*/, _b.sent()];
                        case 2:
                            _a = _b.sent();
                            throw new common_1.HttpException('Failed to compute pair user average tx count', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MetricsController_1.prototype.getFarmTransactionCount = function (address) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.metricsService.computeTxCount(address)];
                        case 1: return [2 /*return*/, _b.sent()];
                        case 2:
                            _a = _b.sent();
                            throw new common_1.HttpException('Failed to compute farm tx count', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MetricsController_1.prototype.getFarmEvents = function (address, event) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.metricsService.computeEventsCount(address, event)];
                        case 1: return [2 /*return*/, _b.sent()];
                        case 2:
                            _a = _b.sent();
                            throw new common_1.HttpException('Failed to compute farm events', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MetricsController_1.prototype.getFarmUniqueUsersCount = function (address) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.metricsService.computeUniqueUsers(address)];
                        case 1: return [2 /*return*/, _b.sent()];
                        case 2:
                            _a = _b.sent();
                            throw new common_1.HttpException('Failed to compute farm unique users count', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MetricsController_1.prototype.getFarmUserAverageTxCount = function (address) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.metricsService.computeAvgUserTransactions(address)];
                        case 1: return [2 /*return*/, _b.sent()];
                        case 2:
                            _a = _b.sent();
                            throw new common_1.HttpException('Failed to compute pair user average tx count', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return MetricsController_1;
    }());
    __setFunctionName(_classThis, "MetricsController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getMetrics_decorators = [(0, common_1.Get)('/metrics')];
        _getHello_decorators = [(0, common_1.Get)('/hello')];
        _getPairTransactionCount_decorators = [(0, common_1.Get)('/pair/:address/txcount')];
        _getPairSwapCount_decorators = [(0, common_1.Get)('/pair/:address/swapcount')];
        _getPairAddLiquidityCount_decorators = [(0, common_1.Get)('/pair/:address/addliquiditycount')];
        _getPairRemoveLiquidityCount_decorators = [(0, common_1.Get)('/pair/:address/removeliquiditycount')];
        _getPairUniqueUsersCount_decorators = [(0, common_1.Get)('/pair/:address/uniqueuserscount')];
        _getPairUserAverageTxCount_decorators = [(0, common_1.Get)('/pair/:address/useraveragetxcount')];
        _getFarmTransactionCount_decorators = [(0, common_1.Get)('/farm/:address/txcount')];
        _getFarmEvents_decorators = [(0, common_1.Get)('/events/:address/:event/count')];
        _getFarmUniqueUsersCount_decorators = [(0, common_1.Get)('/farm/:address/uniqueuserscount')];
        _getFarmUserAverageTxCount_decorators = [(0, common_1.Get)('/farm/:address/useraveragetxcount')];
        __esDecorate(_classThis, null, _getMetrics_decorators, { kind: "method", name: "getMetrics", static: false, private: false, access: { has: function (obj) { return "getMetrics" in obj; }, get: function (obj) { return obj.getMetrics; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getHello_decorators, { kind: "method", name: "getHello", static: false, private: false, access: { has: function (obj) { return "getHello" in obj; }, get: function (obj) { return obj.getHello; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPairTransactionCount_decorators, { kind: "method", name: "getPairTransactionCount", static: false, private: false, access: { has: function (obj) { return "getPairTransactionCount" in obj; }, get: function (obj) { return obj.getPairTransactionCount; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPairSwapCount_decorators, { kind: "method", name: "getPairSwapCount", static: false, private: false, access: { has: function (obj) { return "getPairSwapCount" in obj; }, get: function (obj) { return obj.getPairSwapCount; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPairAddLiquidityCount_decorators, { kind: "method", name: "getPairAddLiquidityCount", static: false, private: false, access: { has: function (obj) { return "getPairAddLiquidityCount" in obj; }, get: function (obj) { return obj.getPairAddLiquidityCount; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPairRemoveLiquidityCount_decorators, { kind: "method", name: "getPairRemoveLiquidityCount", static: false, private: false, access: { has: function (obj) { return "getPairRemoveLiquidityCount" in obj; }, get: function (obj) { return obj.getPairRemoveLiquidityCount; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPairUniqueUsersCount_decorators, { kind: "method", name: "getPairUniqueUsersCount", static: false, private: false, access: { has: function (obj) { return "getPairUniqueUsersCount" in obj; }, get: function (obj) { return obj.getPairUniqueUsersCount; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPairUserAverageTxCount_decorators, { kind: "method", name: "getPairUserAverageTxCount", static: false, private: false, access: { has: function (obj) { return "getPairUserAverageTxCount" in obj; }, get: function (obj) { return obj.getPairUserAverageTxCount; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getFarmTransactionCount_decorators, { kind: "method", name: "getFarmTransactionCount", static: false, private: false, access: { has: function (obj) { return "getFarmTransactionCount" in obj; }, get: function (obj) { return obj.getFarmTransactionCount; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getFarmEvents_decorators, { kind: "method", name: "getFarmEvents", static: false, private: false, access: { has: function (obj) { return "getFarmEvents" in obj; }, get: function (obj) { return obj.getFarmEvents; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getFarmUniqueUsersCount_decorators, { kind: "method", name: "getFarmUniqueUsersCount", static: false, private: false, access: { has: function (obj) { return "getFarmUniqueUsersCount" in obj; }, get: function (obj) { return obj.getFarmUniqueUsersCount; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getFarmUserAverageTxCount_decorators, { kind: "method", name: "getFarmUserAverageTxCount", static: false, private: false, access: { has: function (obj) { return "getFarmUserAverageTxCount" in obj; }, get: function (obj) { return obj.getFarmUserAverageTxCount; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MetricsController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MetricsController = _classThis;
}();
exports.MetricsController = MetricsController;
