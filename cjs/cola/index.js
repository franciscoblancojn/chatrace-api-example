"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cola = void 0;
const tslib_1 = require("tslib");
const bottleneck_1 = tslib_1.__importDefault(require("bottleneck"));
exports.cola = new bottleneck_1.default({
    reservoir: 100,
    reservoirRefreshAmount: 100,
    reservoirRefreshInterval: 60 * 1000,
    maxConcurrent: 1,
});
//# sourceMappingURL=index.js.map