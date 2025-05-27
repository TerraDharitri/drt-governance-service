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
exports.ProposalVotes = void 0;
var graphql_1 = require("@nestjs/graphql");
var ProposalVotes = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _upVotes_decorators;
    var _upVotes_initializers = [];
    var _upVotes_extraInitializers = [];
    var _downVotes_decorators;
    var _downVotes_initializers = [];
    var _downVotes_extraInitializers = [];
    var _downVetoVotes_decorators;
    var _downVetoVotes_initializers = [];
    var _downVetoVotes_extraInitializers = [];
    var _abstainVotes_decorators;
    var _abstainVotes_initializers = [];
    var _abstainVotes_extraInitializers = [];
    var _totalVotes_decorators;
    var _totalVotes_initializers = [];
    var _totalVotes_extraInitializers = [];
    var _upPercentage_decorators;
    var _upPercentage_initializers = [];
    var _upPercentage_extraInitializers = [];
    var _downPercentage_decorators;
    var _downPercentage_initializers = [];
    var _downPercentage_extraInitializers = [];
    var _downVetoPercentage_decorators;
    var _downVetoPercentage_initializers = [];
    var _downVetoPercentage_extraInitializers = [];
    var _abstainPercentage_decorators;
    var _abstainPercentage_initializers = [];
    var _abstainPercentage_extraInitializers = [];
    var _quorum_decorators;
    var _quorum_initializers = [];
    var _quorum_extraInitializers = [];
    var ProposalVotes = _classThis = /** @class */ (function () {
        function ProposalVotes_1(init) {
            this.upVotes = __runInitializers(this, _upVotes_initializers, void 0);
            this.downVotes = (__runInitializers(this, _upVotes_extraInitializers), __runInitializers(this, _downVotes_initializers, void 0));
            this.downVetoVotes = (__runInitializers(this, _downVotes_extraInitializers), __runInitializers(this, _downVetoVotes_initializers, void 0));
            this.abstainVotes = (__runInitializers(this, _downVetoVotes_extraInitializers), __runInitializers(this, _abstainVotes_initializers, void 0));
            this.totalVotes = (__runInitializers(this, _abstainVotes_extraInitializers), __runInitializers(this, _totalVotes_initializers, void 0));
            this.upPercentage = (__runInitializers(this, _totalVotes_extraInitializers), __runInitializers(this, _upPercentage_initializers, void 0));
            this.downPercentage = (__runInitializers(this, _upPercentage_extraInitializers), __runInitializers(this, _downPercentage_initializers, void 0));
            this.downVetoPercentage = (__runInitializers(this, _downPercentage_extraInitializers), __runInitializers(this, _downVetoPercentage_initializers, void 0));
            this.abstainPercentage = (__runInitializers(this, _downVetoPercentage_extraInitializers), __runInitializers(this, _abstainPercentage_initializers, void 0));
            this.quorum = (__runInitializers(this, _abstainPercentage_extraInitializers), __runInitializers(this, _quorum_initializers, void 0));
            __runInitializers(this, _quorum_extraInitializers);
            Object.assign(this, init);
        }
        ProposalVotes_1.default = function () {
            return new ProposalVotes({
                upVotes: '0',
                downVotes: '0',
                downVetoVotes: '0',
                abstainVotes: '0',
                quorum: '0',
            });
        };
        return ProposalVotes_1;
    }());
    __setFunctionName(_classThis, "ProposalVotes");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _upVotes_decorators = [(0, graphql_1.Field)()];
        _downVotes_decorators = [(0, graphql_1.Field)()];
        _downVetoVotes_decorators = [(0, graphql_1.Field)()];
        _abstainVotes_decorators = [(0, graphql_1.Field)()];
        _totalVotes_decorators = [(0, graphql_1.Field)()];
        _upPercentage_decorators = [(0, graphql_1.Field)()];
        _downPercentage_decorators = [(0, graphql_1.Field)()];
        _downVetoPercentage_decorators = [(0, graphql_1.Field)()];
        _abstainPercentage_decorators = [(0, graphql_1.Field)()];
        _quorum_decorators = [(0, graphql_1.Field)()];
        __esDecorate(null, null, _upVotes_decorators, { kind: "field", name: "upVotes", static: false, private: false, access: { has: function (obj) { return "upVotes" in obj; }, get: function (obj) { return obj.upVotes; }, set: function (obj, value) { obj.upVotes = value; } }, metadata: _metadata }, _upVotes_initializers, _upVotes_extraInitializers);
        __esDecorate(null, null, _downVotes_decorators, { kind: "field", name: "downVotes", static: false, private: false, access: { has: function (obj) { return "downVotes" in obj; }, get: function (obj) { return obj.downVotes; }, set: function (obj, value) { obj.downVotes = value; } }, metadata: _metadata }, _downVotes_initializers, _downVotes_extraInitializers);
        __esDecorate(null, null, _downVetoVotes_decorators, { kind: "field", name: "downVetoVotes", static: false, private: false, access: { has: function (obj) { return "downVetoVotes" in obj; }, get: function (obj) { return obj.downVetoVotes; }, set: function (obj, value) { obj.downVetoVotes = value; } }, metadata: _metadata }, _downVetoVotes_initializers, _downVetoVotes_extraInitializers);
        __esDecorate(null, null, _abstainVotes_decorators, { kind: "field", name: "abstainVotes", static: false, private: false, access: { has: function (obj) { return "abstainVotes" in obj; }, get: function (obj) { return obj.abstainVotes; }, set: function (obj, value) { obj.abstainVotes = value; } }, metadata: _metadata }, _abstainVotes_initializers, _abstainVotes_extraInitializers);
        __esDecorate(null, null, _totalVotes_decorators, { kind: "field", name: "totalVotes", static: false, private: false, access: { has: function (obj) { return "totalVotes" in obj; }, get: function (obj) { return obj.totalVotes; }, set: function (obj, value) { obj.totalVotes = value; } }, metadata: _metadata }, _totalVotes_initializers, _totalVotes_extraInitializers);
        __esDecorate(null, null, _upPercentage_decorators, { kind: "field", name: "upPercentage", static: false, private: false, access: { has: function (obj) { return "upPercentage" in obj; }, get: function (obj) { return obj.upPercentage; }, set: function (obj, value) { obj.upPercentage = value; } }, metadata: _metadata }, _upPercentage_initializers, _upPercentage_extraInitializers);
        __esDecorate(null, null, _downPercentage_decorators, { kind: "field", name: "downPercentage", static: false, private: false, access: { has: function (obj) { return "downPercentage" in obj; }, get: function (obj) { return obj.downPercentage; }, set: function (obj, value) { obj.downPercentage = value; } }, metadata: _metadata }, _downPercentage_initializers, _downPercentage_extraInitializers);
        __esDecorate(null, null, _downVetoPercentage_decorators, { kind: "field", name: "downVetoPercentage", static: false, private: false, access: { has: function (obj) { return "downVetoPercentage" in obj; }, get: function (obj) { return obj.downVetoPercentage; }, set: function (obj, value) { obj.downVetoPercentage = value; } }, metadata: _metadata }, _downVetoPercentage_initializers, _downVetoPercentage_extraInitializers);
        __esDecorate(null, null, _abstainPercentage_decorators, { kind: "field", name: "abstainPercentage", static: false, private: false, access: { has: function (obj) { return "abstainPercentage" in obj; }, get: function (obj) { return obj.abstainPercentage; }, set: function (obj, value) { obj.abstainPercentage = value; } }, metadata: _metadata }, _abstainPercentage_initializers, _abstainPercentage_extraInitializers);
        __esDecorate(null, null, _quorum_decorators, { kind: "field", name: "quorum", static: false, private: false, access: { has: function (obj) { return "quorum" in obj; }, get: function (obj) { return obj.quorum; }, set: function (obj, value) { obj.quorum = value; } }, metadata: _metadata }, _quorum_initializers, _quorum_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProposalVotes = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProposalVotes = _classThis;
}();
exports.ProposalVotes = ProposalVotes;
