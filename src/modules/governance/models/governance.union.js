"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GovernanceDescriptionUnion = exports.GovernanceUnion = void 0;
var graphql_1 = require("@nestjs/graphql");
var governance_contract_model_1 = require("./governance.contract.model");
var governance_proposal_model_1 = require("./governance.proposal.model");
exports.GovernanceUnion = (0, graphql_1.createUnionType)({
    name: 'GovernanceTypes',
    types: function () {
        return [
            governance_contract_model_1.GovernanceTokenSnapshotContract,
            governance_contract_model_1.GovernanceEnergyContract,
        ];
    },
    resolveType: function (governance) {
        switch (governance.constructor.name) {
            case governance_contract_model_1.GovernanceTokenSnapshotContract.name:
                return governance_contract_model_1.GovernanceTokenSnapshotContract;
            case governance_contract_model_1.GovernanceEnergyContract.name:
                return governance_contract_model_1.GovernanceEnergyContract;
        }
    },
});
exports.GovernanceDescriptionUnion = (0, graphql_1.createUnionType)({
    name: 'GovernanceDescriptionVersions',
    types: function () {
        return [
            governance_proposal_model_1.DescriptionV0,
            governance_proposal_model_1.DescriptionV1,
            governance_proposal_model_1.DescriptionV2,
        ];
    },
    resolveType: function (description) {
        switch (description.version) {
            case 0:
                return governance_proposal_model_1.DescriptionV0;
            case 1:
                return governance_proposal_model_1.DescriptionV1;
            case 2:
                return governance_proposal_model_1.DescriptionV2;
        }
    },
});
