"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("./mongoose"));
const app = express_1.default();
mongoose_1.default.on('error', console.error.bind(console, 'connection error:'));
mongoose_1.default.once('open', () => {
    console.log('Connection to backend db succesful');
});
const port = 4000;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/ping', (req, res) => {
    res.json({ pong: 'pong' });
});
app.get('/', (req, res) => {
    res.json({ service: 'Backend', success: true });
});
app.listen(port, () => console.log(`Backend service is listening on port ${port}`));
//# sourceMappingURL=server.js.map