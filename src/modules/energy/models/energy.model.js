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
exports.EnergyModel = exports.UnlockType = void 0;
var graphql_1 = require("@nestjs/graphql");
var UnlockType;
(function (UnlockType) {
    UnlockType[UnlockType["TERM_UNLOCK"] = 0] = "TERM_UNLOCK";
    UnlockType[UnlockType["EARLY_UNLOCK"] = 1] = "EARLY_UNLOCK";
    UnlockType[UnlockType["REDUCE_PERIOD"] = 2] = "REDUCE_PERIOD";
})(UnlockType || (exports.UnlockType = UnlockType = {}));
(0, graphql_1.registerEnumType)(UnlockType, {
    name: 'UnlockType',
});
var EnergyModel = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _lastUpdateEpoch_decorators;
    var _lastUpdateEpoch_initializers = [];
    var _lastUpdateEpoch_extraInitializers = [];
    var _totalLockedTokens_decorators;
    var _totalLockedTokens_initializers = [];
    var _totalLockedTokens_extraInitializers = [];
    var EnergyModel = _classThis = /** @class */ (function () {
        function EnergyModel_1(init) {
            this.amount = __runInitializers(this, _amount_initializers, void 0);
            this.lastUpdateEpoch = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _lastUpdateEpoch_initializers, void 0));
            this.totalLockedTokens = (__runInitializers(this, _lastUpdateEpoch_extraInitializers), __runInitializers(this, _totalLockedTokens_initializers, void 0));
            __runInitializers(this, _totalLockedTokens_extraInitializers);
            Object.assign(this, init);
        }
        return EnergyModel_1;
    }());
    __setFunctionName(_classThis, "EnergyModel");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _amount_decorators = [(0, graphql_1.Field)()];
        _lastUpdateEpoch_decorators = [(0, graphql_1.Field)(function () { return graphql_1.Int; })];
        _totalLockedTokens_decorators = [(0, graphql_1.Field)()];
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _lastUpdateEpoch_decorators, { kind: "field", name: "lastUpdateEpoch", static: false, private: false, access: { has: function (obj) { return "lastUpdateEpoch" in obj; }, get: function (obj) { return obj.lastUpdateEpoch; }, set: function (obj, value) { obj.lastUpdateEpoch = value; } }, metadata: _metadata }, _lastUpdateEpoch_initializers, _lastUpdateEpoch_extraInitializers);
        __esDecorate(null, null, _totalLockedTokens_decorators, { kind: "field", name: "totalLockedTokens", static: false, private: false, access: { has: function (obj) { return "totalLockedTokens" in obj; }, get: function (obj) { return obj.totalLockedTokens; }, set: function (obj, value) { obj.totalLockedTokens = value; } }, metadata: _metadata }, _totalLockedTokens_initializers, _totalLockedTokens_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EnergyModel = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EnergyModel = _classThis;
}();
exports.EnergyModel = EnergyModel;
