"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.GovernanceEnergyContract = exports.GovernanceTokenSnapshotContract = void 0;
var graphql_1 = require("@nestjs/graphql");
var governance_proposal_model_1 = require("./governance.proposal.model");
var GovernanceTokenSnapshotContract = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _address_decorators;
    var _address_initializers = [];
    var _address_extraInitializers = [];
    var _shard_decorators;
    var _shard_initializers = [];
    var _shard_extraInitializers = [];
    var _minFeeForPropose_decorators;
    var _minFeeForPropose_initializers = [];
    var _minFeeForPropose_extraInitializers = [];
    var _quorum_decorators;
    var _quorum_initializers = [];
    var _quorum_extraInitializers = [];
    var _votingDelayInBlocks_decorators;
    var _votingDelayInBlocks_initializers = [];
    var _votingDelayInBlocks_extraInitializers = [];
    var _votingPeriodInBlocks_decorators;
    var _votingPeriodInBlocks_initializers = [];
    var _votingPeriodInBlocks_extraInitializers = [];
    var _feeToken_decorators;
    var _feeToken_initializers = [];
    var _feeToken_extraInitializers = [];
    var _withdrawPercentageDefeated_decorators;
    var _withdrawPercentageDefeated_initializers = [];
    var _withdrawPercentageDefeated_extraInitializers = [];
    var _proposals_decorators;
    var _proposals_initializers = [];
    var _proposals_extraInitializers = [];
    var _vetoPercentageLimit_decorators;
    var _vetoPercentageLimit_initializers = [];
    var _vetoPercentageLimit_extraInitializers = [];
    var _votingPowerDecimals_decorators;
    var _votingPowerDecimals_initializers = [];
    var _votingPowerDecimals_extraInitializers = [];
    var GovernanceTokenSnapshotContract = _classThis = /** @class */ (function () {
        function GovernanceTokenSnapshotContract_1(init) {
            this.address = __runInitializers(this, _address_initializers, void 0);
            this.shard = (__runInitializers(this, _address_extraInitializers), __runInitializers(this, _shard_initializers, void 0));
            this.minFeeForPropose = (__runInitializers(this, _shard_extraInitializers), __runInitializers(this, _minFeeForPropose_initializers, void 0));
            this.quorum = (__runInitializers(this, _minFeeForPropose_extraInitializers), __runInitializers(this, _quorum_initializers, void 0));
            this.votingDelayInBlocks = (__runInitializers(this, _quorum_extraInitializers), __runInitializers(this, _votingDelayInBlocks_initializers, void 0));
            this.votingPeriodInBlocks = (__runInitializers(this, _votingDelayInBlocks_extraInitializers), __runInitializers(this, _votingPeriodInBlocks_initializers, void 0));
            this.feeToken = (__runInitializers(this, _votingPeriodInBlocks_extraInitializers), __runInitializers(this, _feeToken_initializers, void 0));
            this.withdrawPercentageDefeated = (__runInitializers(this, _feeToken_extraInitializers), __runInitializers(this, _withdrawPercentageDefeated_initializers, void 0));
            this.proposals = (__runInitializers(this, _withdrawPercentageDefeated_extraInitializers), __runInitializers(this, _proposals_initializers, void 0));
            this.vetoPercentageLimit = (__runInitializers(this, _proposals_extraInitializers), __runInitializers(this, _vetoPercentageLimit_initializers, 33.33));
            this.votingPowerDecimals = (__runInitializers(this, _vetoPercentageLimit_extraInitializers), __runInitializers(this, _votingPowerDecimals_initializers, void 0));
            __runInitializers(this, _votingPowerDecimals_extraInitializers);
            Object.assign(this, init);
        }
        return GovernanceTokenSnapshotContract_1;
    }());
    __setFunctionName(_classThis, "GovernanceTokenSnapshotContract");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _address_decorators = [(0, graphql_1.Field)()];
        _shard_decorators = [(0, graphql_1.Field)(function () { return graphql_1.Int; })];
        _minFeeForPropose_decorators = [(0, graphql_1.Field)()];
        _quorum_decorators = [(0, graphql_1.Field)()];
        _votingDelayInBlocks_decorators = [(0, graphql_1.Field)(function () { return graphql_1.Int; })];
        _votingPeriodInBlocks_decorators = [(0, graphql_1.Field)(function () { return graphql_1.Int; })];
        _feeToken_decorators = [(0, graphql_1.Field)()];
        _withdrawPercentageDefeated_decorators = [(0, graphql_1.Field)(function () { return graphql_1.Int; })];
        _proposals_decorators = [(0, graphql_1.Field)(function () { return [governance_proposal_model_1.GovernanceProposalModel]; })];
        _vetoPercentageLimit_decorators = [(0, graphql_1.Field)(function () { return graphql_1.Float; })];
        _votingPowerDecimals_decorators = [(0, graphql_1.Field)(function () { return graphql_1.Int; })];
        __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } }, metadata: _metadata }, _address_initializers, _address_extraInitializers);
        __esDecorate(null, null, _shard_decorators, { kind: "field", name: "shard", static: false, private: false, access: { has: function (obj) { return "shard" in obj; }, get: function (obj) { return obj.shard; }, set: function (obj, value) { obj.shard = value; } }, metadata: _metadata }, _shard_initializers, _shard_extraInitializers);
        __esDecorate(null, null, _minFeeForPropose_decorators, { kind: "field", name: "minFeeForPropose", static: false, private: false, access: { has: function (obj) { return "minFeeForPropose" in obj; }, get: function (obj) { return obj.minFeeForPropose; }, set: function (obj, value) { obj.minFeeForPropose = value; } }, metadata: _metadata }, _minFeeForPropose_initializers, _minFeeForPropose_extraInitializers);
        __esDecorate(null, null, _quorum_decorators, { kind: "field", name: "quorum", static: false, private: false, access: { has: function (obj) { return "quorum" in obj; }, get: function (obj) { return obj.quorum; }, set: function (obj, value) { obj.quorum = value; } }, metadata: _metadata }, _quorum_initializers, _quorum_extraInitializers);
        __esDecorate(null, null, _votingDelayInBlocks_decorators, { kind: "field", name: "votingDelayInBlocks", static: false, private: false, access: { has: function (obj) { return "votingDelayInBlocks" in obj; }, get: function (obj) { return obj.votingDelayInBlocks; }, set: function (obj, value) { obj.votingDelayInBlocks = value; } }, metadata: _metadata }, _votingDelayInBlocks_initializers, _votingDelayInBlocks_extraInitializers);
        __esDecorate(null, null, _votingPeriodInBlocks_decorators, { kind: "field", name: "votingPeriodInBlocks", static: false, private: false, access: { has: function (obj) { return "votingPeriodInBlocks" in obj; }, get: function (obj) { return obj.votingPeriodInBlocks; }, set: function (obj, value) { obj.votingPeriodInBlocks = value; } }, metadata: _metadata }, _votingPeriodInBlocks_initializers, _votingPeriodInBlocks_extraInitializers);
        __esDecorate(null, null, _feeToken_decorators, { kind: "field", name: "feeToken", static: false, private: false, access: { has: function (obj) { return "feeToken" in obj; }, get: function (obj) { return obj.feeToken; }, set: function (obj, value) { obj.feeToken = value; } }, metadata: _metadata }, _feeToken_initializers, _feeToken_extraInitializers);
        __esDecorate(null, null, _withdrawPercentageDefeated_decorators, { kind: "field", name: "withdrawPercentageDefeated", static: false, private: false, access: { has: function (obj) { return "withdrawPercentageDefeated" in obj; }, get: function (obj) { return obj.withdrawPercentageDefeated; }, set: function (obj, value) { obj.withdrawPercentageDefeated = value; } }, metadata: _metadata }, _withdrawPercentageDefeated_initializers, _withdrawPercentageDefeated_extraInitializers);
        __esDecorate(null, null, _proposals_decorators, { kind: "field", name: "proposals", static: false, private: false, access: { has: function (obj) { return "proposals" in obj; }, get: function (obj) { return obj.proposals; }, set: function (obj, value) { obj.proposals = value; } }, metadata: _metadata }, _proposals_initializers, _proposals_extraInitializers);
        __esDecorate(null, null, _vetoPercentageLimit_decorators, { kind: "field", name: "vetoPercentageLimit", static: false, private: false, access: { has: function (obj) { return "vetoPercentageLimit" in obj; }, get: function (obj) { return obj.vetoPercentageLimit; }, set: function (obj, value) { obj.vetoPercentageLimit = value; } }, metadata: _metadata }, _vetoPercentageLimit_initializers, _vetoPercentageLimit_extraInitializers);
        __esDecorate(null, null, _votingPowerDecimals_decorators, { kind: "field", name: "votingPowerDecimals", static: false, private: false, access: { has: function (obj) { return "votingPowerDecimals" in obj; }, get: function (obj) { return obj.votingPowerDecimals; }, set: function (obj, value) { obj.votingPowerDecimals = value; } }, metadata: _metadata }, _votingPowerDecimals_initializers, _votingPowerDecimals_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GovernanceTokenSnapshotContract = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GovernanceTokenSnapshotContract = _classThis;
}();
exports.GovernanceTokenSnapshotContract = GovernanceTokenSnapshotContract;
var GovernanceEnergyContract = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = GovernanceTokenSnapshotContract;
    var _minEnergyForPropose_decorators;
    var _minEnergyForPropose_initializers = [];
    var _minEnergyForPropose_extraInitializers = [];
    var _feesCollectorAddress_decorators;
    var _feesCollectorAddress_initializers = [];
    var _feesCollectorAddress_extraInitializers = [];
    var _energyFactoryAddress_decorators;
    var _energyFactoryAddress_initializers = [];
    var _energyFactoryAddress_extraInitializers = [];
    var GovernanceEnergyContract = _classThis = /** @class */ (function (_super) {
        __extends(GovernanceEnergyContract_1, _super);
        function GovernanceEnergyContract_1(init) {
            var _this = _super.call(this, init) || this;
            _this.minEnergyForPropose = __runInitializers(_this, _minEnergyForPropose_initializers, void 0);
            _this.feesCollectorAddress = (__runInitializers(_this, _minEnergyForPropose_extraInitializers), __runInitializers(_this, _feesCollectorAddress_initializers, void 0));
            _this.energyFactoryAddress = (__runInitializers(_this, _feesCollectorAddress_extraInitializers), __runInitializers(_this, _energyFactoryAddress_initializers, void 0));
            __runInitializers(_this, _energyFactoryAddress_extraInitializers);
            Object.assign(_this, init);
            return _this;
        }
        return GovernanceEnergyContract_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GovernanceEnergyContract");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _minEnergyForPropose_decorators = [(0, graphql_1.Field)()];
        _feesCollectorAddress_decorators = [(0, graphql_1.Field)()];
        _energyFactoryAddress_decorators = [(0, graphql_1.Field)()];
        __esDecorate(null, null, _minEnergyForPropose_decorators, { kind: "field", name: "minEnergyForPropose", static: false, private: false, access: { has: function (obj) { return "minEnergyForPropose" in obj; }, get: function (obj) { return obj.minEnergyForPropose; }, set: function (obj, value) { obj.minEnergyForPropose = value; } }, metadata: _metadata }, _minEnergyForPropose_initializers, _minEnergyForPropose_extraInitializers);
        __esDecorate(null, null, _feesCollectorAddress_decorators, { kind: "field", name: "feesCollectorAddress", static: false, private: false, access: { has: function (obj) { return "feesCollectorAddress" in obj; }, get: function (obj) { return obj.feesCollectorAddress; }, set: function (obj, value) { obj.feesCollectorAddress = value; } }, metadata: _metadata }, _feesCollectorAddress_initializers, _feesCollectorAddress_extraInitializers);
        __esDecorate(null, null, _energyFactoryAddress_decorators, { kind: "field", name: "energyFactoryAddress", static: false, private: false, access: { has: function (obj) { return "energyFactoryAddress" in obj; }, get: function (obj) { return obj.energyFactoryAddress; }, set: function (obj, value) { obj.energyFactoryAddress = value; } }, metadata: _metadata }, _energyFactoryAddress_initializers, _energyFactoryAddress_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GovernanceEnergyContract = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GovernanceEnergyContract = _classThis;
}();
exports.GovernanceEnergyContract = GovernanceEnergyContract;
