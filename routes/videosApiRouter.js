"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var videoController_1 = __importDefault(require("../controllers/videoController"));
var router = express_1["default"].Router();
router.post('/', videoController_1["default"].addVideoForApi);
router.get('/', videoController_1["default"].list); // vai ser acessado pela função getAll do front, depois tenho que ver onde essa função getAll é chamada
exports["default"] = router;
//# sourceMappingURL=videosApiRouter.js.map