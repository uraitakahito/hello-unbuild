"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const greeting_1 = require("./greeting");
const log = (...args) => {
    console.log(...args);
};
exports.log = log;
(0, exports.log)((0, greeting_1.hello)("unbuild"));
