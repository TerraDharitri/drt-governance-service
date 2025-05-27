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
exports.RemoteConfigController = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("mongoose");
var native_admin_guard_1 = require("../auth/native.admin.guard");
var RemoteConfigController = function () {
    var _classDecorators = [(0, common_1.Controller)('remote-config')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _addRemoteConfigFlag_decorators;
    var _updateRemoteConfigFlag_decorators;
    var _getRemoteConfigFlags_decorators;
    var _getRemoteConfigFlag_decorators;
    var _deleteRemoteConfigFlag_decorators;
    var _deleteCacheKeys_decorators;
    var _getCacheKeys_decorators;
    var RemoteConfigController = _classThis = /** @class */ (function () {
        function RemoteConfigController_1(flagRepositoryService, remoteConfigSetterService, cacheService, pubSub) {
            this.flagRepositoryService = (__runInitializers(this, _instanceExtraInitializers), flagRepositoryService);
            this.remoteConfigSetterService = remoteConfigSetterService;
            this.cacheService = cacheService;
            this.pubSub = pubSub;
        }
        RemoteConfigController_1.prototype.addRemoteConfigFlag = function (flag, res) {
            return __awaiter(this, void 0, void 0, function () {
                var result, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            if (!(flag.name && flag.value != null)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.flagRepositoryService.create(flag)];
                        case 1:
                            result = _a.sent();
                            this.remoteConfigSetterService.setFlag(result.name, result.value);
                            return [2 /*return*/, res.status(201).send(result)];
                        case 2: return [2 /*return*/, res
                                .status(500)
                                .send('Flag name & value not found or not in application/json format.')];
                        case 3:
                            error_1 = _a.sent();
                            return [2 /*return*/, res.status(500).send(error_1.message)];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        RemoteConfigController_1.prototype.updateRemoteConfigFlag = function (flag, res) {
            return __awaiter(this, void 0, void 0, function () {
                var result, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            if (!(flag.name && flag.value != null)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.flagRepositoryService.findOneAndUpdate({ name: flag.name }, flag)];
                        case 1:
                            result = _a.sent();
                            if (!result) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.remoteConfigSetterService.setFlag(result.name, result.value)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, res.status(201).send(result)];
                        case 3: return [2 /*return*/, res.status(404)];
                        case 4: return [2 /*return*/, res
                                .status(500)
                                .send('Flag name & value not found or not in application/json format.')];
                        case 5:
                            error_2 = _a.sent();
                            return [2 /*return*/, res.status(500).send(error_2.message)];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        RemoteConfigController_1.prototype.getRemoteConfigFlags = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.flagRepositoryService.find({})];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        RemoteConfigController_1.prototype.getRemoteConfigFlag = function (nameOrID, res) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.flagRepositoryService
                                .findOne(mongoose_1.default.Types.ObjectId.isValid(nameOrID)
                                ? { _id: nameOrID }
                                : { name: nameOrID })
                                .then(function (result) {
                                if (result)
                                    return res.status(200).send(result);
                                return res.status(404).send();
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        RemoteConfigController_1.prototype.deleteRemoteConfigFlag = function (nameOrID) {
            return __awaiter(this, void 0, void 0, function () {
                var flag;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.flagRepositoryService.findOneAndDelete(mongoose_1.default.Types.ObjectId.isValid(nameOrID)
                                ? { _id: nameOrID }
                                : { name: nameOrID })];
                        case 1:
                            flag = _a.sent();
                            if (!flag) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.remoteConfigSetterService.deleteFlag(flag.name)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 3: return [2 /*return*/, false];
                    }
                });
            });
        };
        RemoteConfigController_1.prototype.deleteCacheKeys = function (cacheKeys, res) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, key;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _i = 0, _a = cacheKeys.keys;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            key = _a[_i];
                            return [4 /*yield*/, this.cacheService.deleteInCache(key)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [4 /*yield*/, this.pubSub.publish('deleteCacheKeys', cacheKeys.keys)];
                        case 5:
                            _b.sent();
                            return [2 /*return*/, res.status(200).send()];
                    }
                });
            });
        };
        RemoteConfigController_1.prototype.getCacheKeys = function (cacheKeys, res) {
            return __awaiter(this, void 0, void 0, function () {
                var keys, _i, _a, key, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            keys = [];
                            _i = 0, _a = cacheKeys.keys;
                            _d.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            key = _a[_i];
                            _c = (_b = keys).push;
                            return [4 /*yield*/, this.cacheService.get(key)];
                        case 2:
                            _c.apply(_b, [_d.sent()]);
                            _d.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/, res.status(200).send(keys)];
                    }
                });
            });
        };
        return RemoteConfigController_1;
    }());
    __setFunctionName(_classThis, "RemoteConfigController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _addRemoteConfigFlag_decorators = [(0, common_1.UseGuards)(native_admin_guard_1.NativeAdminGuard), (0, common_1.Post)('/flags')];
        _updateRemoteConfigFlag_decorators = [(0, common_1.UseGuards)(native_admin_guard_1.NativeAdminGuard), (0, common_1.Put)('/flags')];
        _getRemoteConfigFlags_decorators = [(0, common_1.UseGuards)(native_admin_guard_1.NativeAdminGuard), (0, common_1.Get)('/flags')];
        _getRemoteConfigFlag_decorators = [(0, common_1.UseGuards)(native_admin_guard_1.NativeAdminGuard), (0, common_1.Get)('/flags/:nameOrID')];
        _deleteRemoteConfigFlag_decorators = [(0, common_1.UseGuards)(native_admin_guard_1.NativeAdminGuard), (0, common_1.Delete)('/flags/:nameOrID')];
        _deleteCacheKeys_decorators = [(0, common_1.UseGuards)(native_admin_guard_1.NativeAdminGuard), (0, common_1.Post)('/cache/delete-keys')];
        _getCacheKeys_decorators = [(0, common_1.UseGuards)(native_admin_guard_1.NativeAdminGuard), (0, common_1.Post)('/cache/get-keys')];
        __esDecorate(_classThis, null, _addRemoteConfigFlag_decorators, { kind: "method", name: "addRemoteConfigFlag", static: false, private: false, access: { has: function (obj) { return "addRemoteConfigFlag" in obj; }, get: function (obj) { return obj.addRemoteConfigFlag; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateRemoteConfigFlag_decorators, { kind: "method", name: "updateRemoteConfigFlag", static: false, private: false, access: { has: function (obj) { return "updateRemoteConfigFlag" in obj; }, get: function (obj) { return obj.updateRemoteConfigFlag; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getRemoteConfigFlags_decorators, { kind: "method", name: "getRemoteConfigFlags", static: false, private: false, access: { has: function (obj) { return "getRemoteConfigFlags" in obj; }, get: function (obj) { return obj.getRemoteConfigFlags; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getRemoteConfigFlag_decorators, { kind: "method", name: "getRemoteConfigFlag", static: false, private: false, access: { has: function (obj) { return "getRemoteConfigFlag" in obj; }, get: function (obj) { return obj.getRemoteConfigFlag; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteRemoteConfigFlag_decorators, { kind: "method", name: "deleteRemoteConfigFlag", static: false, private: false, access: { has: function (obj) { return "deleteRemoteConfigFlag" in obj; }, get: function (obj) { return obj.deleteRemoteConfigFlag; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteCacheKeys_decorators, { kind: "method", name: "deleteCacheKeys", static: false, private: false, access: { has: function (obj) { return "deleteCacheKeys" in obj; }, get: function (obj) { return obj.deleteCacheKeys; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getCacheKeys_decorators, { kind: "method", name: "getCacheKeys", static: false, private: false, access: { has: function (obj) { return "getCacheKeys" in obj; }, get: function (obj) { return obj.getCacheKeys; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RemoteConfigController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RemoteConfigController = _classThis;
}();
exports.RemoteConfigController = RemoteConfigController;
