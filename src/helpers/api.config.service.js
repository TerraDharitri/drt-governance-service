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
exports.ApiConfigService = void 0;
var common_1 = require("@nestjs/common");
var ApiConfigService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ApiConfigService = _classThis = /** @class */ (function () {
        function ApiConfigService_1(configService) {
            this.configService = configService;
        }
        ApiConfigService_1.prototype.getPublicAppPort = function () {
            var port = this.configService.get('PORT');
            if (!port) {
                throw new Error('No public app port present');
            }
            return port;
        };
        ApiConfigService_1.prototype.getPrefix = function () {
            var port = this.configService.get('PREFIX');
            if (!port) {
                throw new Error('No prefix present');
            }
            return port;
        };
        ApiConfigService_1.prototype.getPublicAppListenAddress = function () {
            var listenAddress = this.configService.get('LISTEN_ADDRESS');
            if (!listenAddress) {
                throw new Error('No public app listen address present');
            }
            return listenAddress;
        };
        ApiConfigService_1.prototype.getPrivateAppPort = function () {
            var port = this.configService.get('PRIVATE_PORT');
            if (!port) {
                throw new Error('No private app port present');
            }
            return port;
        };
        ApiConfigService_1.prototype.getPrivateAppListenAddress = function () {
            var listenAddress = this.configService.get('PRIVATE_LISTEN_ADDRESS');
            if (!listenAddress) {
                throw new Error('No private app listen address present');
            }
            return listenAddress;
        };
        ApiConfigService_1.prototype.getCacheWarmerPort = function () {
            var port = this.configService.get('CACHEWARMER_PORT');
            if (!port) {
                throw new Error('No cache warmer app port present');
            }
            return port;
        };
        ApiConfigService_1.prototype.isPublicApiActive = function () {
            var publicApiActive = this.configService.get('ENABLE_PUBLIC_API');
            if (!publicApiActive) {
                throw new Error('No public api flag present');
            }
            return publicApiActive === 'true';
        };
        ApiConfigService_1.prototype.isCacheWarmerCronActive = function () {
            var cacheWramerActive = this.configService.get('ENABLE_CACHE_WARMER');
            if (!cacheWramerActive) {
                throw new Error('No cache warmer flag present');
            }
            return cacheWramerActive === 'true';
        };
        ApiConfigService_1.prototype.isPrivateAppActive = function () {
            var privateApiActive = this.configService.get('ENABLE_PRIVATE_API');
            if (!privateApiActive) {
                throw new Error('No private api flag present');
            }
            return privateApiActive === 'true';
        };
        ApiConfigService_1.prototype.isEventsNotifierAppActive = function () {
            var eventsNotifierAppActive = this.configService.get('ENABLE_EVENTS_NOTIFIER');
            if (!eventsNotifierAppActive) {
                throw new Error('No events notifier api flag present');
            }
            return eventsNotifierAppActive === 'true';
        };
        ApiConfigService_1.prototype.isTracerActive = function () {
            var tracerFlag = this.configService.get('ENABLE_TRACER');
            if (!tracerFlag) {
                throw new Error('No tracer flag present');
            }
            return tracerFlag === 'true';
        };
        ApiConfigService_1.prototype.getRedisUrl = function () {
            var redisUrl = this.configService.get('REDIS_URL');
            if (!redisUrl) {
                throw new Error('No redis url present');
            }
            return redisUrl;
        };
        ApiConfigService_1.prototype.getRedisPort = function () {
            var redisPort = this.configService.get('REDIS_PORT');
            if (!redisPort) {
                throw new Error('No redis port present');
            }
            return redisPort;
        };
        ApiConfigService_1.prototype.getRedisPassword = function () {
            var password = this.configService.get('REDIS_PASSWORD');
            return password !== '' ? password : undefined;
        };
        ApiConfigService_1.prototype.getApiUrl = function () {
            var apiUrl = this.configService.get('DRT_API_URL');
            if (!apiUrl) {
                throw new Error('No apiUrl present');
            }
            return apiUrl;
        };
        ApiConfigService_1.prototype.getKeepAliveTimeoutDownstream = function () {
            var keepAliveTimeoutDownstream = this.configService.get('KEEPALIVE_TIMEOUT_DOWNSTREAM');
            if (!keepAliveTimeoutDownstream) {
                throw new Error('No keepAliveTimeoutDownstream present');
            }
            return parseInt(keepAliveTimeoutDownstream);
        };
        ApiConfigService_1.prototype.getKeepAliveTimeoutUpstream = function () {
            var keepAliveTimeoutUpstream = this.configService.get('KEEPALIVE_TIMEOUT_UPSTREAM');
            if (!keepAliveTimeoutUpstream) {
                throw new Error('No keepAliveTimeoutUpstream present');
            }
            return parseInt(keepAliveTimeoutUpstream);
        };
        ApiConfigService_1.prototype.getMongoDBURL = function () {
            var mongoDBUrl = this.configService.get('MONGODB_URL');
            if (!mongoDBUrl) {
                throw new Error('No MongoDB URL present');
            }
            return mongoDBUrl;
        };
        ApiConfigService_1.prototype.getMongoDBDatabase = function () {
            var mongoDBDatabase = this.configService.get('MONGODB_DATABASE');
            if (!mongoDBDatabase) {
                throw new Error('No MongoDB Database present');
            }
            return mongoDBDatabase;
        };
        ApiConfigService_1.prototype.getMongoDBUsername = function () {
            var mongoDBUsername = this.configService.get('MONGODB_USERNAME');
            if (!mongoDBUsername) {
                throw new Error('No MongoDB username present');
            }
            return mongoDBUsername;
        };
        ApiConfigService_1.prototype.getMongoDBPassword = function () {
            var mongoDBPassword = this.configService.get('MONGODB_PASSWORD');
            if (!mongoDBPassword) {
                throw new Error('No MongoDB password present');
            }
            return mongoDBPassword;
        };
        ApiConfigService_1.prototype.getNativeAuthMaxExpirySeconds = function () {
            var maxExpiry = this.configService.get('NATIVE_AUTH_MAX_EXPIRY_SECONDS');
            if (!maxExpiry) {
                throw new Error('No native auth max expiry in seconds present');
            }
            return parseInt(maxExpiry);
        };
        ApiConfigService_1.prototype.getNativeAuthAcceptedOrigins = function () {
            var origins = this.configService.get('NATIVE_AUTH_ACCEPTED_ORIGINS');
            if (!origins) {
                throw new Error('No accepted origins present');
            }
            return origins.split(',');
        };
        ApiConfigService_1.prototype.getSecurityAdmins = function () {
            var admins = this.configService.get('SECURITY_ADMINS');
            if (!admins) {
                throw new Error('No security admins present');
            }
            return admins.split(',');
        };
        return ApiConfigService_1;
    }());
    __setFunctionName(_classThis, "ApiConfigService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ApiConfigService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ApiConfigService = _classThis;
}();
exports.ApiConfigService = ApiConfigService;
