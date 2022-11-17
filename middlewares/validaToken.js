"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function validaToken(req, res, next) {
    var token = req.headers.authorization;
    var PRIVATE_KEY = process.env.PRIVATE_KEY;
    // console.log(token);
    if (token == undefined) {
        res.status(401).send("Você deve se logar para conseguir um token de acesso.");
    }
    try {
        var payload = jsonwebtoken_1["default"].verify(token, PRIVATE_KEY);
        // console.log(payload)
        return next();
    }
    catch (error) {
        console.log(error);
        res.status(401).send("Você deve se logar para conseguir um token de acesso.");
    }
}
exports["default"] = validaToken;
//# sourceMappingURL=validaToken.js.map