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
exports.RabbitMqConsumer = void 0;
var common_1 = require("@nestjs/common");
var rabbitmq_consumers_1 = require("./rabbitmq.consumers");
var sdk_exchange_1 = require("@terradharitri/sdk-exchange");
var governance_1 = require("../../utils/governance");
var config_1 = require("../../config");
var RabbitMqConsumer = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _consumeEvents_decorators;
    var RabbitMqConsumer = _classThis = /** @class */ (function () {
        function RabbitMqConsumer_1(energyHandler, governanceHandler, logger) {
            this.energyHandler = (__runInitializers(this, _instanceExtraInitializers), energyHandler);
            this.governanceHandler = governanceHandler;
            this.logger = logger;
        }
        RabbitMqConsumer_1.prototype.consumeEvents = function (rawEvents) {
            return __awaiter(this, void 0, void 0, function () {
                var events, _i, events_1, rawEvent, _a;
                var _this = this;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.logger.info('Start Processing events...');
                            if (!rawEvents.events) {
                                return [2 /*return*/];
                            }
                            events = (_b = rawEvents === null || rawEvents === void 0 ? void 0 : rawEvents.events) === null || _b === void 0 ? void 0 : _b.filter(function (rawEvent) { return _this.isFilteredAddress(rawEvent.address); }).map(function (rawEventType) { return new sdk_exchange_1.RawEvent(rawEventType); });
                            this.data = [];
                            _i = 0, events_1 = events;
                            _c.label = 1;
                        case 1:
                            if (!(_i < events_1.length)) return [3 /*break*/, 7];
                            rawEvent = events_1[_i];
                            if (rawEvent.data === '' && rawEvent.name !== sdk_exchange_1.GOVERNANCE_EVENTS.UP && rawEvent.name !== sdk_exchange_1.GOVERNANCE_EVENTS.DOWN && rawEvent.name !== sdk_exchange_1.GOVERNANCE_EVENTS.ABSTAIN && rawEvent.name !== sdk_exchange_1.GOVERNANCE_EVENTS.DOWN_VETO) {
                                this.logger.info('Event skipped', {
                                    address: rawEvent.address,
                                    identifier: rawEvent.identifier,
                                    name: rawEvent.name,
                                    topics: rawEvent.topics,
                                });
                                return [3 /*break*/, 6];
                            }
                            this.logger.info('Processing event', {
                                address: rawEvent.address,
                                identifier: rawEvent.identifier,
                                name: rawEvent.name,
                                topics: rawEvent.topics,
                            });
                            _a = rawEvent.name;
                            switch (_a) {
                                case sdk_exchange_1.SIMPLE_LOCK_ENERGY_EVENTS.ENERGY_UPDATED: return [3 /*break*/, 2];
                                case sdk_exchange_1.GOVERNANCE_EVENTS.UP: return [3 /*break*/, 4];
                                case sdk_exchange_1.GOVERNANCE_EVENTS.DOWN: return [3 /*break*/, 4];
                                case sdk_exchange_1.GOVERNANCE_EVENTS.DOWN_VETO: return [3 /*break*/, 4];
                                case sdk_exchange_1.GOVERNANCE_EVENTS.ABSTAIN: return [3 /*break*/, 4];
                            }
                            return [3 /*break*/, 6];
                        case 2: return [4 /*yield*/, this.energyHandler.handleUpdateEnergy(new sdk_exchange_1.EnergyEvent(rawEvent))];
                        case 3:
                            _c.sent();
                            return [3 /*break*/, 6];
                        case 4: return [4 /*yield*/, this.governanceHandler.handleGovernanceVoteEvent(new sdk_exchange_1.VoteEvent(rawEvent), rawEvent.name)];
                        case 5:
                            _c.sent();
                            return [3 /*break*/, 6];
                        case 6:
                            _i++;
                            return [3 /*break*/, 1];
                        case 7:
                            this.logger.info('Finish Processing events...');
                            return [2 /*return*/];
                    }
                });
            });
        };
        RabbitMqConsumer_1.prototype.getFilterAddresses = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.filterAddresses = (0, governance_1.governanceContractsAddresses)();
                    this.filterAddresses.push(config_1.scAddress.simpleLockEnergy);
                    return [2 /*return*/];
                });
            });
        };
        RabbitMqConsumer_1.prototype.isFilteredAddress = function (address) {
            return (this.filterAddresses.find(function (filterAddress) { return address === filterAddress; }) !== undefined);
        };
        return RabbitMqConsumer_1;
    }());
    __setFunctionName(_classThis, "RabbitMqConsumer");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _consumeEvents_decorators = [(0, rabbitmq_consumers_1.CompetingRabbitConsumer)({
                queueName: process.env.RABBITMQ_QUEUE, exchange: process.env.RABBITMQ_EXCHANGE,
            })];
        __esDecorate(_classThis, null, _consumeEvents_decorators, { kind: "method", name: "consumeEvents", static: false, private: false, access: { has: function (obj) { return "consumeEvents" in obj; }, get: function (obj) { return obj.consumeEvents; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RabbitMqConsumer = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RabbitMqConsumer = _classThis;
}();
exports.RabbitMqConsumer = RabbitMqConsumer;
