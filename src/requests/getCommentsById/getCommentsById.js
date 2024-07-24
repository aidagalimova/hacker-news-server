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
exports.getCommentsById = void 0;
const api_1 = __importDefault(require("../../api"));
const getCommentsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api_1.default
        .get(`item/${id}.json`)
        .then((response) => {
        return response.data;
    })
        .catch((error) => {
        console.log(error);
    });
    if (response.comments && response.comments_count !== undefined) {
        const result = {
            commentsCount: response.comments_count,
            comments: response.comments.map((item) => {
                return {
                    id: item.id,
                    user: item.user,
                    comments: item.comments,
                    commentsCount: item.comments_count,
                    content: (item.content = item.content),
                };
            }),
        };
        return result;
    }
    return;
});
exports.getCommentsById = getCommentsById;
