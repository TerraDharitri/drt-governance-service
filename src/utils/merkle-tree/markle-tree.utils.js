"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerkleTreeUtils = exports.AddressVotingPower = void 0;
var merkletreejs_1 = require("merkletreejs");
var crypto_js_1 = require("crypto-js");
var bignumber_js_1 = require("bignumber.js");
var sdk_core_1 = require("@terradharitri/sdk-core");
var typesystem_1 = require("@terradharitri/sdk-core/out/smartcontracts/typesystem");
var AddressVotingPower = /** @class */ (function () {
    function AddressVotingPower() {
    }
    return AddressVotingPower;
}());
exports.AddressVotingPower = AddressVotingPower;
var MerkleTreeUtils = /** @class */ (function () {
    function MerkleTreeUtils(leaves) {
        var _this = this;
        var hashes = leaves.map(function (x) { return _this.encodeLeaf(x); });
        var tree = new merkletreejs_1.default(hashes, crypto_js_1.default.SHA256, {
            sortPairs: true,
        });
        this.tree = tree;
        this.leaves = leaves;
    }
    MerkleTreeUtils.prototype.getLeaves = function () {
        return this.leaves;
    };
    MerkleTreeUtils.prototype.verifyProof = function (leaf) {
        var root = this.tree.getRoot().toString('hex');
        var leafHash = this.encodeLeaf(leaf);
        var proof = this.tree.getProof(leafHash.toString());
        return this.tree.verify(proof, leafHash.toString(), root);
    };
    MerkleTreeUtils.prototype.getProof = function (leaf) {
        var leafHash = this.encodeLeaf(leaf);
        var proof = this.tree.getHexProof(leafHash.toString());
        return proof;
    };
    MerkleTreeUtils.prototype.getProofBuffer = function (leaf) {
        var proof = this.getProof(leaf);
        return Buffer.from(this.concatProof(proof), 'hex');
    };
    MerkleTreeUtils.prototype.getUserLeaf = function (address) {
        var leaf = this.leaves.find(function (x) { return x.address === address; });
        return leaf;
    };
    MerkleTreeUtils.prototype.getRootHash = function () {
        return this.tree.getHexRoot();
    };
    MerkleTreeUtils.prototype.getTotalBalance = function () {
        // iterate leaves and make sum of balance
        var totalBalance = new bignumber_js_1.default(0);
        for (var _i = 0, _a = this.leaves; _i < _a.length; _i++) {
            var leaf = _a[_i];
            totalBalance = totalBalance.plus(leaf.balance);
        }
        return totalBalance.toString();
    };
    MerkleTreeUtils.prototype.getDepth = function () {
        return this.tree.getDepth();
    };
    MerkleTreeUtils.prototype.concatProof = function (proof) {
        var concatenatedProof = '';
        for (var _i = 0, proof_1 = proof; _i < proof_1.length; _i++) {
            var node = proof_1[_i];
            concatenatedProof += node.substring(2);
        }
        return concatenatedProof;
    };
    MerkleTreeUtils.prototype.encodeLeaf = function (x) {
        var address = new sdk_core_1.Address(x.address);
        var argSerializer = new sdk_core_1.ArgSerializer();
        var votingPower = new typesystem_1.BigUIntValue(new bignumber_js_1.default(x.balance));
        var serializedPower = argSerializer.valuesToStrings([votingPower]);
        var leaf = Buffer.concat([Buffer.from(address.hex(), 'hex'), Buffer.from(serializedPower[0], 'hex')]);
        return crypto_js_1.default.SHA256(crypto_js_1.default.enc.Hex.parse(leaf.toString('hex')));
    };
    return MerkleTreeUtils;
}());
exports.MerkleTreeUtils = MerkleTreeUtils;
