"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toVoteType = exports.toGovernanceProposalStatus = exports.governanceContractsAddresses = exports.governanceSmoothingFunction = exports.governanceType = exports.GovernanceSmoothingFunction = exports.GovernanceType = void 0;
var config_1 = require("../config");
var governance_proposal_model_1 = require("../modules/governance/models/governance.proposal.model");
var graphql_1 = require("@nestjs/graphql");
var sdk_exchange_1 = require("@terradharitri/sdk-exchange");
var GovernanceType;
(function (GovernanceType) {
    GovernanceType["ENERGY"] = "energy";
    GovernanceType["OLD_ENERGY"] = "oldEnergy";
    GovernanceType["TOKEN_SNAPSHOT"] = "tokenSnapshot";
})(GovernanceType || (exports.GovernanceType = GovernanceType = {}));
(0, graphql_1.registerEnumType)(GovernanceType, { name: 'GovernanceType' });
var toTypeEnum = function (type) {
    switch (type) {
        case GovernanceType.ENERGY.toString():
            return GovernanceType.ENERGY;
        case GovernanceType.TOKEN_SNAPSHOT.toString():
            return GovernanceType.TOKEN_SNAPSHOT;
        case GovernanceType.OLD_ENERGY.toString():
            return GovernanceType.OLD_ENERGY;
        default:
            return undefined;
    }
};
var GovernanceSmoothingFunction;
(function (GovernanceSmoothingFunction) {
    GovernanceSmoothingFunction["CVADRATIC"] = "cvadratic";
    GovernanceSmoothingFunction["LINEAR"] = "linear";
})(GovernanceSmoothingFunction || (exports.GovernanceSmoothingFunction = GovernanceSmoothingFunction = {}));
(0, graphql_1.registerEnumType)(GovernanceSmoothingFunction, { name: 'GovernanceSmoothingFunction' });
var toSmoothingFunctionEnum = function (type) {
    switch (type) {
        case GovernanceSmoothingFunction.CVADRATIC.toString():
            return GovernanceSmoothingFunction.CVADRATIC;
        case GovernanceSmoothingFunction.LINEAR.toString():
            return GovernanceSmoothingFunction.LINEAR;
        default:
            return undefined;
    }
};
var governanceType = function (governanceAddress) {
    var types = Object.keys(config_1.governanceConfig);
    for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
        var type = types_1[_i];
        var smoothingFunctions = Object.keys(config_1.governanceConfig[type]);
        for (var _a = 0, smoothingFunctions_1 = smoothingFunctions; _a < smoothingFunctions_1.length; _a++) {
            var smoothingFunction = smoothingFunctions_1[_a];
            var address = config_1.governanceConfig[type][smoothingFunction].find(function (address) { return address === governanceAddress; });
            if (address !== undefined) {
                return toTypeEnum(type);
            }
        }
    }
    return undefined;
};
exports.governanceType = governanceType;
var governanceSmoothingFunction = function (governanceAddress) {
    var types = Object.keys(config_1.governanceConfig);
    for (var _i = 0, types_2 = types; _i < types_2.length; _i++) {
        var type = types_2[_i];
        var smoothingFunctions = Object.keys(config_1.governanceConfig[type]);
        for (var _a = 0, smoothingFunctions_2 = smoothingFunctions; _a < smoothingFunctions_2.length; _a++) {
            var smoothingFunction = smoothingFunctions_2[_a];
            var address = config_1.governanceConfig[type][smoothingFunction].find(function (address) { return address === governanceAddress; });
            if (address !== undefined) {
                return toSmoothingFunctionEnum(smoothingFunction);
            }
        }
    }
    return undefined;
};
exports.governanceSmoothingFunction = governanceSmoothingFunction;
var governanceContractsAddresses = function (types) {
    var addresses = [];
    if (types === undefined || types.length === 0) {
        types = Object.keys(config_1.governanceConfig);
    }
    for (var _i = 0, types_3 = types; _i < types_3.length; _i++) {
        var type = types_3[_i];
        var smoothingFunctions = Object.keys(config_1.governanceConfig[type]);
        for (var _a = 0, smoothingFunctions_3 = smoothingFunctions; _a < smoothingFunctions_3.length; _a++) {
            var smoothingFunction = smoothingFunctions_3[_a];
            addresses.push.apply(addresses, config_1.governanceConfig[type][smoothingFunction]);
        }
    }
    return addresses;
};
exports.governanceContractsAddresses = governanceContractsAddresses;
var toGovernanceProposalStatus = function (status) {
    switch (status) {
        case 'None':
            return governance_proposal_model_1.GovernanceProposalStatus.None;
        case 'Pending':
            return governance_proposal_model_1.GovernanceProposalStatus.Pending;
        case 'Active':
            return governance_proposal_model_1.GovernanceProposalStatus.Active;
        case 'Defeated':
            return governance_proposal_model_1.GovernanceProposalStatus.Defeated;
        case 'DefeatedWithVeto':
            return governance_proposal_model_1.GovernanceProposalStatus.DefeatedWithVeto;
        case 'Succeeded':
            return governance_proposal_model_1.GovernanceProposalStatus.Succeeded;
        default:
            return undefined;
    }
};
exports.toGovernanceProposalStatus = toGovernanceProposalStatus;
var toVoteType = function (event) {
    switch (event) {
        case sdk_exchange_1.GOVERNANCE_EVENTS.UP:
            return governance_proposal_model_1.VoteType.UpVote;
        case sdk_exchange_1.GOVERNANCE_EVENTS.DOWN:
            return governance_proposal_model_1.VoteType.DownVote;
        case sdk_exchange_1.GOVERNANCE_EVENTS.DOWN_VETO:
            return governance_proposal_model_1.VoteType.DownVetoVote;
        case sdk_exchange_1.GOVERNANCE_EVENTS.ABSTAIN:
            return governance_proposal_model_1.VoteType.AbstainVote;
        default:
            return governance_proposal_model_1.VoteType.NotVoted;
    }
};
exports.toVoteType = toVoteType;
