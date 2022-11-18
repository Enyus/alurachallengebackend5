"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var videoRouter_1 = __importDefault(require("./routes/videoRouter"));
var categoriaRouter_1 = __importDefault(require("./routes/categoriaRouter"));
var userRouter_1 = __importDefault(require("./routes/userRouter"));
var categoriaApiRouter_1 = __importDefault(require("./routes/categoriaApiRouter"));
var videosApiRouter_1 = __importDefault(require("./routes/videosApiRouter"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])(
/* {
    origin: "http://www."
    Só aceita requisições deste front-end
}
*/
));
app.set('view engine', 'ejs');
app.use('/users', userRouter_1["default"]);
app.use('/videos', videoRouter_1["default"]);
app.use('/categorias', categoriaRouter_1["default"]);
app.use('/categoriasapi', categoriaApiRouter_1["default"]);
app.use('/videosapi', videosApiRouter_1["default"]);
app.use('/', function (req, res) { res.render('home'); });
app.listen(3333, function () {
    console.log("App rodando em http://localhost:3333/");
});
//# sourceMappingURL=index.js.map