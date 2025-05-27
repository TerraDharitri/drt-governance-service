"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@nestjs/core");
var microservices_1 = require("@nestjs/microservices");
var bignumber_js_1 = require("bignumber.js");
var public_app_module_1 = require("./public.app.module");
var private_app_module_1 = require("./private.app.module");
var cache_warmer_module_1 = require("./services/cache.warmer.module");
var pub_sub_module_1 = require("./services/pub.sub.module");
var logging_interceptor_1 = require("./utils/logging.interceptor");
var api_config_service_1 = require("./helpers/api.config.service");
var rabbitmq_processor_module_1 = require("./rabbitmq.processor.module");
var rabbitmq_consumer_1 = require("./modules/rabbitmq/rabbitmq.consumer");
var cookie_parser_1 = require("cookie-parser");
var nest_winston_1 = require("nest-winston");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var app, httpAdapterHostService, apiConfigService, httpServer, pubSubApp, privateApp, processorApp, eventsNotifierApp, rabbitMqService;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bignumber_js_1.BigNumber.config({ EXPONENTIAL_AT: [-30, 30] });
                    return [4 /*yield*/, core_1.NestFactory.create(public_app_module_1.PublicAppModule, {
                            bufferLogs: true,
                        })];
                case 1:
                    app = _a.sent();
                    app.useLogger(app.get(nest_winston_1.WINSTON_MODULE_NEST_PROVIDER));
                    httpAdapterHostService = app.get(core_1.HttpAdapterHost);
                    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
                    app.use((0, cookie_parser_1.default)());
                    apiConfigService = app.get(api_config_service_1.ApiConfigService);
                    httpServer = httpAdapterHostService.httpAdapter.getHttpServer();
                    httpServer.keepAliveTimeout =
                        apiConfigService.getKeepAliveTimeoutUpstream();
                    httpServer.headersTimeout = apiConfigService.getKeepAliveTimeoutUpstream(); //`keepAliveTimeout + server's expected response time`
                    return [4 /*yield*/, core_1.NestFactory.createMicroservice(pub_sub_module_1.PubSubModule, {
                            transport: microservices_1.Transport.REDIS,
                            options: {
                                host: apiConfigService.getRedisUrl(),
                                port: apiConfigService.getRedisPort(),
                                retryDelay: 1000,
                                retryAttempts: 10,
                                retryStrategy: function () { return 1000; },
                            },
                        })];
                case 2:
                    pubSubApp = _a.sent();
                    if (!apiConfigService.isPublicApiActive()) return [3 /*break*/, 4];
                    pubSubApp.listen();
                    app.enableCors({
                        origin: '*',
                    });
                    return [4 /*yield*/, app.listen(apiConfigService.getPublicAppPort(), apiConfigService.getPublicAppListenAddress())];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!apiConfigService.isPrivateAppActive()) return [3 /*break*/, 7];
                    return [4 /*yield*/, core_1.NestFactory.create(private_app_module_1.PrivateAppModule)];
                case 5:
                    privateApp = _a.sent();
                    privateApp.setGlobalPrefix(apiConfigService.getPrefix());
                    return [4 /*yield*/, privateApp.listen(apiConfigService.getPrivateAppPort(), apiConfigService.getPrivateAppListenAddress())];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    if (!apiConfigService.isCacheWarmerCronActive()) return [3 /*break*/, 10];
                    pubSubApp.listen();
                    return [4 /*yield*/, core_1.NestFactory.create(cache_warmer_module_1.CacheWarmerModule)];
                case 8:
                    processorApp = _a.sent();
                    return [4 /*yield*/, processorApp.listen(apiConfigService.getCacheWarmerPort(), apiConfigService.getPublicAppListenAddress())];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    if (!apiConfigService.isEventsNotifierAppActive()) return [3 /*break*/, 14];
                    return [4 /*yield*/, core_1.NestFactory.create(rabbitmq_processor_module_1.RabbitMqProcessorModule)];
                case 11:
                    eventsNotifierApp = _a.sent();
                    rabbitMqService = eventsNotifierApp.get(rabbitmq_consumer_1.RabbitMqConsumer);
                    return [4 /*yield*/, rabbitMqService.getFilterAddresses()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, eventsNotifierApp.listen(5673, '0.0.0.0')];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14: return [2 /*return*/];
            }
        });
    });
}
bootstrap();
