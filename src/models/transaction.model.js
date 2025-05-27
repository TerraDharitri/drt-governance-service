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
exports.TransactionModel = void 0;
var graphql_1 = require("@nestjs/graphql");
var TransactionModel = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _nonce_decorators;
    var _nonce_initializers = [];
    var _nonce_extraInitializers = [];
    var _value_decorators;
    var _value_initializers = [];
    var _value_extraInitializers = [];
    var _sender_decorators;
    var _sender_initializers = [];
    var _sender_extraInitializers = [];
    var _receiver_decorators;
    var _receiver_initializers = [];
    var _receiver_extraInitializers = [];
    var _senderUsername_decorators;
    var _senderUsername_initializers = [];
    var _senderUsername_extraInitializers = [];
    var _receiverUsername_decorators;
    var _receiverUsername_initializers = [];
    var _receiverUsername_extraInitializers = [];
    var _gasPrice_decorators;
    var _gasPrice_initializers = [];
    var _gasPrice_extraInitializers = [];
    var _gasLimit_decorators;
    var _gasLimit_initializers = [];
    var _gasLimit_extraInitializers = [];
    var _data_decorators;
    var _data_initializers = [];
    var _data_extraInitializers = [];
    var _chainID_decorators;
    var _chainID_initializers = [];
    var _chainID_extraInitializers = [];
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    var _options_decorators;
    var _options_initializers = [];
    var _options_extraInitializers = [];
    var _guardian_decorators;
    var _guardian_initializers = [];
    var _guardian_extraInitializers = [];
    var _signature_decorators;
    var _signature_initializers = [];
    var _signature_extraInitializers = [];
    var _guardianSignature_decorators;
    var _guardianSignature_initializers = [];
    var _guardianSignature_extraInitializers = [];
    var TransactionModel = _classThis = /** @class */ (function () {
        function TransactionModel_1(init) {
            this.nonce = __runInitializers(this, _nonce_initializers, void 0);
            this.value = (__runInitializers(this, _nonce_extraInitializers), __runInitializers(this, _value_initializers, void 0));
            this.sender = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _sender_initializers, void 0));
            this.receiver = (__runInitializers(this, _sender_extraInitializers), __runInitializers(this, _receiver_initializers, void 0));
            this.senderUsername = (__runInitializers(this, _receiver_extraInitializers), __runInitializers(this, _senderUsername_initializers, void 0));
            this.receiverUsername = (__runInitializers(this, _senderUsername_extraInitializers), __runInitializers(this, _receiverUsername_initializers, void 0));
            this.gasPrice = (__runInitializers(this, _receiverUsername_extraInitializers), __runInitializers(this, _gasPrice_initializers, void 0));
            this.gasLimit = (__runInitializers(this, _gasPrice_extraInitializers), __runInitializers(this, _gasLimit_initializers, void 0));
            this.data = (__runInitializers(this, _gasLimit_extraInitializers), __runInitializers(this, _data_initializers, void 0));
            this.chainID = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _chainID_initializers, void 0));
            this.version = (__runInitializers(this, _chainID_extraInitializers), __runInitializers(this, _version_initializers, void 0));
            this.options = (__runInitializers(this, _version_extraInitializers), __runInitializers(this, _options_initializers, void 0));
            this.guardian = (__runInitializers(this, _options_extraInitializers), __runInitializers(this, _guardian_initializers, void 0));
            this.signature = (__runInitializers(this, _guardian_extraInitializers), __runInitializers(this, _signature_initializers, void 0));
            this.guardianSignature = (__runInitializers(this, _signature_extraInitializers), __runInitializers(this, _guardianSignature_initializers, void 0));
            __runInitializers(this, _guardianSignature_extraInitializers);
            Object.assign(this, init);
        }
        return TransactionModel_1;
    }());
    __setFunctionName(_classThis, "TransactionModel");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _nonce_decorators = [(0, graphql_1.Field)()];
        _value_decorators = [(0, graphql_1.Field)()];
        _sender_decorators = [(0, graphql_1.Field)()];
        _receiver_decorators = [(0, graphql_1.Field)()];
        _senderUsername_decorators = [(0, graphql_1.Field)({ nullable: true })];
        _receiverUsername_decorators = [(0, graphql_1.Field)({ nullable: true })];
        _gasPrice_decorators = [(0, graphql_1.Field)()];
        _gasLimit_decorators = [(0, graphql_1.Field)()];
        _data_decorators = [(0, graphql_1.Field)({ nullable: true })];
        _chainID_decorators = [(0, graphql_1.Field)()];
        _version_decorators = [(0, graphql_1.Field)()];
        _options_decorators = [(0, graphql_1.Field)({ nullable: true })];
        _guardian_decorators = [(0, graphql_1.Field)({ nullable: true })];
        _signature_decorators = [(0, graphql_1.Field)({ nullable: true })];
        _guardianSignature_decorators = [(0, graphql_1.Field)({ nullable: true })];
        __esDecorate(null, null, _nonce_decorators, { kind: "field", name: "nonce", static: false, private: false, access: { has: function (obj) { return "nonce" in obj; }, get: function (obj) { return obj.nonce; }, set: function (obj, value) { obj.nonce = value; } }, metadata: _metadata }, _nonce_initializers, _nonce_extraInitializers);
        __esDecorate(null, null, _value_decorators, { kind: "field", name: "value", static: false, private: false, access: { has: function (obj) { return "value" in obj; }, get: function (obj) { return obj.value; }, set: function (obj, value) { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
        __esDecorate(null, null, _sender_decorators, { kind: "field", name: "sender", static: false, private: false, access: { has: function (obj) { return "sender" in obj; }, get: function (obj) { return obj.sender; }, set: function (obj, value) { obj.sender = value; } }, metadata: _metadata }, _sender_initializers, _sender_extraInitializers);
        __esDecorate(null, null, _receiver_decorators, { kind: "field", name: "receiver", static: false, private: false, access: { has: function (obj) { return "receiver" in obj; }, get: function (obj) { return obj.receiver; }, set: function (obj, value) { obj.receiver = value; } }, metadata: _metadata }, _receiver_initializers, _receiver_extraInitializers);
        __esDecorate(null, null, _senderUsername_decorators, { kind: "field", name: "senderUsername", static: false, private: false, access: { has: function (obj) { return "senderUsername" in obj; }, get: function (obj) { return obj.senderUsername; }, set: function (obj, value) { obj.senderUsername = value; } }, metadata: _metadata }, _senderUsername_initializers, _senderUsername_extraInitializers);
        __esDecorate(null, null, _receiverUsername_decorators, { kind: "field", name: "receiverUsername", static: false, private: false, access: { has: function (obj) { return "receiverUsername" in obj; }, get: function (obj) { return obj.receiverUsername; }, set: function (obj, value) { obj.receiverUsername = value; } }, metadata: _metadata }, _receiverUsername_initializers, _receiverUsername_extraInitializers);
        __esDecorate(null, null, _gasPrice_decorators, { kind: "field", name: "gasPrice", static: false, private: false, access: { has: function (obj) { return "gasPrice" in obj; }, get: function (obj) { return obj.gasPrice; }, set: function (obj, value) { obj.gasPrice = value; } }, metadata: _metadata }, _gasPrice_initializers, _gasPrice_extraInitializers);
        __esDecorate(null, null, _gasLimit_decorators, { kind: "field", name: "gasLimit", static: false, private: false, access: { has: function (obj) { return "gasLimit" in obj; }, get: function (obj) { return obj.gasLimit; }, set: function (obj, value) { obj.gasLimit = value; } }, metadata: _metadata }, _gasLimit_initializers, _gasLimit_extraInitializers);
        __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
        __esDecorate(null, null, _chainID_decorators, { kind: "field", name: "chainID", static: false, private: false, access: { has: function (obj) { return "chainID" in obj; }, get: function (obj) { return obj.chainID; }, set: function (obj, value) { obj.chainID = value; } }, metadata: _metadata }, _chainID_initializers, _chainID_extraInitializers);
        __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
        __esDecorate(null, null, _options_decorators, { kind: "field", name: "options", static: false, private: false, access: { has: function (obj) { return "options" in obj; }, get: function (obj) { return obj.options; }, set: function (obj, value) { obj.options = value; } }, metadata: _metadata }, _options_initializers, _options_extraInitializers);
        __esDecorate(null, null, _guardian_decorators, { kind: "field", name: "guardian", static: false, private: false, access: { has: function (obj) { return "guardian" in obj; }, get: function (obj) { return obj.guardian; }, set: function (obj, value) { obj.guardian = value; } }, metadata: _metadata }, _guardian_initializers, _guardian_extraInitializers);
        __esDecorate(null, null, _signature_decorators, { kind: "field", name: "signature", static: false, private: false, access: { has: function (obj) { return "signature" in obj; }, get: function (obj) { return obj.signature; }, set: function (obj, value) { obj.signature = value; } }, metadata: _metadata }, _signature_initializers, _signature_extraInitializers);
        __esDecorate(null, null, _guardianSignature_decorators, { kind: "field", name: "guardianSignature", static: false, private: false, access: { has: function (obj) { return "guardianSignature" in obj; }, get: function (obj) { return obj.guardianSignature; }, set: function (obj, value) { obj.guardianSignature = value; } }, metadata: _metadata }, _guardianSignature_initializers, _guardianSignature_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TransactionModel = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TransactionModel = _classThis;
}();
exports.TransactionModel = TransactionModel;
