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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMqModule = void 0;
var nestjs_rabbitmq_1 = require("@golevelup/nestjs-rabbitmq");
var common_1 = require("@nestjs/common");
var common_app_module_1 = require("../../common.app.module");
var rabbitmq_consumer_1 = require("./rabbitmq.consumer");
var drt_communication_module_1 = require("src/services/dharitri-communication/drt.communication.module");
var context_module_1 = require("../../services/context/context.module");
var token_module_1 = require("../tokens/token.module");
var energy_handler_service_1 = require("./handlers/energy.handler.service");
var energy_module_1 = require("../energy/energy.module");
var governance_handler_service_1 = require("./handlers/governance.handler.service");
var governance_module_1 = require("../governance/governance.module");
var RabbitMqModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                common_app_module_1.CommonAppModule,
                drt_communication_module_1.MXCommunicationModule,
                context_module_1.ContextModule,
                token_module_1.TokenModule,
                energy_module_1.EnergyModule,
                governance_module_1.GovernanceModule,
            ],
            providers: [
                rabbitmq_consumer_1.RabbitMqConsumer,
                energy_handler_service_1.EnergyHandler,
                governance_handler_service_1.GovernanceHandlerService,
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var RabbitMqModule = _classThis = /** @class */ (function () {
        function RabbitMqModule_1() {
        }
        RabbitMqModule_1.register = function () {
            return {
                module: RabbitMqModule,
                imports: [
                    nestjs_rabbitmq_1.RabbitMQModule.forRootAsync(nestjs_rabbitmq_1.RabbitMQModule, {
                        useFactory: function () {
                            return {
                                name: process.env.RABBITMQ_EXCHANGE,
                                type: 'fanout',
                                options: {},
                                uri: process.env.RABBITMQ_URL,
                                prefetchCount: 1,
                            };
                        },
                    }),
                ],
            };
        };
        return RabbitMqModule_1;
    }());
    __setFunctionName(_classThis, "RabbitMqModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RabbitMqModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RabbitMqModule = _classThis;
}();
exports.RabbitMqModule = RabbitMqModule;
