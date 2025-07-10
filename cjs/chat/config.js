"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROPS = exports.URL = exports.TOKEN = exports.CUSTOM_FIELDS = void 0;
require("dotenv");
exports.CUSTOM_FIELDS = [
    {
        id: "1",
        name: "custom_field_1",
        type: "1",
    },
    {
        id: "2",
        name: "custom_field_2",
        type: "1",
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