"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var videoController_1 = __importDefault(require("../controllers/videoController"));
var router = express_1["default"].Router();
router.get('/', videoController_1["default"].list);
router.get('/:id', videoController_1["default"].selectVideo);
router.post('/', videoController_1["default"].addVideo);
router.put('/:id', videoController_1["default"].updateVideo);
router["delete"]('/:id', videoController_1["default"].deleteVideo);
exports["default"] = router;
//# sourceMappingURL=videoRouter.js.map