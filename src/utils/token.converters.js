"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenIdentifier = void 0;
exports.decimalToHex = decimalToHex;
function decimalToHex(d) {
    var h = d.toString(16);
    return h.length % 2 ? '0' + h : h;
}
var tokenIdentifier = function (tokenID, tokenNonce) {
    return "".concat(tokenID, "-").concat(decimalToHex(tokenNonce));
};
exports.tokenIdentifier = tokenIdentifier;
