"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const api = process.env.NODE_APP_API || "https://api.hnpwa.com/v0/";
const axiosInstance = axios_1.default.create({
    baseURL: api,
});
exports.default = axiosInstance;
