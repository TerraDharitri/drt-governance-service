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
exports.MetricsCollector = void 0;
var sdk_nestjs_monitoring_1 = require("@terradharitri/sdk-nestjs-monitoring");
var prom_client_1 = require("prom-client");
var MetricsCollector = /** @class */ (function () {
    function MetricsCollector() {
    }
    MetricsCollector.ensureIsInitialized = function () {
        if (!MetricsCollector.fieldDurationHistogram) {
            MetricsCollector.fieldDurationHistogram = new prom_client_1.Histogram({
                name: 'field_duration',
                help: 'The time it takes to resolve a field',
                labelNames: ['name', 'path'],
                buckets: [],
            });
        }
        if (!MetricsCollector.queryDurationHistogram) {
            MetricsCollector.queryDurationHistogram = new prom_client_1.Histogram({
                name: 'query_duration',
                help: 'The time it takes to resolve a query',
                labelNames: ['query', 'origin'],
                buckets: [],
            });
        }
        if (!MetricsCollector.queryCpuHistogram) {
            MetricsCollector.queryCpuHistogram = new prom_client_1.Histogram({
                name: 'query_cpu',
                help: 'The CPU time it takes to resolve a query',
                labelNames: ['query', 'origin'],
                buckets: [],
            });
        }
        if (!MetricsCollector.awsQueryDurationHistogram) {
            MetricsCollector.awsQueryDurationHistogram = new prom_client_1.Histogram({
                name: 'aws_query',
                help: 'AWS Timestream Queries',
                labelNames: ['query'],
                buckets: [],
            });
        }
        if (!MetricsCollector.dataApiQueryDurationHistogram) {
            MetricsCollector.dataApiQueryDurationHistogram = new prom_client_1.Histogram({
                name: 'data_api_query',
                help: 'Data API Queries',
                labelNames: ['query'],
                buckets: [],
            });
        }
        if (!MetricsCollector.gasDifferenceHistogram) {
            MetricsCollector.gasDifferenceHistogram = new prom_client_1.Histogram({
                name: 'gas_difference',
                help: 'Gas Difference between gas limit and gas used',
                labelNames: ['endpoint', 'receiver'],
                buckets: [100000, 1000000, 10000000],
            });
        }
        if (!MetricsCollector.currentNonceGauge) {
            MetricsCollector.currentNonceGauge = new prom_client_1.Gauge({
                name: 'current_nonce',
                help: 'Current nonce of the given shard',
                labelNames: ['shardId'],
            });
        }
        if (!MetricsCollector.lastProcessedNonceGauge) {
            MetricsCollector.lastProcessedNonceGauge = new prom_client_1.Gauge({
                name: 'last_processed_nonce',
                help: 'Last processed nonce of the given shard',
                labelNames: ['shardId'],
            });
        }
        if (!MetricsCollector.guestQueriesGauge) {
            MetricsCollector.guestQueriesGauge = new prom_client_1.Gauge({
                name: 'guest_queries',
                help: 'Guest queries by operation',
                labelNames: ['operation'],
            });
        }
    };
    MetricsCollector.setFieldDuration = function (name, path, duration) {
        MetricsCollector.ensureIsInitialized();
        MetricsCollector.fieldDurationHistogram
            .labels(name, path)
            .observe(duration);
    };
    MetricsCollector.setQueryDuration = function (query, origin, duration) {
        MetricsCollector.ensureIsInitialized();
        MetricsCollector.queryDurationHistogram
            .labels(query, origin)
            .observe(duration);
    };
    MetricsCollector.setQueryCpu = function (query, origin, duration) {
        MetricsCollector.ensureIsInitialized();
        MetricsCollector.queryCpuHistogram
            .labels(query, origin)
            .observe(duration);
    };
    MetricsCollector.setRedisDuration = function (action, duration) {
        MetricsCollector.ensureIsInitialized();
        MetricsCollector.baseMetrics.setExternalCall('redis', duration);
        MetricsCollector.baseMetrics.setRedisDuration(action, duration);
    };
    MetricsCollector.setExternalCall = function (system, func, duration) {
        MetricsCollector.ensureIsInitialized();
        MetricsCollector.baseMetrics.setExternalCall(system, duration);
    };
    MetricsCollector.setAWSQueryDuration = function (queryName, duration) {
        MetricsCollector.ensureIsInitialized();
        MetricsCollector.awsQueryDurationHistogram
            .labels(queryName)
            .observe(duration);
    };
    MetricsCollector.setDataApiQueryDuration = function (queryName, duration) {
        MetricsCollector.ensureIsInitialized();
        MetricsCollector.dataApiQueryDurationHistogram
            .labels(queryName)
            .observe(duration);
    };
    MetricsCollector.setGasDifference = function (endpoint, receiver, gasDifference) {
        MetricsCollector.ensureIsInitialized();
        MetricsCollector.gasDifferenceHistogram
            .labels(endpoint, receiver)
            .observe(gasDifference);
    };
    MetricsCollector.setCurrentNonce = function (shardId, nonce) {
        MetricsCollector.ensureIsInitialized();
        MetricsCollector.currentNonceGauge.set({ shardId: shardId }, nonce);
    };
    MetricsCollector.setLastProcessedNonce = function (shardId, nonce) {
        MetricsCollector.ensureIsInitialized();
        MetricsCollector.lastProcessedNonceGauge.set({ shardId: shardId }, nonce);
    };
    MetricsCollector.incrementGuestQueries = function (operation, count) {
        MetricsCollector.ensureIsInitialized();
        MetricsCollector.guestQueriesGauge.inc({ operation: operation }, count);
    };
    MetricsCollector.incrementGuestHits = function () {
        MetricsCollector.ensureIsInitialized();
        sdk_nestjs_monitoring_1.MetricsService.incrementGuestHits();
    };
    MetricsCollector.incrementGuestNoCacheHits = function () {
        MetricsCollector.ensureIsInitialized();
        sdk_nestjs_monitoring_1.MetricsService.incrementGuestNoCacheHits();
    };
    MetricsCollector.setGuestHitQueries = function (count) {
        MetricsCollector.ensureIsInitialized();
        sdk_nestjs_monitoring_1.MetricsService.setGuestHitQueries(count);
    };
    MetricsCollector.getMetrics = function () {
        return __awaiter(this, void 0, void 0, function () {
            var baseMetrics, currentMetrics;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, MetricsCollector.baseMetrics.getMetrics()];
                    case 1:
                        baseMetrics = _a.sent();
                        return [4 /*yield*/, prom_client_1.register.metrics()];
                    case 2:
                        currentMetrics = _a.sent();
                        return [2 /*return*/, baseMetrics + '\n' + currentMetrics];
                }
            });
        });
    };
    MetricsCollector.baseMetrics = new sdk_nestjs_monitoring_1.MetricsService();
    return MetricsCollector;
}());
exports.MetricsCollector = MetricsCollector;
