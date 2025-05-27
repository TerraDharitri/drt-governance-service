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
exports.GovernanceAction = void 0;
var graphql_1 = require("@nestjs/graphql");
var GovernanceAction = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _gasLimit_decorators;
    var _gasLimit_initializers = [];
    var _gasLimit_extraInitializers = [];
    var _destAddress_decorators;
    var _destAddress_initializers = [];
    var _destAddress_extraInitializers = [];
    var _functionName_decorators;
    var _functionName_initializers = [];
    var _functionName_extraInitializers = [];
    var _arguments_decorators;
    var _arguments_initializers = [];
    var _arguments_extraInitializers = [];
    var GovernanceAction = _classThis = /** @class */ (function () {
        function GovernanceAction_1(init) {
            this.gasLimit = __runInitializers(this, _gasLimit_initializers, void 0);
            this.destAddress = (__runInitializers(this, _gasLimit_extraInitializers), __runInitializers(this, _destAddress_initializers, void 0));
            this.functionName = (__runInitializers(this, _destAddress_extraInitializers), __runInitializers(this, _functionName_initializers, void 0));
            this.arguments = (__runInitializers(this, _functionName_extraInitializers), __runInitializers(this, _arguments_initializers, void 0));
            __runInitializers(this, _arguments_extraInitializers);
            Object.assign(this, init);
        }
        return GovernanceAction_1;
    }());
    __setFunctionName(_classThis, "GovernanceAction");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _gasLimit_decorators = [(0, graphql_1.Field)(function () { return graphql_1.Int; })];
        _destAddress_decorators = [(0, graphql_1.Field)()];
        _functionName_decorators = [(0, graphql_1.Field)()];
        _arguments_decorators = [(0, graphql_1.Field)(function () { return [String]; })];
        __esDecorate(null, null, _gasLimit_decorators, { kind: "field", name: "gasLimit", static: false, private: false, access: { has: function (obj) { return "gasLimit" in obj; }, get: function (obj) { return obj.gasLimit; }, set: function (obj, value) { obj.gasLimit = value; } }, metadata: _metadata }, _gasLimit_initializers, _gasLimit_extraInitializers);
        __esDecorate(null, null, _destAddress_decorators, { kind: "field", name: "destAddress", static: false, private: false, access: { has: function (obj) { return "destAddress" in obj; }, get: function (obj) { return obj.destAddress; }, set: function (obj, value) { obj.destAddress = value; } }, metadata: _metadata }, _destAddress_initializers, _destAddress_extraInitializers);
        __esDecorate(null, null, _functionName_decorators, { kind: "field", name: "functionName", static: false, private: false, access: { has: function (obj) { return "functionName" in obj; }, get: function (obj) { return obj.functionName; }, set: function (obj, value) { obj.functionName = value; } }, metadata: _metadata }, _functionName_initializers, _functionName_extraInitializers);
        __esDecorate(null, null, _arguments_decorators, { kind: "field", name: "arguments", static: false, private: false, access: { has: function (obj) { return "arguments" in obj; }, get: function (obj) { return obj.arguments; }, set: function (obj, value) { obj.arguments = value; } }, metadata: _metadata }, _arguments_initializers, _arguments_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GovernanceAction = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GovernanceAction = _classThis;
}();
exports.GovernanceAction = GovernanceAction;
