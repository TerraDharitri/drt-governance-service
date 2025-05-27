"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceProfiler = void 0;
var PerformanceProfiler = /** @class */ (function () {
    function PerformanceProfiler(description) {
        if (description === void 0) { description = ''; }
        this.stopped = 0;
        this.duration = 0;
        this.started = Date.now();
        this.description = description;
    }
    PerformanceProfiler.prototype.start = function (description) {
        if (description === void 0) { description = ''; }
        this.started = Date.now();
        this.description = description;
    };
    PerformanceProfiler.prototype.stop = function (description) {
        if (description === void 0) { description = null; }
        this.stopped = Date.now();
        this.duration = this.stopped - this.started;
    };
    return PerformanceProfiler;
}());
exports.PerformanceProfiler = PerformanceProfiler;
