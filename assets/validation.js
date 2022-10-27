"use strict";
exports.__esModule = true;
var validation = function (data) {
    // Dados não podem ser indefinidos
    if (typeof (data) == 'undefined') {
        return false;
    }
    // Dados não podem ser vazios
    if (data.length == 0) {
        return false;
    }
    return true;
};
exports["default"] = validation;
//# sourceMappingURL=validation.js.map