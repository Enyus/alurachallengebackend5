"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var videoController_1 = __importDefault(require("../controllers/videoController"));
var validaToken_1 = __importDefault(require("../middlewares/validaToken"));
var router = express_1["default"].Router();
router.get('/free', videoController_1["default"].listFree);
router.get('/', validaToken_1["default"], videoController_1["default"].list);
router.get('/:id', validaToken_1["default"], videoController_1["default"].selectVideo);
router.post('/', validaToken_1["default"], videoController_1["default"].addVideo);
router.put('/:id', validaToken_1["default"], videoController_1["default"].updateVideo);
router["delete"]('/:id', validaToken_1["default"], videoController_1["default"].deleteVideo);
exports["default"] = router;
//# sourceMappingURL=videoRouter.js.map