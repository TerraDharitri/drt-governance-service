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
exports.GovernanceEnergyAbiService = exports.GovernanceTokenSnapshotAbiService = void 0;
var common_1 = require("@nestjs/common");
var generic_abi_service_1 = require("../../../services/generics/generic.abi.service");
var sdk_nestjs_common_1 = require("@terradharitri/sdk-nestjs-common");
var governance_proposal_votes_model_1 = require("../models/governance.proposal.votes.model");
var governance_proposal_model_1 = require("../models/governance.proposal.model");
var governance_action_model_1 = require("../models/governance.action.model");
var dcdt_token_payment_model_1 = require("../../tokens/models/dcdt.token.payment.model");
var sdk_exchange_1 = require("@terradharitri/sdk-exchange");
var governance_1 = require("../../../utils/governance");
var config_1 = require("../../../config");
var bignumber_js_1 = require("bignumber.js");
var typesystem_1 = require("@terradharitri/sdk-core/out/smartcontracts/typesystem");
var caching_decorator_1 = require("../../../helpers/decorators/caching.decorator");
var cache_ttl_info_1 = require("../../../services/caching/cache.ttl.info");
var token_converters_1 = require("../../../utils/token.converters");
var out_1 = require("@terradharitri/sdk-core/out");
var GovernanceTokenSnapshotAbiService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = generic_abi_service_1.GenericAbiService;
    var _instanceExtraInitializers = [];
    var _getAddressShardID_decorators;
    var _minFeeForPropose_decorators;
    var _quorum_decorators;
    var _votingDelayInBlocks_decorators;
    var _votingPeriodInBlocks_decorators;
    var _feeTokenId_decorators;
    var _withdrawPercentageDefeated_decorators;
    var _proposals_decorators;
    var _userVotedProposals_decorators;
    var _proposalVotes_decorators;
    var _proposalStatus_decorators;
    var _proposalRootHash_decorators;
    var _vote_decorators;
    var GovernanceTokenSnapshotAbiService = _classThis = /** @class */ (function (_super) {
        __extends(GovernanceTokenSnapshotAbiService_1, _super);
        function GovernanceTokenSnapshotAbiService_1(drtProxy, governanceMerkle, governanceDescription) {
            var _this = _super.call(this, drtProxy) || this;
            _this.drtProxy = (__runInitializers(_this, _instanceExtraInitializers), drtProxy);
            _this.governanceMerkle = governanceMerkle;
            _this.governanceDescription = governanceDescription;
            _this.type = governance_1.GovernanceType.TOKEN_SNAPSHOT;
            return _this;
        }
        GovernanceTokenSnapshotAbiService_1.prototype.getAddressShardID = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getAddressShardID(scAddress)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.minFeeForPropose = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.minFeeForProposeRaw(scAddress)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.minFeeForProposeRaw = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methods.getMinFeeForPropose();
                            return [4 /*yield*/, this.getGenericData(interaction)];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response.firstValue.valueOf().toFixed()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.quorum = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.quorumRaw(scAddress)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.quorumRaw = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methods.getQuorum();
                            return [4 /*yield*/, this.getGenericData(interaction)];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response.firstValue.valueOf().toFixed()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.votingDelayInBlocks = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.votingDelayInBlocksRaw(scAddress)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.votingDelayInBlocksRaw = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methods.getVotingDelayInBlocks();
                            return [4 /*yield*/, this.getGenericData(interaction)];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response.firstValue.valueOf().toNumber()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.votingPeriodInBlocks = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.votingPeriodInBlocksRaw(scAddress)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.votingPeriodInBlocksRaw = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methods.getVotingPeriodInBlocks();
                            return [4 /*yield*/, this.getGenericData(interaction)];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response.firstValue.valueOf().toNumber()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.feeTokenId = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.feeTokenIdRaw(scAddress)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.feeTokenIdRaw = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methods.getFeeTokenId();
                            return [4 /*yield*/, this.getGenericData(interaction)];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response.firstValue.valueOf()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.withdrawPercentageDefeated = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.withdrawPercentageDefeatedRaw(scAddress)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.withdrawPercentageDefeatedRaw = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methods.getWithdrawPercentageDefeated();
                            return [4 /*yield*/, this.getGenericData(interaction)];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response.firstValue.valueOf().toNumber()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.proposals = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.proposalsRaw(scAddress)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.proposalsRaw = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, query, queryResponse, endpointDefinition, response;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methodsExplicit.getProposals();
                            query = interaction.check().buildQuery();
                            return [4 /*yield*/, this.drtProxy
                                    .getService()
                                    .queryContract(query)];
                        case 2:
                            queryResponse = _a.sent();
                            endpointDefinition = interaction.getEndpoint();
                            queryResponse.returnData = queryResponse.returnData.filter(function (data) { return data.length > 0; });
                            response = new out_1.ResultsParser().parseQueryResponse(queryResponse, endpointDefinition);
                            return [2 /*return*/, response.firstValue.valueOf().map(function (proposal) {
                                    var _a;
                                    var actions = (_a = proposal.actions) === null || _a === void 0 ? void 0 : _a.map(function (action) {
                                        return new governance_action_model_1.GovernanceAction({
                                            arguments: action.arguments.toString().split(','),
                                            destAddress: action.dest_address.bech32(),
                                            functionName: action.function_name.toString(),
                                            gasLimit: action.gas_limit.toNumber(),
                                        });
                                    });
                                    var totalQuorum = proposal.total_quorum.toFixed();
                                    if (scAddress === 'drt1qqqqqqqqqqqqqpgq8xqp6c0kzwn3f2c5zsxfex6h69s2x9rwhg4sxjct2x') {
                                        totalQuorum = '14864643496672232664684799';
                                    }
                                    return new governance_proposal_model_1.GovernanceProposalModel({
                                        contractAddress: scAddress,
                                        proposalId: proposal.proposal_id.toNumber(),
                                        proposer: proposal.proposer.bech32(),
                                        actions: actions,
                                        description: _this.governanceDescription.getGovernanceDescription(proposal.description.toString()),
                                        feePayment: new dcdt_token_payment_model_1.DcdtTokenPaymentModel(sdk_exchange_1.DcdtTokenPayment.fromDecodedAttributes(proposal.fee_payment)),
                                        proposalStartBlock: proposal.proposal_start_block.toNumber(),
                                        minimumQuorumPercentage: proposal.minimum_quorum
                                            .div(100)
                                            .toFixed(2),
                                        totalQuorum: totalQuorum,
                                        votingDelayInBlocks: proposal.voting_delay_in_blocks.toNumber(),
                                        votingPeriodInBlocks: proposal.voting_period_in_blocks.toNumber(),
                                        withdrawPercentageDefeated: proposal.withdraw_percentage_defeated.toNumber(),
                                    });
                                })];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.userVotedProposals = function (scAddress, userAddress) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.userVotedProposalsRaw(scAddress, userAddress)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.userVotedProposalsRaw = function (scAddress, userAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methods.getUserVotedProposals([
                                userAddress,
                            ]);
                            return [4 /*yield*/, this.getGenericData(interaction)];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response.firstValue
                                    .valueOf()
                                    .map(function (proposalId) { return proposalId.toNumber(); })];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.proposalVotes = function (scAddress, proposalId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.proposalVotesRaw(scAddress, proposalId)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.proposalVotesRaw = function (scAddress, proposalId) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, response, votes, totalVotesBigNumber;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methods.getProposalVotes([proposalId]);
                            return [4 /*yield*/, this.getGenericData(interaction)];
                        case 2:
                            response = _a.sent();
                            if (!response.firstValue) {
                                return [2 /*return*/, governance_proposal_votes_model_1.ProposalVotes.default()];
                            }
                            votes = response.firstValue.valueOf();
                            totalVotesBigNumber = votes.up_votes
                                .plus(votes.down_votes)
                                .plus(votes.abstain_votes)
                                .plus(votes.down_veto_votes);
                            return [2 /*return*/, new governance_proposal_votes_model_1.ProposalVotes({
                                    upVotes: votes.up_votes.toFixed(),
                                    downVotes: votes.down_votes.toFixed(),
                                    downVetoVotes: votes.down_veto_votes.toFixed(),
                                    abstainVotes: votes.abstain_votes.toFixed(),
                                    totalVotes: totalVotesBigNumber.toFixed(),
                                    upPercentage: totalVotesBigNumber > 0
                                        ? votes.up_votes
                                            .div(totalVotesBigNumber)
                                            .multipliedBy(100)
                                            .toFixed(2)
                                        : '0',
                                    downPercentage: totalVotesBigNumber > 0
                                        ? votes.down_votes
                                            .div(totalVotesBigNumber)
                                            .multipliedBy(100)
                                            .toFixed(2)
                                        : '0',
                                    abstainPercentage: totalVotesBigNumber > 0
                                        ? votes.abstain_votes
                                            .div(totalVotesBigNumber)
                                            .multipliedBy(100)
                                            .toFixed(2)
                                        : '0',
                                    downVetoPercentage: totalVotesBigNumber > 0
                                        ? votes.down_veto_votes
                                            .div(totalVotesBigNumber)
                                            .multipliedBy(100)
                                            .toFixed(2)
                                        : '0',
                                    quorum: votes.quorum.toFixed(),
                                })];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.proposalStatus = function (scAddress, proposalId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.proposalStatusRaw(scAddress, proposalId)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.proposalStatusRaw = function (scAddress, proposalId) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methods.getProposalStatus([proposalId]);
                            return [4 /*yield*/, this.getGenericData(interaction)];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, (0, governance_1.toGovernanceProposalStatus)(response.firstValue.valueOf().name)];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.proposalRootHash = function (scAddress, proposalId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.proposalRootHashRaw(scAddress, proposalId)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.proposalRootHashRaw = function (scAddress, proposalId) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, response, stringsArray;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methods.getProposalRootHash([proposalId]);
                            return [4 /*yield*/, this.getGenericData(interaction)];
                        case 2:
                            response = _a.sent();
                            stringsArray = response.firstValue.valueOf().map(function (bn) {
                                return (0, token_converters_1.decimalToHex)(bn);
                            });
                            return [2 /*return*/, stringsArray.join('')];
                    }
                });
            });
        };
        GovernanceTokenSnapshotAbiService_1.prototype.vote = function (sender, args) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, rootHash, governanceMerkle, addressLeaf;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(args.contractAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            return [4 /*yield*/, this.proposalRootHash(args.contractAddress, args.proposalId)];
                        case 2:
                            rootHash = _a.sent();
                            return [4 /*yield*/, this.governanceMerkle.getMerkleTree(rootHash)];
                        case 3:
                            governanceMerkle = _a.sent();
                            addressLeaf = governanceMerkle.getUserLeaf(sender);
                            return [2 /*return*/, contract.methodsExplicit
                                    .vote([
                                    new typesystem_1.U64Value(new bignumber_js_1.default(args.proposalId)),
                                    new typesystem_1.U64Value(new bignumber_js_1.default(args.vote)),
                                    new typesystem_1.U64Value(new bignumber_js_1.default(addressLeaf.balance)),
                                    new typesystem_1.BytesValue(governanceMerkle.getProofBuffer(addressLeaf)),
                                ])
                                    .withGasLimit(config_1.gasConfig.governance.vote.tokenSnapshot)
                                    .withChainID(config_1.drtConfig.chainID)
                                    .buildTransaction()
                                    .toPlainObject()];
                    }
                });
            });
        };
        return GovernanceTokenSnapshotAbiService_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GovernanceTokenSnapshotAbiService");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _getAddressShardID_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _minFeeForPropose_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _quorum_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _votingDelayInBlocks_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _votingPeriodInBlocks_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _feeTokenId_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _withdrawPercentageDefeated_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _proposals_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _userVotedProposals_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _proposalVotes_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _proposalStatus_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _proposalRootHash_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _vote_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)({
                logArgs: true,
            })];
        __esDecorate(_classThis, null, _getAddressShardID_decorators, { kind: "method", name: "getAddressShardID", static: false, private: false, access: { has: function (obj) { return "getAddressShardID" in obj; }, get: function (obj) { return obj.getAddressShardID; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _minFeeForPropose_decorators, { kind: "method", name: "minFeeForPropose", static: false, private: false, access: { has: function (obj) { return "minFeeForPropose" in obj; }, get: function (obj) { return obj.minFeeForPropose; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _quorum_decorators, { kind: "method", name: "quorum", static: false, private: false, access: { has: function (obj) { return "quorum" in obj; }, get: function (obj) { return obj.quorum; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _votingDelayInBlocks_decorators, { kind: "method", name: "votingDelayInBlocks", static: false, private: false, access: { has: function (obj) { return "votingDelayInBlocks" in obj; }, get: function (obj) { return obj.votingDelayInBlocks; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _votingPeriodInBlocks_decorators, { kind: "method", name: "votingPeriodInBlocks", static: false, private: false, access: { has: function (obj) { return "votingPeriodInBlocks" in obj; }, get: function (obj) { return obj.votingPeriodInBlocks; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _feeTokenId_decorators, { kind: "method", name: "feeTokenId", static: false, private: false, access: { has: function (obj) { return "feeTokenId" in obj; }, get: function (obj) { return obj.feeTokenId; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _withdrawPercentageDefeated_decorators, { kind: "method", name: "withdrawPercentageDefeated", static: false, private: false, access: { has: function (obj) { return "withdrawPercentageDefeated" in obj; }, get: function (obj) { return obj.withdrawPercentageDefeated; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _proposals_decorators, { kind: "method", name: "proposals", static: false, private: false, access: { has: function (obj) { return "proposals" in obj; }, get: function (obj) { return obj.proposals; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _userVotedProposals_decorators, { kind: "method", name: "userVotedProposals", static: false, private: false, access: { has: function (obj) { return "userVotedProposals" in obj; }, get: function (obj) { return obj.userVotedProposals; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _proposalVotes_decorators, { kind: "method", name: "proposalVotes", static: false, private: false, access: { has: function (obj) { return "proposalVotes" in obj; }, get: function (obj) { return obj.proposalVotes; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _proposalStatus_decorators, { kind: "method", name: "proposalStatus", static: false, private: false, access: { has: function (obj) { return "proposalStatus" in obj; }, get: function (obj) { return obj.proposalStatus; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _proposalRootHash_decorators, { kind: "method", name: "proposalRootHash", static: false, private: false, access: { has: function (obj) { return "proposalRootHash" in obj; }, get: function (obj) { return obj.proposalRootHash; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _vote_decorators, { kind: "method", name: "vote", static: false, private: false, access: { has: function (obj) { return "vote" in obj; }, get: function (obj) { return obj.vote; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GovernanceTokenSnapshotAbiService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GovernanceTokenSnapshotAbiService = _classThis;
}();
exports.GovernanceTokenSnapshotAbiService = GovernanceTokenSnapshotAbiService;
var GovernanceEnergyAbiService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = GovernanceTokenSnapshotAbiService;
    var _instanceExtraInitializers = [];
    var _minEnergyForPropose_decorators;
    var _feesCollectorAddress_decorators;
    var _energyFactoryAddress_decorators;
    var _vote_decorators;
    var GovernanceEnergyAbiService = _classThis = /** @class */ (function (_super) {
        __extends(GovernanceEnergyAbiService_1, _super);
        function GovernanceEnergyAbiService_1(drtProxy, governanceMerkle, governanceDescription) {
            var _this = _super.call(this, drtProxy, governanceMerkle, governanceDescription) || this;
            _this.drtProxy = (__runInitializers(_this, _instanceExtraInitializers), drtProxy);
            _this.governanceMerkle = governanceMerkle;
            _this.governanceDescription = governanceDescription;
            _this.type = governance_1.GovernanceType.ENERGY;
            return _this;
        }
        GovernanceEnergyAbiService_1.prototype.minEnergyForPropose = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.minEnergyForProposeRaw(scAddress)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceEnergyAbiService_1.prototype.minEnergyForProposeRaw = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methods.getMinEnergyForPropose();
                            return [4 /*yield*/, this.getGenericData(interaction)];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response.firstValue.valueOf().toFixed()];
                    }
                });
            });
        };
        GovernanceEnergyAbiService_1.prototype.feesCollectorAddress = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.feesCollectorAddressRaw(scAddress)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceEnergyAbiService_1.prototype.feesCollectorAddressRaw = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methods.getFeesCollectorAddress();
                            return [4 /*yield*/, this.getGenericData(interaction)];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response.firstValue.valueOf().bech32()];
                    }
                });
            });
        };
        GovernanceEnergyAbiService_1.prototype.energyFactoryAddress = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.energyFactoryAddressRaw(scAddress)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceEnergyAbiService_1.prototype.energyFactoryAddressRaw = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var contract, interaction, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(scAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            interaction = contract.methods.getEnergyFactoryAddress();
                            return [4 /*yield*/, this.getGenericData(interaction)];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response.firstValue.valueOf().bech32()];
                    }
                });
            });
        };
        GovernanceEnergyAbiService_1.prototype.vote = function (sender, args) {
            return __awaiter(this, void 0, void 0, function () {
                var contract;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.drtProxy.getGovernanceSmartContract(args.contractAddress, this.type)];
                        case 1:
                            contract = _a.sent();
                            return [2 /*return*/, contract.methodsExplicit
                                    .vote([
                                    new typesystem_1.U64Value(new bignumber_js_1.default(args.proposalId)),
                                    new typesystem_1.U64Value(new bignumber_js_1.default(args.vote)),
                                ])
                                    .withGasLimit(config_1.gasConfig.governance.vote.energy)
                                    .withChainID(config_1.drtConfig.chainID)
                                    .buildTransaction()
                                    .toPlainObject()];
                    }
                });
            });
        };
        return GovernanceEnergyAbiService_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GovernanceEnergyAbiService");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _minEnergyForPropose_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _feesCollectorAddress_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _energyFactoryAddress_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _vote_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)({
                logArgs: true,
            })];
        __esDecorate(_classThis, null, _minEnergyForPropose_decorators, { kind: "method", name: "minEnergyForPropose", static: false, private: false, access: { has: function (obj) { return "minEnergyForPropose" in obj; }, get: function (obj) { return obj.minEnergyForPropose; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _feesCollectorAddress_decorators, { kind: "method", name: "feesCollectorAddress", static: false, private: false, access: { has: function (obj) { return "feesCollectorAddress" in obj; }, get: function (obj) { return obj.feesCollectorAddress; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _energyFactoryAddress_decorators, { kind: "method", name: "energyFactoryAddress", static: false, private: false, access: { has: function (obj) { return "energyFactoryAddress" in obj; }, get: function (obj) { return obj.energyFactoryAddress; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _vote_decorators, { kind: "method", name: "vote", static: false, private: false, access: { has: function (obj) { return "vote" in obj; }, get: function (obj) { return obj.vote; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GovernanceEnergyAbiService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GovernanceEnergyAbiService = _classThis;
}();
exports.GovernanceEnergyAbiService = GovernanceEnergyAbiService;
