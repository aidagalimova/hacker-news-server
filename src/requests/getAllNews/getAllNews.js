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
exports.getAllNews = void 0;
const api_1 = __importDefault(require("../../api"));
const getNewsByPage = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api_1.default
        .get(`newest/${page}.json`)
        .then((response) => {
        return response.data;
    })
        .catch((error) => {
        console.log(error);
    });
    return response;
});
const getAllNews = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Promise.all([
        getNewsByPage(1),
        getNewsByPage(2),
        getNewsByPage(3),
        getNewsByPage(4),
    ])
        .then((res) => {
        return res.flat().slice(0, 100);
    })
        .then((res) => {
        return res.map((news) => ({
            id: news.id,
            title: news.title,
            points: news.points,
            user: news.user,
            date: new Date(news.time * 1e3).toLocaleDateString(),
            timeAgo: news.time_ago,
        }));
    })
        .catch((error) => {
        console.log(error);
    });
    return result;
});
exports.getAllNews = getAllNews;
