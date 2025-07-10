"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROPS = exports.URL = exports.TOKEN = exports.CUSTOM_FIELDS = void 0;
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
exports.CUSTOM_FIELDS = [
    {
        id: "610369",
        name: "productos",
        type: "0",
    },
    {
        id: "857975",
        name: "sendTemplate",
        type: "0",
    },
];
exports.TOKEN = `${process.env.TOKEN}`;
exports.URL = `${process.env.URL}`;
exports.PROPS = {
    CUSTOM_FIELDS: exports.CUSTOM_FIELDS,
    TOKEN: exports.TOKEN,
    URL: exports.URL,
};
//# sourceMappingURL=config.js.map