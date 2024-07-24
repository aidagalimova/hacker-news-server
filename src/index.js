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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const getNewsById_1 = require("./requests/getNewsById/getNewsById");
const getAllNews_1 = require("./requests/getAllNews/getAllNews");
const getCommentsById_1 = require("./requests/getCommentsById/getCommentsById");
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, getAllNews_1.getAllNews)();
    if (result) {
        res.json(result);
    }
    else {
        res.status(404).send("Not found");
    }
}));
app.get("/news/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield (0, getNewsById_1.getNewsById)(id);
    if (result) {
        res.json(result);
    }
    else {
        res.status(404).send("Not found");
    }
}));
app.get("/comments/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield (0, getCommentsById_1.getCommentsById)(id);
    if (result) {
        res.json(result);
    }
    else {
        res.status(404).send("Not found");
    }
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
3;
