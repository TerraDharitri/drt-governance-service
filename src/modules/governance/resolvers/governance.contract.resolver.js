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
exports.GovernanceEnergyContractResolver = exports.GovernanceTokenSnapshotContractResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var governance_proposal_model_1 = require("../models/governance.proposal.model");
var governance_contract_model_1 = require("../models/governance.contract.model");
var GovernanceTokenSnapshotContractResolver = function () {
    var _classDecorators = [(0, graphql_1.Resolver)(function () { return governance_contract_model_1.GovernanceTokenSnapshotContract; })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _shard_decorators;
    var _minFeeForPropose_decorators;
    var _quorum_decorators;
    var _votingDelayInBlocks_decorators;
    var _votingPeriodInBlocks_decorators;
    var _feeToken_decorators;
    var _withdrawPercentageDefeated_decorators;
    var _votingPowerDecimals_decorators;
    var _proposals_decorators;
    var GovernanceTokenSnapshotContractResolver = _classThis = /** @class */ (function () {
        function GovernanceTokenSnapshotContractResolver_1(governanceAbiFactory, governanceServiceFactory) {
            this.governanceAbiFactory = (__runInitializers(this, _instanceExtraInitializers), governanceAbiFactory);
            this.governanceServiceFactory = governanceServiceFactory;
        }
        GovernanceTokenSnapshotContractResolver_1.prototype.shard = function (contract) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.governanceAbiFactory.useAbi(contract.address).getAddressShardID(contract.address)];
                });
            });
        };
        GovernanceTokenSnapshotContractResolver_1.prototype.minFeeForPropose = function (contract) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.governanceAbiFactory.useAbi(contract.address).minFeeForPropose(contract.address)];
                });
            });
        };
        GovernanceTokenSnapshotContractResolver_1.prototype.quorum = function (contract) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.governanceAbiFactory.useAbi(contract.address).quorum(contract.address)];
                });
            });
        };
        GovernanceTokenSnapshotContractResolver_1.prototype.votingDelayInBlocks = function (contract) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.governanceAbiFactory.useAbi(contract.address).votingDelayInBlocks(contract.address)];
                });
            });
        };
        GovernanceTokenSnapshotContractResolver_1.prototype.votingPeriodInBlocks = function (contract) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.governanceAbiFactory.useAbi(contract.address).votingPeriodInBlocks(contract.address)];
                });
            });
        };
        GovernanceTokenSnapshotContractResolver_1.prototype.feeToken = function (contract) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.governanceServiceFactory.userService(contract.address).feeToken(contract.address)];
                });
            });
        };
        GovernanceTokenSnapshotContractResolver_1.prototype.withdrawPercentageDefeated = function (contract) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.governanceAbiFactory.useAbi(contract.address).withdrawPercentageDefeated(contract.address)];
                });
            });
        };
        GovernanceTokenSnapshotContractResolver_1.prototype.votingPowerDecimals = function (contract) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.governanceServiceFactory.userService(contract.address).votingPowerDecimals(contract.address)];
                });
            });
        };
        GovernanceTokenSnapshotContractResolver_1.prototype.proposals = function (contract, proposalId) {
            return __awaiter(this, void 0, void 0, function () {
                var proposals;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.governanceAbiFactory.useAbi(contract.address).proposals(contract.address)];
                        case 1:
                            proposals = _a.sent();
                            if (proposalId) {
                                return [2 /*return*/, proposals.filter(function (proposal) { return proposal.proposalId === proposalId; })];
                            }
                            else {
                                return [2 /*return*/, proposals];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        return GovernanceTokenSnapshotContractResolver_1;
    }());
    __setFunctionName(_classThis, "GovernanceTokenSnapshotContractResolver");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _shard_decorators = [(0, graphql_1.ResolveField)()];
        _minFeeForPropose_decorators = [(0, graphql_1.ResolveField)()];
        _quorum_decorators = [(0, graphql_1.ResolveField)()];
        _votingDelayInBlocks_decorators = [(0, graphql_1.ResolveField)()];
        _votingPeriodInBlocks_decorators = [(0, graphql_1.ResolveField)()];
        _feeToken_decorators = [(0, graphql_1.ResolveField)()];
        _withdrawPercentageDefeated_decorators = [(0, graphql_1.ResolveField)()];
        _votingPowerDecimals_decorators = [(0, graphql_1.ResolveField)()];
        _proposals_decorators = [(0, graphql_1.ResolveField)(function () { return [governance_proposal_model_1.GovernanceProposalModel]; })];
        __esDecorate(_classThis, null, _shard_decorators, { kind: "method", name: "shard", static: false, private: false, access: { has: function (obj) { return "shard" in obj; }, get: function (obj) { return obj.shard; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _minFeeForPropose_decorators, { kind: "method", name: "minFeeForPropose", static: false, private: false, access: { has: function (obj) { return "minFeeForPropose" in obj; }, get: function (obj) { return obj.minFeeForPropose; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _quorum_decorators, { kind: "method", name: "quorum", static: false, private: false, access: { has: function (obj) { return "quorum" in obj; }, get: function (obj) { return obj.quorum; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _votingDelayInBlocks_decorators, { kind: "method", name: "votingDelayInBlocks", static: false, private: false, access: { has: function (obj) { return "votingDelayInBlocks" in obj; }, get: function (obj) { return obj.votingDelayInBlocks; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _votingPeriodInBlocks_decorators, { kind: "method", name: "votingPeriodInBlocks", static: false, private: false, access: { has: function (obj) { return "votingPeriodInBlocks" in obj; }, get: function (obj) { return obj.votingPeriodInBlocks; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _feeToken_decorators, { kind: "method", name: "feeToken", static: false, private: false, access: { has: function (obj) { return "feeToken" in obj; }, get: function (obj) { return obj.feeToken; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _withdrawPercentageDefeated_decorators, { kind: "method", name: "withdrawPercentageDefeated", static: false, private: false, access: { has: function (obj) { return "withdrawPercentageDefeated" in obj; }, get: function (obj) { return obj.withdrawPercentageDefeated; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _votingPowerDecimals_decorators, { kind: "method", name: "votingPowerDecimals", static: false, private: false, access: { has: function (obj) { return "votingPowerDecimals" in obj; }, get: function (obj) { return obj.votingPowerDecimals; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _proposals_decorators, { kind: "method", name: "proposals", static: false, private: false, access: { has: function (obj) { return "proposals" in obj; }, get: function (obj) { return obj.proposals; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GovernanceTokenSnapshotContractResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GovernanceTokenSnapshotContractResolver = _classThis;
}();
exports.GovernanceTokenSnapshotContractResolver = GovernanceTokenSnapshotContractResolver;
var GovernanceEnergyContractResolver = function () {
    var _classDecorators = [(0, graphql_1.Resolver)(function () { return governance_contract_model_1.GovernanceEnergyContract; })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = GovernanceTokenSnapshotContractResolver;
    var _instanceExtraInitializers = [];
    var _minEnergyForPropose_decorators;
    var _feesCollectorAddress_decorators;
    var _energyFactoryAddress_decorators;
    var GovernanceEnergyContractResolver = _classThis = /** @class */ (function (_super) {
        __extends(GovernanceEnergyContractResolver_1, _super);
        function GovernanceEnergyContractResolver_1(governanceAbiFactory, governanceServiceFactory) {
            var _this = _super.call(this, governanceAbiFactory, governanceServiceFactory) || this;
            _this.governanceAbiFactory = (__runInitializers(_this, _instanceExtraInitializers), governanceAbiFactory);
            _this.governanceServiceFactory = governanceServiceFactory;
            return _this;
        }
        GovernanceEnergyContractResolver_1.prototype.minEnergyForPropose = function (contract) {
            return __awaiter(this, void 0, void 0, function () {
                var abi;
                return __generator(this, function (_a) {
                    abi = this.governanceAbiFactory.useAbi(contract.address);
                    return [2 /*return*/, abi.minEnergyForPropose(contract.address)];
                });
            });
        };
        GovernanceEnergyContractResolver_1.prototype.feesCollectorAddress = function (contract) {
            return __awaiter(this, void 0, void 0, function () {
                var abi;
                return __generator(this, function (_a) {
                    abi = this.governanceAbiFactory.useAbi(contract.address);
                    return [2 /*return*/, abi.feesCollectorAddress(contract.address)];
                });
            });
        };
        GovernanceEnergyContractResolver_1.prototype.energyFactoryAddress = function (contract) {
            return __awaiter(this, void 0, void 0, function () {
                var abi;
                return __generator(this, function (_a) {
                    abi = this.governanceAbiFactory.useAbi(contract.address);
                    return [2 /*return*/, abi.energyFactoryAddress(contract.address)];
                });
            });
        };
        return GovernanceEnergyContractResolver_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GovernanceEnergyContractResolver");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _minEnergyForPropose_decorators = [(0, graphql_1.ResolveField)()];
        _feesCollectorAddress_decorators = [(0, graphql_1.ResolveField)()];
        _energyFactoryAddress_decorators = [(0, graphql_1.ResolveField)()];
        __esDecorate(_classThis, null, _minEnergyForPropose_decorators, { kind: "method", name: "minEnergyForPropose", static: false, private: false, access: { has: function (obj) { return "minEnergyForPropose" in obj; }, get: function (obj) { return obj.minEnergyForPropose; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _feesCollectorAddress_decorators, { kind: "method", name: "feesCollectorAddress", static: false, private: false, access: { has: function (obj) { return "feesCollectorAddress" in obj; }, get: function (obj) { return obj.feesCollectorAddress; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _energyFactoryAddress_decorators, { kind: "method", name: "energyFactoryAddress", static: false, private: false, access: { has: function (obj) { return "energyFactoryAddress" in obj; }, get: function (obj) { return obj.energyFactoryAddress; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GovernanceEnergyContractResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GovernanceEnergyContractResolver = _classThis;
}();
exports.GovernanceEnergyContractResolver = GovernanceEnergyContractResolver;
