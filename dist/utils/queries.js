"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PING = void 0;
require("isomorphic-unfetch");
exports.GET_PING = `
  query {
    ping
  }
`;
