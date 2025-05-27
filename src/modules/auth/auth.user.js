"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
var common_1 = require("@nestjs/common");
var graphql_1 = require("@nestjs/graphql");
exports.AuthUser = (0, common_1.createParamDecorator)(function (key, req) {
    var _a, _b;
    var authUser = (_a = req.args[0]) === null || _a === void 0 ? void 0 : _a.auth;
    if (!authUser) {
        var ctx = graphql_1.GqlExecutionContext.create(req);
        authUser = (_b = ctx.getContext().req) === null || _b === void 0 ? void 0 : _b.auth;
    }
    if (!authUser) {
        return undefined;
    }
    if (key === undefined) {
        return authUser;
    }
    return authUser[key];
});
