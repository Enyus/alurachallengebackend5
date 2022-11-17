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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var prisma_1 = __importDefault(require("../assets/prisma"));
var validation_1 = __importDefault(require("../assets/validation"));
var videoController = {
    list: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, search, page, paginaMostrada, busca, videos, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.query, search = _a.search, page = _a.page;
                    paginaMostrada = 1;
                    if (page) {
                        paginaMostrada = Number(page);
                    }
                    busca = "";
                    if (search) {
                        busca = search.toString();
                    }
                    console.log(busca);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma_1["default"].video.findMany({
                            where: {
                                titulo: {
                                    contains: busca,
                                    mode: 'insensitive'
                                },
                                deletedAt: null
                            },
                            include: {
                                categoria: true
                            },
                            take: 5,
                            skip: 5 * (paginaMostrada - 1)
                        })];
                case 2:
                    videos = _b.sent();
                    return [2 /*return*/, res.status(202).json({ videos: videos })];
                case 3:
                    error_1 = _b.sent();
                    console.log(error_1);
                    return [2 /*return*/, res.status(404).send("Ocorreu um problema. Erro: ".concat(error_1))];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    selectVideo: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, video, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma_1["default"].video.findUnique({
                            where: {
                                id: Number(id)
                            },
                            include: {
                                categoria: true
                            }
                        })];
                case 2:
                    video = _a.sent();
                    // console.log(video);
                    if (video == null) {
                        return [2 /*return*/, res.status(404).send("Vídeo não cadastrado.")];
                    }
                    return [2 /*return*/, res.status(202).json(video)];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [2 /*return*/, res.status(404).send("Ocorreu um problema. Erro: ".concat(error_2))];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    addVideo: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, titulo, descricao, url, categoriaId, videoAdd, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, titulo = _a.titulo, descricao = _a.descricao, url = _a.url;
                    categoriaId = req.body.categoriaId;
                    if (!(0, validation_1["default"])(categoriaId)) {
                        categoriaId = 1;
                    }
                    else {
                        categoriaId = Number(categoriaId);
                    }
                    if (!((0, validation_1["default"])(titulo) && (0, validation_1["default"])(descricao) && (0, validation_1["default"])(url))) {
                        return [2 /*return*/, res
                                .status(412)
                                .send("Os dados enviados não passaram nos testes de validação")];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma_1["default"].video.create({
                            data: {
                                titulo: titulo,
                                descricao: descricao,
                                url: url,
                                categoriaId: categoriaId
                            }
                        })];
                case 2:
                    videoAdd = _b.sent();
                    return [2 /*return*/, res.status(202).json(videoAdd)];
                case 3:
                    error_3 = _b.sent();
                    console.log(error_3);
                    return [2 /*return*/, res.status(404).send("Ocorreu um problema. Erro: ".concat(error_3))];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    updateVideo: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, _a, titulo, descricao, url, categoriaId, dadosAlterados, videoUpdated, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.params.id;
                    _a = req.body, titulo = _a.titulo, descricao = _a.descricao, url = _a.url;
                    categoriaId = req.body.categoriaId;
                    dadosAlterados = {};
                    if ((0, validation_1["default"])(titulo)) {
                        dadosAlterados.titulo = titulo;
                    }
                    if ((0, validation_1["default"])(descricao)) {
                        dadosAlterados.descricao = descricao;
                    }
                    if ((0, validation_1["default"])(url)) {
                        dadosAlterados.url = url;
                    }
                    if (!((0, validation_1["default"])(titulo) || (0, validation_1["default"])(descricao) || (0, validation_1["default"])(url))) {
                        return [2 /*return*/, res
                                .status(412)
                                .send("Os campos de alteração não podem ser vazios ou indefinidos.")];
                    }
                    if ((0, validation_1["default"])(categoriaId)) {
                        dadosAlterados.categoriaId = Number(categoriaId);
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma_1["default"].video.update({
                            where: {
                                id: Number(id)
                            },
                            data: dadosAlterados
                        })];
                case 2:
                    videoUpdated = _b.sent();
                    //   console.log(videoUpdated);
                    return [2 /*return*/, res.status(202).json(videoUpdated)];
                case 3:
                    error_4 = _b.sent();
                    console.log(error_4);
                    return [2 /*return*/, res.status(404).send("Ocorreu um problema. Erro: ".concat(error_4))];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    deleteVideo: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, videoSelected, videoDeleted, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, prisma_1["default"].video.findUnique({
                            where: {
                                id: Number(id)
                            }
                        })];
                case 2:
                    videoSelected = _a.sent();
                    if (videoSelected == null) {
                        return [2 /*return*/, res.status(404).send("Vídeo não cadastrado.")];
                    }
                    return [4 /*yield*/, prisma_1["default"].video.update({
                            where: {
                                id: Number(id)
                            },
                            data: {
                                deletedAt: new Date()
                            }
                        })];
                case 3:
                    videoDeleted = _a.sent();
                    return [2 /*return*/, res.status(204).send("Vídeo deletado com sucesso.")];
                case 4:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [2 /*return*/, res.status(404).send("Ocorreu um problema. Erro: ".concat(error_5))];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    listFree: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var videosFree, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, prisma_1["default"].video.findMany({
                            where: {
                                deletedAt: null
                            },
                            include: {
                                categoria: true
                            },
                            take: 5
                        })];
                case 1:
                    videosFree = _a.sent();
                    return [2 /*return*/, res.status(202).json({ videosFree: videosFree })];
                case 2:
                    error_6 = _a.sent();
                    console.log(error_6);
                    return [2 /*return*/, res.status(404).send("Ocorreu um problema. Erro: ".concat(error_6))];
                case 3: return [2 /*return*/];
            }
        });
    }); }
};
exports["default"] = videoController;
//# sourceMappingURL=videoController.js.map