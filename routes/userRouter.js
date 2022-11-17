"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var userController_1 = __importDefault(require("../controllers/userController"));
var validaToken_1 = __importDefault(require("../middlewares/validaToken"));
var router = express_1["default"].Router();
router.get('/', validaToken_1["default"], userController_1["default"].list);
router.post('/login', userController_1["default"].login);
exports["default"] = router;
//# sourceMappingURL=userRouter.js.map