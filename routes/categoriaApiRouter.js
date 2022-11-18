"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var categoriaController_1 = __importDefault(require("../controllers/categoriaController"));
var router = express_1["default"].Router();
router.get('/', categoriaController_1["default"].listVideosForApi);
exports["default"] = router;
//# sourceMappingURL=categoriaApiRouter.js.map