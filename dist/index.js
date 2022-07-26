"use strict";
// export { default as ping } from './queries/ping';
Object.defineProperty(exports, "__esModule", { value: true });
const profile_1 = require("./queries/profile");
(0, profile_1.defaultProfile)('0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3').then(console.log).catch(console.error);
