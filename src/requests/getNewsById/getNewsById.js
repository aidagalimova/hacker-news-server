"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewsById = void 0;
const api_1 = __importDefault(require("../../api"));
const getNewsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api_1.default
        .get(`item/${id}.json`)
        .then((response) => {
        return response.data;
    })
        .catch((error) => {
        console.log(error);
    });
    if (response === null || response === void 0 ? void 0 : response.id) {
        const result = {
            id: response.id,
            title: response.title,
            points: response.points,
            user: response.user,
            date: new Date(response.time * 1e3).toLocaleDateString(),
            timeAgo: response.time_ago,
            url: response.url,
        };
        return result;
    }
    return;
});
exports.getNewsById = getNewsById;
