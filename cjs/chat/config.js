"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROPS = exports.URL = exports.TOKEN = exports.CUSTOM_FIELDS = void 0;
require("dotenv").config();
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