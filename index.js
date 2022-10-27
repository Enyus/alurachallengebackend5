"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var videoRouter_1 = __importDefault(require("./routes/videoRouter"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use('/videos', videoRouter_1["default"]);
app.listen(3333, function () {
    console.log("App rodando em http://localhost:3333/");
});
//# sourceMappingURL=index.js.map