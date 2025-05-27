"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDcdtToken = isDcdtToken;
exports.isDcdtTokenValid = isDcdtTokenValid;
function isDcdtToken(token) {
    return token.identifier !== undefined;
}
function isDcdtTokenValid(token) {
    if (!token.identifier ||
        !token.decimals ||
        token.identifier === undefined ||
        token.decimals === undefined ||
        token.decimals === 0) {
        return false;
    }
    return true;
}
