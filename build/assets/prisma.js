"use strict";
exports.__esModule = true;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient({
    log: ['query']
});
exports["default"] = prisma;
//# sourceMappingURL=prisma.js.map