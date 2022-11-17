"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var categoriaController_1 = __importDefault(require("../controllers/categoriaController"));
var validaToken_1 = __importDefault(require("../middlewares/validaToken"));
var router = express_1["default"].Router();
router.get('/', validaToken_1["default"], categoriaController_1["default"].list);
router.get('/:id', validaToken_1["default"], categoriaController_1["default"].selectCategoria);
router.post('/', validaToken_1["default"], categoriaController_1["default"].addCategoria);
router.put('/:id', validaToken_1["default"], categoriaController_1["default"].updateCategoria);
router["delete"]('/:id', validaToken_1["default"], categoriaController_1["default"].deleteCategoria);
router.get('/:id/videos', validaToken_1["default"], categoriaController_1["default"].selectVideosByCategoria);
exports["default"] = router;
//# sourceMappingURL=categoriaRouter.js.map