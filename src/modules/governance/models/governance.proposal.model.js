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
exports.GovernanceProposalModel = exports.VoteArgs = exports.DescriptionV2 = exports.DescriptionV1 = exports.DescriptionV0 = exports.VoteType = exports.GovernanceProposalStatus = void 0;
var graphql_1 = require("@nestjs/graphql");
var governance_action_model_1 = require("./governance.action.model");
var dcdt_token_payment_model_1 = require("../../tokens/models/dcdt.token.payment.model");
var governance_proposal_votes_model_1 = require("./governance.proposal.votes.model");
var governance_union_1 = require("./governance.union");
var GovernanceProposalStatus;
(function (GovernanceProposalStatus) {
    GovernanceProposalStatus["None"] = "None";
    GovernanceProposalStatus["Pending"] = "Pending";
    GovernanceProposalStatus["Active"] = "Active";
    GovernanceProposalStatus["Defeated"] = "Defeated";
    GovernanceProposalStatus["DefeatedWithVeto"] = "DefeatedWithVeto";
    GovernanceProposalStatus["Succeeded"] = "Succeeded";
})(GovernanceProposalStatus || (exports.GovernanceProposalStatus = GovernanceProposalStatus = {}));
(0, graphql_1.registerEnumType)(GovernanceProposalStatus, { name: 'GovernanceProposalStatus' });
var VoteType;
(function (VoteType) {
    VoteType[VoteType["UpVote"] = 0] = "UpVote";
    VoteType[VoteType["DownVote"] = 1] = "DownVote";
    VoteType[VoteType["DownVetoVote"] = 2] = "DownVetoVote";
    VoteType[VoteType["AbstainVote"] = 3] = "AbstainVote";
    VoteType[VoteType["NotVoted"] = 4] = "NotVoted";
})(VoteType || (exports.VoteType = VoteType = {}));
(0, graphql_1.registerEnumType)(GovernanceProposalStatus, { name: 'VoteType' });
var DescriptionV0 = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _strapiId_decorators;
    var _strapiId_initializers = [];
    var _strapiId_extraInitializers = [];
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    var DescriptionV0 = _classThis = /** @class */ (function () {
        function DescriptionV0_1(init) {
            this.title = __runInitializers(this, _title_initializers, void 0);
            this.strapiId = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _strapiId_initializers, void 0));
            this.version = (__runInitializers(this, _strapiId_extraInitializers), __runInitializers(this, _version_initializers, void 0));
            __runInitializers(this, _version_extraInitializers);
            Object.assign(this, init);
        }
        return DescriptionV0_1;
    }());
    __setFunctionName(_classThis, "DescriptionV0");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _title_decorators = [(0, graphql_1.Field)()];
        _strapiId_decorators = [(0, graphql_1.Field)(function () { return graphql_1.Int; })];
        _version_decorators = [(0, graphql_1.Field)()];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _strapiId_decorators, { kind: "field", name: "strapiId", static: false, private: false, access: { has: function (obj) { return "strapiId" in obj; }, get: function (obj) { return obj.strapiId; }, set: function (obj, value) { obj.strapiId = value; } }, metadata: _metadata }, _strapiId_initializers, _strapiId_extraInitializers);
        __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DescriptionV0 = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DescriptionV0 = _classThis;
}();
exports.DescriptionV0 = DescriptionV0;
var DescriptionV1 = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = DescriptionV0;
    var _shortDescription_decorators;
    var _shortDescription_initializers = [];
    var _shortDescription_extraInitializers = [];
    var DescriptionV1 = _classThis = /** @class */ (function (_super) {
        __extends(DescriptionV1_1, _super);
        function DescriptionV1_1(init) {
            var _this = _super.call(this, init) || this;
            _this.shortDescription = __runInitializers(_this, _shortDescription_initializers, void 0);
            __runInitializers(_this, _shortDescription_extraInitializers);
            Object.assign(_this, init);
            return _this;
        }
        return DescriptionV1_1;
    }(_classSuper));
    __setFunctionName(_classThis, "DescriptionV1");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _shortDescription_decorators = [(0, graphql_1.Field)()];
        __esDecorate(null, null, _shortDescription_decorators, { kind: "field", name: "shortDescription", static: false, private: false, access: { has: function (obj) { return "shortDescription" in obj; }, get: function (obj) { return obj.shortDescription; }, set: function (obj, value) { obj.shortDescription = value; } }, metadata: _metadata }, _shortDescription_initializers, _shortDescription_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DescriptionV1 = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DescriptionV1 = _classThis;
}();
exports.DescriptionV1 = DescriptionV1;
var DescriptionV2 = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = DescriptionV1;
    var _strapiHash_decorators;
    var _strapiHash_initializers = [];
    var _strapiHash_extraInitializers = [];
    var DescriptionV2 = _classThis = /** @class */ (function (_super) {
        __extends(DescriptionV2_1, _super);
        function DescriptionV2_1(init) {
            var _this = _super.call(this, init) || this;
            _this.strapiHash = __runInitializers(_this, _strapiHash_initializers, void 0);
            __runInitializers(_this, _strapiHash_extraInitializers);
            Object.assign(_this, init);
            return _this;
        }
        return DescriptionV2_1;
    }(_classSuper));
    __setFunctionName(_classThis, "DescriptionV2");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _strapiHash_decorators = [(0, graphql_1.Field)()];
        __esDecorate(null, null, _strapiHash_decorators, { kind: "field", name: "strapiHash", static: false, private: false, access: { has: function (obj) { return "strapiHash" in obj; }, get: function (obj) { return obj.strapiHash; }, set: function (obj, value) { obj.strapiHash = value; } }, metadata: _metadata }, _strapiHash_initializers, _strapiHash_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DescriptionV2 = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DescriptionV2 = _classThis;
}();
exports.DescriptionV2 = DescriptionV2;
var VoteArgs = function () {
    var _classDecorators = [(0, graphql_1.ArgsType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _contractAddress_decorators;
    var _contractAddress_initializers = [];
    var _contractAddress_extraInitializers = [];
    var _proposalId_decorators;
    var _proposalId_initializers = [];
    var _proposalId_extraInitializers = [];
    var _vote_decorators;
    var _vote_initializers = [];
    var _vote_extraInitializers = [];
    var VoteArgs = _classThis = /** @class */ (function () {
        function VoteArgs_1() {
            this.contractAddress = __runInitializers(this, _contractAddress_initializers, void 0);
            this.proposalId = (__runInitializers(this, _contractAddress_extraInitializers), __runInitializers(this, _proposalId_initializers, void 0));
            this.vote = (__runInitializers(this, _proposalId_extraInitializers), __runInitializers(this, _vote_initializers, void 0));
            __runInitializers(this, _vote_extraInitializers);
        }
        return VoteArgs_1;
    }());
    __setFunctionName(_classThis, "VoteArgs");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _contractAddress_decorators = [(0, graphql_1.Field)()];
        _proposalId_decorators = [(0, graphql_1.Field)()];
        _vote_decorators = [(0, graphql_1.Field)()];
        __esDecorate(null, null, _contractAddress_decorators, { kind: "field", name: "contractAddress", static: false, private: false, access: { has: function (obj) { return "contractAddress" in obj; }, get: function (obj) { return obj.contractAddress; }, set: function (obj, value) { obj.contractAddress = value; } }, metadata: _metadata }, _contractAddress_initializers, _contractAddress_extraInitializers);
        __esDecorate(null, null, _proposalId_decorators, { kind: "field", name: "proposalId", static: false, private: false, access: { has: function (obj) { return "proposalId" in obj; }, get: function (obj) { return obj.proposalId; }, set: function (obj, value) { obj.proposalId = value; } }, metadata: _metadata }, _proposalId_initializers, _proposalId_extraInitializers);
        __esDecorate(null, null, _vote_decorators, { kind: "field", name: "vote", static: false, private: false, access: { has: function (obj) { return "vote" in obj; }, get: function (obj) { return obj.vote; }, set: function (obj, value) { obj.vote = value; } }, metadata: _metadata }, _vote_initializers, _vote_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        VoteArgs = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return VoteArgs = _classThis;
}();
exports.VoteArgs = VoteArgs;
var GovernanceProposalModel = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _contractAddress_decorators;
    var _contractAddress_initializers = [];
    var _contractAddress_extraInitializers = [];
    var _proposalId_decorators;
    var _proposalId_initializers = [];
    var _proposalId_extraInitializers = [];
    var _proposer_decorators;
    var _proposer_initializers = [];
    var _proposer_extraInitializers = [];
    var _actions_decorators;
    var _actions_initializers = [];
    var _actions_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _feePayment_decorators;
    var _feePayment_initializers = [];
    var _feePayment_extraInitializers = [];
    var _minimumQuorumPercentage_decorators;
    var _minimumQuorumPercentage_initializers = [];
    var _minimumQuorumPercentage_extraInitializers = [];
    var _votingDelayInBlocks_decorators;
    var _votingDelayInBlocks_initializers = [];
    var _votingDelayInBlocks_extraInitializers = [];
    var _votingPeriodInBlocks_decorators;
    var _votingPeriodInBlocks_initializers = [];
    var _votingPeriodInBlocks_extraInitializers = [];
    var _withdrawPercentageDefeated_decorators;
    var _withdrawPercentageDefeated_initializers = [];
    var _withdrawPercentageDefeated_extraInitializers = [];
    var _totalQuorum_decorators;
    var _totalQuorum_initializers = [];
    var _totalQuorum_extraInitializers = [];
    var _proposalStartBlock_decorators;
    var _proposalStartBlock_initializers = [];
    var _proposalStartBlock_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _rootHash_decorators;
    var _rootHash_initializers = [];
    var _rootHash_extraInitializers = [];
    var _votes_decorators;
    var _votes_initializers = [];
    var _votes_extraInitializers = [];
    var _hasVoted_decorators;
    var _hasVoted_initializers = [];
    var _hasVoted_extraInitializers = [];
    var _userVoteType_decorators;
    var _userVoteType_initializers = [];
    var _userVoteType_extraInitializers = [];
    var _userVotingPower_decorators;
    var _userVotingPower_initializers = [];
    var _userVotingPower_extraInitializers = [];
    var GovernanceProposalModel = _classThis = /** @class */ (function () {
        function GovernanceProposalModel_1(init) {
            this.contractAddress = __runInitializers(this, _contractAddress_initializers, void 0);
            this.proposalId = (__runInitializers(this, _contractAddress_extraInitializers), __runInitializers(this, _proposalId_initializers, void 0));
            this.proposer = (__runInitializers(this, _proposalId_extraInitializers), __runInitializers(this, _proposer_initializers, void 0));
            this.actions = (__runInitializers(this, _proposer_extraInitializers), __runInitializers(this, _actions_initializers, void 0));
            this.description = (__runInitializers(this, _actions_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.feePayment = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _feePayment_initializers, void 0));
            this.minimumQuorumPercentage = (__runInitializers(this, _feePayment_extraInitializers), __runInitializers(this, _minimumQuorumPercentage_initializers, void 0));
            this.votingDelayInBlocks = (__runInitializers(this, _minimumQuorumPercentage_extraInitializers), __runInitializers(this, _votingDelayInBlocks_initializers, void 0));
            this.votingPeriodInBlocks = (__runInitializers(this, _votingDelayInBlocks_extraInitializers), __runInitializers(this, _votingPeriodInBlocks_initializers, void 0));
            this.withdrawPercentageDefeated = (__runInitializers(this, _votingPeriodInBlocks_extraInitializers), __runInitializers(this, _withdrawPercentageDefeated_initializers, void 0));
            this.totalQuorum = (__runInitializers(this, _withdrawPercentageDefeated_extraInitializers), __runInitializers(this, _totalQuorum_initializers, void 0));
            this.proposalStartBlock = (__runInitializers(this, _totalQuorum_extraInitializers), __runInitializers(this, _proposalStartBlock_initializers, void 0));
            this.status = (__runInitializers(this, _proposalStartBlock_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            this.rootHash = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _rootHash_initializers, void 0));
            this.votes = (__runInitializers(this, _rootHash_extraInitializers), __runInitializers(this, _votes_initializers, void 0));
            this.hasVoted = (__runInitializers(this, _votes_extraInitializers), __runInitializers(this, _hasVoted_initializers, void 0));
            this.userVoteType = (__runInitializers(this, _hasVoted_extraInitializers), __runInitializers(this, _userVoteType_initializers, void 0));
            this.userVotingPower = (__runInitializers(this, _userVoteType_extraInitializers), __runInitializers(this, _userVotingPower_initializers, void 0));
            __runInitializers(this, _userVotingPower_extraInitializers);
            Object.assign(this, init);
        }
        return GovernanceProposalModel_1;
    }());
    __setFunctionName(_classThis, "GovernanceProposalModel");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _contractAddress_decorators = [(0, graphql_1.Field)()];
        _proposalId_decorators = [(0, graphql_1.Field)()];
        _proposer_decorators = [(0, graphql_1.Field)()];
        _actions_decorators = [(0, graphql_1.Field)(function () { return [governance_action_model_1.GovernanceAction]; })];
        _description_decorators = [(0, graphql_1.Field)(function () { return governance_union_1.GovernanceDescriptionUnion; })];
        _feePayment_decorators = [(0, graphql_1.Field)(function () { return dcdt_token_payment_model_1.DcdtTokenPaymentModel; })];
        _minimumQuorumPercentage_decorators = [(0, graphql_1.Field)()];
        _votingDelayInBlocks_decorators = [(0, graphql_1.Field)(function () { return graphql_1.Int; })];
        _votingPeriodInBlocks_decorators = [(0, graphql_1.Field)(function () { return graphql_1.Int; })];
        _withdrawPercentageDefeated_decorators = [(0, graphql_1.Field)(function () { return graphql_1.Int; })];
        _totalQuorum_decorators = [(0, graphql_1.Field)()];
        _proposalStartBlock_decorators = [(0, graphql_1.Field)(function () { return graphql_1.Int; })];
        _status_decorators = [(0, graphql_1.Field)()];
        _rootHash_decorators = [(0, graphql_1.Field)()];
        _votes_decorators = [(0, graphql_1.Field)(function () { return governance_proposal_votes_model_1.ProposalVotes; })];
        _hasVoted_decorators = [(0, graphql_1.Field)()];
        _userVoteType_decorators = [(0, graphql_1.Field)()];
        _userVotingPower_decorators = [(0, graphql_1.Field)()];
        __esDecorate(null, null, _contractAddress_decorators, { kind: "field", name: "contractAddress", static: false, private: false, access: { has: function (obj) { return "contractAddress" in obj; }, get: function (obj) { return obj.contractAddress; }, set: function (obj, value) { obj.contractAddress = value; } }, metadata: _metadata }, _contractAddress_initializers, _contractAddress_extraInitializers);
        __esDecorate(null, null, _proposalId_decorators, { kind: "field", name: "proposalId", static: false, private: false, access: { has: function (obj) { return "proposalId" in obj; }, get: function (obj) { return obj.proposalId; }, set: function (obj, value) { obj.proposalId = value; } }, metadata: _metadata }, _proposalId_initializers, _proposalId_extraInitializers);
        __esDecorate(null, null, _proposer_decorators, { kind: "field", name: "proposer", static: false, private: false, access: { has: function (obj) { return "proposer" in obj; }, get: function (obj) { return obj.proposer; }, set: function (obj, value) { obj.proposer = value; } }, metadata: _metadata }, _proposer_initializers, _proposer_extraInitializers);
        __esDecorate(null, null, _actions_decorators, { kind: "field", name: "actions", static: false, private: false, access: { has: function (obj) { return "actions" in obj; }, get: function (obj) { return obj.actions; }, set: function (obj, value) { obj.actions = value; } }, metadata: _metadata }, _actions_initializers, _actions_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _feePayment_decorators, { kind: "field", name: "feePayment", static: false, private: false, access: { has: function (obj) { return "feePayment" in obj; }, get: function (obj) { return obj.feePayment; }, set: function (obj, value) { obj.feePayment = value; } }, metadata: _metadata }, _feePayment_initializers, _feePayment_extraInitializers);
        __esDecorate(null, null, _minimumQuorumPercentage_decorators, { kind: "field", name: "minimumQuorumPercentage", static: false, private: false, access: { has: function (obj) { return "minimumQuorumPercentage" in obj; }, get: function (obj) { return obj.minimumQuorumPercentage; }, set: function (obj, value) { obj.minimumQuorumPercentage = value; } }, metadata: _metadata }, _minimumQuorumPercentage_initializers, _minimumQuorumPercentage_extraInitializers);
        __esDecorate(null, null, _votingDelayInBlocks_decorators, { kind: "field", name: "votingDelayInBlocks", static: false, private: false, access: { has: function (obj) { return "votingDelayInBlocks" in obj; }, get: function (obj) { return obj.votingDelayInBlocks; }, set: function (obj, value) { obj.votingDelayInBlocks = value; } }, metadata: _metadata }, _votingDelayInBlocks_initializers, _votingDelayInBlocks_extraInitializers);
        __esDecorate(null, null, _votingPeriodInBlocks_decorators, { kind: "field", name: "votingPeriodInBlocks", static: false, private: false, access: { has: function (obj) { return "votingPeriodInBlocks" in obj; }, get: function (obj) { return obj.votingPeriodInBlocks; }, set: function (obj, value) { obj.votingPeriodInBlocks = value; } }, metadata: _metadata }, _votingPeriodInBlocks_initializers, _votingPeriodInBlocks_extraInitializers);
        __esDecorate(null, null, _withdrawPercentageDefeated_decorators, { kind: "field", name: "withdrawPercentageDefeated", static: false, private: false, access: { has: function (obj) { return "withdrawPercentageDefeated" in obj; }, get: function (obj) { return obj.withdrawPercentageDefeated; }, set: function (obj, value) { obj.withdrawPercentageDefeated = value; } }, metadata: _metadata }, _withdrawPercentageDefeated_initializers, _withdrawPercentageDefeated_extraInitializers);
        __esDecorate(null, null, _totalQuorum_decorators, { kind: "field", name: "totalQuorum", static: false, private: false, access: { has: function (obj) { return "totalQuorum" in obj; }, get: function (obj) { return obj.totalQuorum; }, set: function (obj, value) { obj.totalQuorum = value; } }, metadata: _metadata }, _totalQuorum_initializers, _totalQuorum_extraInitializers);
        __esDecorate(null, null, _proposalStartBlock_decorators, { kind: "field", name: "proposalStartBlock", static: false, private: false, access: { has: function (obj) { return "proposalStartBlock" in obj; }, get: function (obj) { return obj.proposalStartBlock; }, set: function (obj, value) { obj.proposalStartBlock = value; } }, metadata: _metadata }, _proposalStartBlock_initializers, _proposalStartBlock_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _rootHash_decorators, { kind: "field", name: "rootHash", static: false, private: false, access: { has: function (obj) { return "rootHash" in obj; }, get: function (obj) { return obj.rootHash; }, set: function (obj, value) { obj.rootHash = value; } }, metadata: _metadata }, _rootHash_initializers, _rootHash_extraInitializers);
        __esDecorate(null, null, _votes_decorators, { kind: "field", name: "votes", static: false, private: false, access: { has: function (obj) { return "votes" in obj; }, get: function (obj) { return obj.votes; }, set: function (obj, value) { obj.votes = value; } }, metadata: _metadata }, _votes_initializers, _votes_extraInitializers);
        __esDecorate(null, null, _hasVoted_decorators, { kind: "field", name: "hasVoted", static: false, private: false, access: { has: function (obj) { return "hasVoted" in obj; }, get: function (obj) { return obj.hasVoted; }, set: function (obj, value) { obj.hasVoted = value; } }, metadata: _metadata }, _hasVoted_initializers, _hasVoted_extraInitializers);
        __esDecorate(null, null, _userVoteType_decorators, { kind: "field", name: "userVoteType", static: false, private: false, access: { has: function (obj) { return "userVoteType" in obj; }, get: function (obj) { return obj.userVoteType; }, set: function (obj, value) { obj.userVoteType = value; } }, metadata: _metadata }, _userVoteType_initializers, _userVoteType_extraInitializers);
        __esDecorate(null, null, _userVotingPower_decorators, { kind: "field", name: "userVotingPower", static: false, private: false, access: { has: function (obj) { return "userVotingPower" in obj; }, get: function (obj) { return obj.userVotingPower; }, set: function (obj, value) { obj.userVotingPower = value; } }, metadata: _metadata }, _userVotingPower_initializers, _userVotingPower_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GovernanceProposalModel = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GovernanceProposalModel = _classThis;
}();
exports.GovernanceProposalModel = GovernanceProposalModel;
