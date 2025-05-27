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
exports.GovernanceModule = void 0;
var common_1 = require("@nestjs/common");
var common_app_module_1 = require("../../common.app.module");
var context_module_1 = require("../../services/context/context.module");
var drt_communication_module_1 = require("src/services/dharitri-communication/drt.communication.module");
var token_module_1 = require("../tokens/token.module");
var energy_module_1 = require("../energy/energy.module");
var governance_abi_service_1 = require("./services/governance.abi.service");
var governance_quorum_service_1 = require("./services/governance.quorum.service");
var governance_token_snapshot_merkle_service_1 = require("./services/governance.token.snapshot.merkle.service");
var governance_compute_service_1 = require("./services/governance.compute.service");
var governance_transaction_resolver_1 = require("./resolvers/governance.transaction.resolver");
var governance_description_service_1 = require("./services/governance.description.service");
var governance_contract_resolver_1 = require("./resolvers/governance.contract.resolver");
var governance_setter_service_1 = require("./services/governance.setter.service");
var governance_query_resolver_1 = require("./resolvers/governance.query.resolver");
var governance_proposal_resolver_1 = require("./resolvers/governance.proposal.resolver");
var governance_service_1 = require("./services/governance.service");
var governance_abi_factory_1 = require("./services/governance.abi.factory");
var governance_factory_1 = require("./services/governance.factory");
var governance_old_energy_abi_service_1 = require("./services/governance.old.energy.abi.service");
var locked_asset_module_1 = require("../locked-asset-factory/locked-asset.module");
var elastic_service_1 = require("../../helpers/elastic.service");
var remote_config_module_1 = require("../remote-config/remote-config.module");
var GovernanceModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                common_app_module_1.CommonAppModule,
                drt_communication_module_1.MXCommunicationModule,
                context_module_1.ContextModule,
                token_module_1.TokenModule,
                energy_module_1.EnergyModule,
                locked_asset_module_1.LockedAssetModule,
                remote_config_module_1.RemoteConfigModule
            ],
            providers: [
                governance_service_1.GovernanceTokenSnapshotService,
                governance_service_1.GovernanceEnergyService,
                governance_abi_factory_1.GovernanceAbiFactory,
                governance_factory_1.GovernanceServiceFactory,
                governance_abi_service_1.GovernanceTokenSnapshotAbiService,
                governance_abi_service_1.GovernanceEnergyAbiService,
                governance_old_energy_abi_service_1.GovernanceOldEnergyAbiService,
                governance_quorum_service_1.GovernanceQuorumService,
                governance_token_snapshot_merkle_service_1.GovernanceTokenSnapshotMerkleService,
                governance_setter_service_1.GovernanceSetterService,
                governance_compute_service_1.GovernanceComputeService,
                governance_transaction_resolver_1.GovernanceTransactionService,
                governance_description_service_1.GovernanceDescriptionService,
                governance_query_resolver_1.GovernanceQueryResolver,
                governance_contract_resolver_1.GovernanceEnergyContractResolver,
                governance_contract_resolver_1.GovernanceTokenSnapshotContractResolver,
                governance_proposal_resolver_1.GovernanceProposalResolver,
                elastic_service_1.ElasticService,
            ],
            exports: [
                governance_abi_service_1.GovernanceTokenSnapshotAbiService,
                governance_abi_service_1.GovernanceEnergyAbiService,
                governance_setter_service_1.GovernanceSetterService,
                governance_compute_service_1.GovernanceComputeService,
                governance_service_1.GovernanceTokenSnapshotService,
                governance_service_1.GovernanceEnergyService,
                governance_abi_factory_1.GovernanceAbiFactory,
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var GovernanceModule = _classThis = /** @class */ (function () {
        function GovernanceModule_1() {
        }
        return GovernanceModule_1;
    }());
    __setFunctionName(_classThis, "GovernanceModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GovernanceModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GovernanceModule = _classThis;
}();
exports.GovernanceModule = GovernanceModule;
