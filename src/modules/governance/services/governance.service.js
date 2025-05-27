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
exports.GovernanceEnergyService = exports.GovernanceTokenSnapshotService = void 0;
var common_1 = require("@nestjs/common");
var governance_1 = require("../../../utils/governance");
var governance_contract_model_1 = require("../models/governance.contract.model");
var governance_proposal_model_1 = require("../models/governance.proposal.model");
var sdk_nestjs_common_1 = require("@terradharitri/sdk-nestjs-common");
var caching_decorator_1 = require("../../../helpers/decorators/caching.decorator");
var cache_ttl_info_1 = require("../../../services/caching/cache.ttl.info");
var bignumber_js_1 = require("bignumber.js");
var GovernanceTokenSnapshotService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _votingPowerDecimals_decorators;
    var _userVotingPower_decorators;
    var GovernanceTokenSnapshotService = _classThis = /** @class */ (function () {
        function GovernanceTokenSnapshotService_1(governanceAbiFactory, governanceCompute, governanceQuorum, tokenService) {
            this.governanceAbiFactory = (__runInitializers(this, _instanceExtraInitializers), governanceAbiFactory);
            this.governanceCompute = governanceCompute;
            this.governanceQuorum = governanceQuorum;
            this.tokenService = tokenService;
        }
        GovernanceTokenSnapshotService_1.prototype.getGovernanceContracts = function (filters) {
            return __awaiter(this, void 0, void 0, function () {
                var governanceAddresses, governance, _i, governanceAddresses_1, address, type, contractInstance;
                return __generator(this, function (_a) {
                    governanceAddresses = (0, governance_1.governanceContractsAddresses)();
                    if (filters.contracts) {
                        governanceAddresses = governanceAddresses.filter(function (address) { return filters.contracts.includes(address); });
                    }
                    governance = [];
                    for (_i = 0, governanceAddresses_1 = governanceAddresses; _i < governanceAddresses_1.length; _i++) {
                        address = governanceAddresses_1[_i];
                        type = (0, governance_1.governanceType)(address);
                        contractInstance = void 0;
                        switch (type) {
                            case governance_1.GovernanceType.ENERGY:
                            case governance_1.GovernanceType.OLD_ENERGY:
                                contractInstance = new governance_contract_model_1.GovernanceEnergyContract({
                                    address: address,
                                });
                                break;
                            case governance_1.GovernanceType.TOKEN_SNAPSHOT:
                                contractInstance = new governance_contract_model_1.GovernanceTokenSnapshotContract({
                                    address: address,
                                });
                                break;
                        }
                        if (filters.type && contractInstance.constructor.name !== filters.type) {
                            continue;
                        }
                        // Add the contract to the list
                        governance.push(contractInstance);
                    }
                    return [2 /*return*/, governance];
                });
            });
        };
        GovernanceTokenSnapshotService_1.prototype.hasUserVoted = function (contractAddress, proposalId, userAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var userVotedProposals;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!userAddress) {
                                return [2 /*return*/, false];
                            }
                            return [4 /*yield*/, this.governanceAbiFactory.useAbi(contractAddress).userVotedProposals(contractAddress, userAddress)];
                        case 1:
                            userVotedProposals = _a.sent();
                            return [2 /*return*/, userVotedProposals.includes(proposalId)];
                    }
                });
            });
        };
        GovernanceTokenSnapshotService_1.prototype.userVote = function (contractAddress, proposalId, userAddress) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!userAddress) {
                        return [2 /*return*/, governance_proposal_model_1.VoteType.NotVoted];
                    }
                    return [2 /*return*/, this.governanceCompute.userVotedProposalsWithVoteType(contractAddress, userAddress, proposalId)];
                });
            });
        };
        GovernanceTokenSnapshotService_1.prototype.feeToken = function (contractAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var feeTokenId;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.governanceAbiFactory.useAbi(contractAddress).feeTokenId(contractAddress)];
                        case 1:
                            feeTokenId = _a.sent();
                            return [4 /*yield*/, this.tokenService.getTokenMetadata(feeTokenId)];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        GovernanceTokenSnapshotService_1.prototype.votingPowerDecimals = function (scAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var feeToken, oneUnit, smoothedOneUnit;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.feeToken(scAddress)];
                        case 1:
                            feeToken = _a.sent();
                            oneUnit = new bignumber_js_1.default(10).pow(feeToken.decimals);
                            smoothedOneUnit = this.smoothingFunction(scAddress, oneUnit.toFixed());
                            return [2 /*return*/, smoothedOneUnit.length - 1];
                    }
                });
            });
        };
        GovernanceTokenSnapshotService_1.prototype.userVotingPower = function (contractAddress, proposalId, userAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var rootHash, userQuorum;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.governanceAbiFactory.useAbi(contractAddress).proposalRootHash(contractAddress, proposalId)];
                        case 1:
                            rootHash = _a.sent();
                            return [4 /*yield*/, this.governanceQuorum.userQuorum(contractAddress, userAddress, rootHash)];
                        case 2:
                            userQuorum = _a.sent();
                            return [2 /*return*/, this.smoothingFunction(contractAddress, userQuorum)];
                    }
                });
            });
        };
        GovernanceTokenSnapshotService_1.prototype.smoothingFunction = function (scAddress, quorum) {
            switch ((0, governance_1.governanceSmoothingFunction)(scAddress)) {
                case governance_1.GovernanceSmoothingFunction.CVADRATIC:
                    return new bignumber_js_1.default(quorum).sqrt().integerValue().toFixed();
                case governance_1.GovernanceSmoothingFunction.LINEAR:
                    return new bignumber_js_1.default(quorum).integerValue().toFixed();
            }
        };
        return GovernanceTokenSnapshotService_1;
    }());
    __setFunctionName(_classThis, "GovernanceTokenSnapshotService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _votingPowerDecimals_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        _userVotingPower_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        __esDecorate(_classThis, null, _votingPowerDecimals_decorators, { kind: "method", name: "votingPowerDecimals", static: false, private: false, access: { has: function (obj) { return "votingPowerDecimals" in obj; }, get: function (obj) { return obj.votingPowerDecimals; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _userVotingPower_decorators, { kind: "method", name: "userVotingPower", static: false, private: false, access: { has: function (obj) { return "userVotingPower" in obj; }, get: function (obj) { return obj.userVotingPower; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GovernanceTokenSnapshotService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GovernanceTokenSnapshotService = _classThis;
}();
exports.GovernanceTokenSnapshotService = GovernanceTokenSnapshotService;
var GovernanceEnergyService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = GovernanceTokenSnapshotService;
    var _instanceExtraInitializers = [];
    var _userVotingPower_decorators;
    var GovernanceEnergyService = _classThis = /** @class */ (function (_super) {
        __extends(GovernanceEnergyService_1, _super);
        function GovernanceEnergyService_1(governanceAbiFactory, governanceCompute, governanceQuorum, tokenService, energyService) {
            var _this = _super.call(this, governanceAbiFactory, governanceCompute, governanceQuorum, tokenService) || this;
            _this.governanceAbiFactory = (__runInitializers(_this, _instanceExtraInitializers), governanceAbiFactory);
            _this.governanceCompute = governanceCompute;
            _this.governanceQuorum = governanceQuorum;
            _this.tokenService = tokenService;
            _this.energyService = energyService;
            return _this;
        }
        GovernanceEnergyService_1.prototype.userVotingPower = function (contractAddress, proposalId, userAddress) {
            return __awaiter(this, void 0, void 0, function () {
                var userEnergy;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.energyService.getUserEnergy(userAddress)];
                        case 1:
                            userEnergy = _a.sent();
                            return [2 /*return*/, this.smoothingFunction(contractAddress, userEnergy.amount)];
                    }
                });
            });
        };
        return GovernanceEnergyService_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GovernanceEnergyService");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _userVotingPower_decorators = [(0, sdk_nestjs_common_1.ErrorLoggerAsync)(), (0, caching_decorator_1.GetOrSetCache)({
                baseKey: 'governance',
                remoteTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.remoteTtl,
                localTtl: cache_ttl_info_1.CacheTtlInfo.ContractState.localTtl,
            })];
        __esDecorate(_classThis, null, _userVotingPower_decorators, { kind: "method", name: "userVotingPower", static: false, private: false, access: { has: function (obj) { return "userVotingPower" in obj; }, get: function (obj) { return obj.userVotingPower; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GovernanceEnergyService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GovernanceEnergyService = _classThis;
}();
exports.GovernanceEnergyService = GovernanceEnergyService;
