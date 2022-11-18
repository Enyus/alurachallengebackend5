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
var categoriaController = {
    list: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var page, paginaMostrada, categorias, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = req.query.page;
                    paginaMostrada = 1;
                    if (page) {
                        paginaMostrada = Number(page);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma_1["default"].categoria.findMany({
                            take: 5,
                            skip: 5 * (paginaMostrada - 1)
                        })];
                case 2:
                    categorias = _a.sent();
                    return [2 /*return*/, res.status(202).json({ categorias: categorias })];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [2 /*return*/, res.status(404).send("Ocorreu um problema. Erro: ".concat(error_1))];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    selectCategoria: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, categoria, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma_1["default"].categoria.findUnique({
                            where: {
                                id: Number(id)
                            }
                        })];
                case 2:
                    categoria = _a.sent();
                    if (categoria == null) {
                        return [2 /*return*/, res.status(404).send("Categoria não cadastrada.")];
                    }
                    return [2 /*return*/, res.status(202).json(categoria)];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [2 /*return*/, res.status(404).send("Ocorreu um problema. Erro: ".concat(error_2))];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    addCategoria: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, titulo, cor, categoriaAdded, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, titulo = _a.titulo, cor = _a.cor;
                    console.log(cor);
                    if (!(0, validation_1["default"])(titulo)) {
                        return [2 /*return*/, res.status(412).send("O campo de título não pode ser vazio.")];
                    }
                    if (!(0, validation_1["default"])(cor)) {
                        return [2 /*return*/, res.status(412).send("O campo cor não pode ser vazio.")];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma_1["default"].categoria.create({
                            data: {
                                titulo: titulo,
                                cor: cor
                            }
                        })];
                case 2:
                    categoriaAdded = _b.sent();
                    return [2 /*return*/, res.status(202).json(categoriaAdded)];
                case 3:
                    error_3 = _b.sent();
                    console.log(error_3);
                    return [2 /*return*/, res.status(404).send("Ocorreu um problema. Erro: ".concat(error_3))];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    updateCategoria: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, _a, titulo, cor, dadosAlterados, categoriaUpdated, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.params.id;
                    _a = req.body, titulo = _a.titulo, cor = _a.cor;
                    dadosAlterados = {};
                    if ((0, validation_1["default"])(titulo)) {
                        dadosAlterados.titulo = titulo;
                    }
                    if ((0, validation_1["default"])(cor)) {
                        dadosAlterados.cor = cor;
                    }
                    if (!((0, validation_1["default"])(titulo) && (0, validation_1["default"])(cor))) {
                        return [2 /*return*/, res
                                .status(412)
                                .send("Os campos de alteração não podem ser vazios ou indefinidos.")];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma_1["default"].categoria.update({
                            where: {
                                id: Number(id)
                            },
                            data: dadosAlterados
                        })];
                case 2:
                    categoriaUpdated = _b.sent();
                    return [2 /*return*/, res.status(202).json(categoriaUpdated)];
                case 3:
                    error_4 = _b.sent();
                    console.log(error_4);
                    return [2 /*return*/, res.status(404).send("Ocorreu um problema. Erro: ".concat(error_4))];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    deleteCategoria: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, categoriaSelected, categoriaDeleted, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, prisma_1["default"].categoria.findUnique({
                            where: {
                                id: Number(id)
                            }
                        })];
                case 2:
                    categoriaSelected = _a.sent();
                    if (categoriaSelected == null) {
                        return [2 /*return*/, res.status(404).send("Categoria não cadastrada.")];
                    }
                    return [4 /*yield*/, prisma_1["default"].categoria["delete"]({
                            where: {
                                id: Number(id)
                            }
                        })];
                case 3:
                    categoriaDeleted = _a.sent();
                    return [2 /*return*/, res.status(204)];
                case 4:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [2 /*return*/, res.status(404).send("Ocorreu um problema. Erro: ".concat(error_5))];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    selectVideosByCategoria: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, videosByCategoria, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma_1["default"].video.findMany({
                            where: {
                                categoriaId: Number(id)
                            },
                            include: {
                                categoria: true
                            }
                        })];
                case 2:
                    videosByCategoria = _a.sent();
                    if (videosByCategoria.length == 0) {
                        return [2 /*return*/, res
                                .status(404)
                                .send("Não existem vídeos cadastrados nesta categoria.")];
                    }
                    return [2 /*return*/, res.status(202).json(videosByCategoria)];
                case 3:
                    error_6 = _a.sent();
                    console.log(error_6);
                    return [2 /*return*/, res.status(404).send("Ocorreu um problema. Erro: ".concat(error_6))];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    listVideosForApi: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var videos, error_7;
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
                            }
                        })];
                case 1:
                    videos = _a.sent();
                    return [2 /*return*/, res.status(202).json({ videos: videos })];
                case 2:
                    error_7 = _a.sent();
                    console.log(error_7);
                    return [2 /*return*/, res.status(404).send("Ocorreu um problema. Erro: ".concat(error_7))];
                case 3: return [2 /*return*/];
            }
        });
    }); }
};
exports["default"] = categoriaController;
//# sourceMappingURL=categoriaController.js.map