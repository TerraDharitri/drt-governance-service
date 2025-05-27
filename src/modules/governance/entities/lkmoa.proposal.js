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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.GovernanceLKMOAProposal = void 0;
var governance_proposal_model_1 = require("../models/governance.proposal.model");
var governance_proposal_votes_model_1 = require("../models/governance.proposal.votes.model");
var dcdt_token_payment_model_1 = require("../../tokens/models/dcdt.token.payment.model");
var graphql_1 = require("@nestjs/graphql");
var GovernanceLKMOAProposal = function () {
    var _classDecorators = [(0, graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = governance_proposal_model_1.GovernanceProposalModel;
    var GovernanceLKMOAProposal = _classThis = /** @class */ (function (_super) {
        __extends(GovernanceLKMOAProposal_1, _super);
        function GovernanceLKMOAProposal_1() {
            return _super.call(this, {
                description: new governance_proposal_model_1.DescriptionV1({
                    title: 'Durian DEX to transform Into DharitriX with New MOA 2.0 Economic Model',
                    shortDescription: 'DharitriX (Durian DEX 2.0) presents a set of significant improvements and benefits, while correcting the most important limitations residing in the previous economics model.',
                    strapiId: 2,
                    version: 1,
                }),
                votes: new governance_proposal_votes_model_1.ProposalVotes({
                    upVotes: '3615976209993000000000',
                    downVotes: '210776056445000000000',
                    downVetoVotes: '0',
                    abstainVotes: '274849971635000000000',
                    totalVotes: '4101602238073000000000',
                    upPercentage: '88.16',
                    downPercentage: '5.13',
                    downVetoPercentage: '0',
                    abstainPercentage: '6.70',
                    quorum: '4101475400000000000000000000000',
                }),
                status: governance_proposal_model_1.GovernanceProposalStatus.Succeeded,
                proposalId: 1,
                proposer: "drt1ss6u80ruas2phpmr82r42xnkd6rxy40g9jl69frppl4qez9w2jpsaws9xq",
                actions: [],
                rootHash: "",
                totalQuorum: "6742520471308000000000000000000",
                feePayment: new dcdt_token_payment_model_1.DcdtTokenPaymentModel({
                    tokenIdentifier: "LKMOA-aab910",
                    tokenNonce: 0,
                    amount: "0",
                }),
                minimumQuorumPercentage: "0",
                votingDelayInBlocks: 0,
                votingPeriodInBlocks: 101672,
                withdrawPercentageDefeated: 8999,
                proposalStartBlock: 12247307,
            }) || this;
        }
        GovernanceLKMOAProposal_1.prototype.toJSON = function () {
            return __assign({}, this);
        };
        return GovernanceLKMOAProposal_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GovernanceLKMOAProposal");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GovernanceLKMOAProposal = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GovernanceLKMOAProposal = _classThis;
}();
exports.GovernanceLKMOAProposal = GovernanceLKMOAProposal;
