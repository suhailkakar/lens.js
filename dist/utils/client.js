"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const core_1 = require("@urql/core");
require("isomorphic-unfetch");
exports.client = (0, core_1.createClient)({
    url: 'https://api.lens.dev',
});
