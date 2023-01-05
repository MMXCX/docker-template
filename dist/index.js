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
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = require("./models/User");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT;
const mongo_uri = `${process.env.MONGO_URI}`;
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        name: 'Andrey',
        age: 21
    };
    yield new User_1.User(data).save();
    User_1.User.find().then(data => {
        res.json(data);
    });
}));
// app.use('/api', router)
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(mongo_uri);
        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
        });
    }
    catch (e) {
        console.log(e.message);
    }
});
start().then();
