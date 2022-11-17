"use strict";
// Para rodar o seed, utilize o seguind comando no console: 'npx prisma db seed'
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
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var categoria1, categoria2, categoria3, categoria4, video1, video2, video3, video4, video5, video6, video7, video8, video9, video10, video11, video12, video13, video14, video15, video16, video17, video18, user1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_1["default"].categoria.upsert({
                        where: { id: 1 },
                        update: {
                            id: 1,
                            titulo: "livre",
                            cor: "white"
                        },
                        create: {
                            id: 1,
                            titulo: "livre",
                            cor: "white"
                        }
                    })];
                case 1:
                    categoria1 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].categoria.upsert({
                            where: { id: 2 },
                            update: {
                                id: 2,
                                titulo: "Front End",
                                cor: "#6BD1FF"
                            },
                            create: {
                                id: 2,
                                titulo: "Front End",
                                cor: "#6BD1FF"
                            }
                        })];
                case 2:
                    categoria2 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].categoria.upsert({
                            where: { id: 3 },
                            update: {
                                id: 3,
                                titulo: "Back End",
                                cor: "#00C86F"
                            },
                            create: {
                                id: 3,
                                titulo: "Back End",
                                cor: "#00C86F"
                            }
                        })];
                case 3:
                    categoria3 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].categoria.upsert({
                            where: { id: 4 },
                            update: {
                                id: 4,
                                titulo: "Data Science e Inteligência Artificial",
                                cor: "#9cd33b"
                            },
                            create: {
                                id: 4,
                                titulo: "Data Science e Inteligência Artificial",
                                cor: "#9cd33b"
                            }
                        })];
                case 4:
                    categoria4 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 1 },
                            update: {
                                id: 1,
                                titulo: "Ecossistema React JS com Charles Assunção",
                                descricao: "Fique por dentro das novas bibliotecas de React JS, o uso de componentes, as conhecidas Redux e GraphQL, além da discussão sobre o ciclo de vida no Front-End.",
                                url: "https://www.youtube.com/watch?v=F5As-8hWNIQ",
                                createdAt: new Date("2022-10-25T11:09:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 2
                            },
                            create: {
                                id: 1,
                                titulo: "Ecossistema React JS com Charles Assunção",
                                descricao: "Fique por dentro das novas bibliotecas de React JS, o uso de componentes, as conhecidas Redux e GraphQL, além da discussão sobre o ciclo de vida no Front-End.",
                                url: "https://www.youtube.com/watch?v=F5As-8hWNIQ",
                                createdAt: new Date("2022-10-25T11:09:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 2
                            }
                        })];
                case 5:
                    video1 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 2 },
                            update: {
                                id: 2,
                                titulo: "Cultura do aprendizado com Sérgio Lopes",
                                descricao: "Saiba como a cultura do aprendizado pode melhorar em muitos aspectos o ambiente de trabalho da sua empresa, desde ser uma solução para a escassez de profissionais com experiência até o aprendizado mútuo entre as pessoas.",
                                url: "https://www.youtube.com/watch?v=j5Hwydgcnsk",
                                createdAt: new Date("2022-10-25T11:10:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 1
                            },
                            create: {
                                id: 2,
                                titulo: "Cultura do aprendizado com Sérgio Lopes",
                                descricao: "Saiba como a cultura do aprendizado pode melhorar em muitos aspectos o ambiente de trabalho da sua empresa, desde ser uma solução para a escassez de profissionais com experiência até o aprendizado mútuo entre as pessoas.",
                                url: "https://www.youtube.com/watch?v=j5Hwydgcnsk",
                                createdAt: new Date("2022-10-25T11:10:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 1
                            }
                        })];
                case 6:
                    video2 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 3 },
                            update: {
                                id: 3,
                                titulo: "Os MELHORES livros de tecnologia para ler em Programação com Roberta Arcoverde",
                                descricao: "Conheça os melhores livros de tecnologia para se aprender computação ou programação, sejam iniciantes ou avançados, para base acadêmica, prática de programar e/ou de carreira no mundo do desenvolvimento.",
                                url: "https://www.youtube.com/watch?v=RvWQQRjz1Pw",
                                createdAt: new Date("2022-10-25T11:11:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 1
                            },
                            create: {
                                id: 3,
                                titulo: "Os MELHORES livros de tecnologia para ler em Programação com Roberta Arcoverde",
                                descricao: "Conheça os melhores livros de tecnologia para se aprender computação ou programação, sejam iniciantes ou avançados, para base acadêmica, prática de programar e/ou de carreira no mundo do desenvolvimento.",
                                url: "https://www.youtube.com/watch?v=RvWQQRjz1Pw",
                                createdAt: new Date("2022-10-25T11:11:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 1
                            }
                        })];
                case 7:
                    video3 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 4 },
                            update: {
                                id: 4,
                                titulo: "O que é ReactJS?",
                                descricao: "Neste vídeo, Vanessa Tonini e Mario Souto explicam isto para você falando sobre como esta ferramenta surgiu, para que ela serve, quais são suas aplicações e relação com outras ferramentas e como começar a trabalhar com ela.",
                                url: "https://www.youtube.com/watch?v=6IuQUgeDPg0",
                                createdAt: new Date("2022-11-04T11:48:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 2
                            },
                            create: {
                                id: 4,
                                titulo: "O que é ReactJS?",
                                descricao: "Neste vídeo, Vanessa Tonini e Mario Souto explicam isto para você falando sobre como esta ferramenta surgiu, para que ela serve, quais são suas aplicações e relação com outras ferramentas e como começar a trabalhar com ela.",
                                url: "https://www.youtube.com/watch?v=6IuQUgeDPg0",
                                createdAt: new Date("2022-11-04T11:48:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 2
                            }
                        })];
                case 8:
                    video4 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 5 },
                            update: {
                                id: 5,
                                titulo: "Quais as melhores práticas com React?",
                                descricao: "Recebemos o @Dev Soutinho nesse Hipsters Ponto Tube para falar sobre as melhores práticas com React e como você pode aproveitar melhor as possibilidades dessa tecnologia no cenário atual.",
                                url: "https://www.youtube.com/watch?v=k77WZrvuDQU",
                                createdAt: new Date("2022-11-04T11:50:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 2
                            },
                            create: {
                                id: 5,
                                titulo: "Quais as melhores práticas com React?",
                                descricao: "Recebemos o @Dev Soutinho nesse Hipsters Ponto Tube para falar sobre as melhores práticas com React e como você pode aproveitar melhor as possibilidades dessa tecnologia no cenário atual.",
                                url: "https://www.youtube.com/watch?v=k77WZrvuDQU",
                                createdAt: new Date("2022-11-04T11:50:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 2
                            }
                        })];
                case 9:
                    video5 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 6 },
                            update: {
                                id: 6,
                                titulo: "O que faz uma desenvolvedora front-end?",
                                descricao: "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!",
                                url: "https://www.youtube.com/watch?v=ZY3-MFxVdEw",
                                createdAt: new Date("2022-11-04T11:52:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 2
                            },
                            create: {
                                id: 6,
                                titulo: "O que faz uma desenvolvedora front-end?",
                                descricao: "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!",
                                url: "https://www.youtube.com/watch?v=ZY3-MFxVdEw",
                                createdAt: new Date("2022-11-04T11:52:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 2
                            }
                        })];
                case 10:
                    video6 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 7 },
                            update: {
                                id: 7,
                                titulo: "O que é REST?",
                                descricao: "Nesse video o instrutor Giovanni Tempobono explica o que é REST, da onde veio e para que serve!",
                                url: "https://www.youtube.com/watch?v=weQ8ssA6iBU",
                                createdAt: new Date("2022-11-04T11:54:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            },
                            create: {
                                id: 7,
                                titulo: "O que é REST?",
                                descricao: "Nesse video o instrutor Giovanni Tempobono explica o que é REST, da onde veio e para que serve!",
                                url: "https://www.youtube.com/watch?v=weQ8ssA6iBU",
                                createdAt: new Date("2022-11-04T11:54:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            }
                        })];
                case 11:
                    video7 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 8 },
                            update: {
                                id: 8,
                                titulo: "NGINX: Servidor Web, Proxy Reverso e API Gateway",
                                descricao: "Gabs Ferreira conversou com o @Dias de Dev, que é instrutor aqui da Alura e criou  nosso novo curso de NGINX",
                                url: "https://www.youtube.com/watch?v=I4oydqod7j0",
                                createdAt: new Date("2022-11-04T11:58:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            },
                            create: {
                                id: 8,
                                titulo: "NGINX: Servidor Web, Proxy Reverso e API Gateway",
                                descricao: "Gabs Ferreira conversou com o @Dias de Dev, que é instrutor aqui da Alura e criou  nosso novo curso de NGINX",
                                url: "https://www.youtube.com/watch?v=I4oydqod7j0",
                                createdAt: new Date("2022-11-04T11:58:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            }
                        })];
                case 12:
                    video8 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 9 },
                            update: {
                                id: 9,
                                titulo: "Evolução do C++",
                                descricao: "O que mudou durante a evolução da linguagem C e quais são, de fato, as novidades do C++ moderno? Nosso instrutor, Vinicius Dias, explica nesse vídeo esse processo de evolução e que novidades surgiram.",
                                url: "https://www.youtube.com/watch?v=_n5hLYGjdfk",
                                createdAt: new Date("2022-11-04T12:00:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            },
                            create: {
                                id: 9,
                                titulo: "Evolução do C++",
                                descricao: "O que mudou durante a evolução da linguagem C e quais são, de fato, as novidades do C++ moderno? Nosso instrutor, Vinicius Dias, explica nesse vídeo esse processo de evolução e que novidades surgiram.",
                                url: "https://www.youtube.com/watch?v=_n5hLYGjdfk",
                                createdAt: new Date("2022-11-04T12:00:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            }
                        })];
                case 13:
                    video9 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 10 },
                            update: {
                                id: 10,
                                titulo: "Java, Spring, Microserviços e vagas na Hotmart",
                                descricao: "Nessa live, Paulo Silveira conversa sobre a evolução do Java em microsserviços e sobre o caso da Hotmart com Marco Aurélio Ribeiro, especialista em desenvolvimento com 17 anos de carreira e trooper da Hotmart há mais de seis anos.",
                                url: "https://www.youtube.com/watch?v=f46tw7lOt_0",
                                createdAt: new Date("2022-11-04T12:01:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            },
                            create: {
                                id: 10,
                                titulo: "Java, Spring, Microserviços e vagas na Hotmart",
                                descricao: "Nessa live, Paulo Silveira conversa sobre a evolução do Java em microsserviços e sobre o caso da Hotmart com Marco Aurélio Ribeiro, especialista em desenvolvimento com 17 anos de carreira e trooper da Hotmart há mais de seis anos.",
                                url: "https://www.youtube.com/watch?v=f46tw7lOt_0",
                                createdAt: new Date("2022-11-04T12:01:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            }
                        })];
                case 14:
                    video10 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 11 },
                            update: {
                                id: 11,
                                titulo: "O que é Data Science?",
                                descricao: "Python é o novo Excel? Para que serve o R, Pandas e Jupyter? E qual é, afinal, a diferença entre o Data Science, Business Intelligence e Machine Learning? Descubra no primeiro episódio de Hipsters Ponto Tube!",
                                url: "https://www.youtube.com/watch?v=5b9Z8toVaAU",
                                createdAt: new Date("2022-11-04T12:02:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 4
                            },
                            create: {
                                id: 11,
                                titulo: "O que é Data Science?",
                                descricao: "Python é o novo Excel? Para que serve o R, Pandas e Jupyter? E qual é, afinal, a diferença entre o Data Science, Business Intelligence e Machine Learning? Descubra no primeiro episódio de Hipsters Ponto Tube!",
                                url: "https://www.youtube.com/watch?v=5b9Z8toVaAU",
                                createdAt: new Date("2022-11-04T12:02:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 4
                            }
                        })];
                case 15:
                    video11 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 12 },
                            update: {
                                id: 12,
                                titulo: "Aprenda tudo sobre Data Science, seus primeiros passos",
                                descricao: "Você é entusiasta de Inteligência artificial, é do mundo Python, de BI etc e quer aprender sobre Data Science? Preparamos este curso pra você!",
                                url: "https://www.youtube.com/watch?v=IQdISZCosAE",
                                createdAt: new Date("2022-11-04T12:03:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 4
                            },
                            create: {
                                id: 12,
                                titulo: "Aprenda tudo sobre Data Science, seus primeiros passos",
                                descricao: "Você é entusiasta de Inteligência artificial, é do mundo Python, de BI etc e quer aprender sobre Data Science? Preparamos este curso pra você!",
                                url: "https://www.youtube.com/watch?v=IQdISZCosAE",
                                createdAt: new Date("2022-11-04T12:03:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 4
                            }
                        })];
                case 16:
                    video12 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 13 },
                            update: {
                                id: 13,
                                titulo: "Quais as profissões em Ciência de Dados? com Mikaeri Ohana",
                                descricao: "Quer saber qual carreira seguir na área de Ciência de Dados? A Mikaeri Ohana, especialista em Data Science, te ajuda a descobrir alguns caminhos para mergulhar nessa profissão.",
                                url: "https://www.youtube.com/watch?v=5CHLH9LU1Uc",
                                createdAt: new Date("2022-11-04T12:03:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 4
                            },
                            create: {
                                id: 13,
                                titulo: "Quais as profissões em Ciência de Dados? com Mikaeri Ohana",
                                descricao: "Quer saber qual carreira seguir na área de Ciência de Dados? A Mikaeri Ohana, especialista em Data Science, te ajuda a descobrir alguns caminhos para mergulhar nessa profissão.",
                                url: "https://www.youtube.com/watch?v=5CHLH9LU1Uc",
                                createdAt: new Date("2022-11-04T12:03:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 4
                            }
                        })];
                case 17:
                    video13 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 14 },
                            update: {
                                id: 14,
                                titulo: "Aprenda a transformar design em código com o Figma",
                                descricao: "A Rafaella Ballerini, instrutora de Front-End na Alura, vem trazer várias dicas pra você transformar o design em código. Aprenda como exportar imagens, ícones e inspecionar os elementos direto do Figma.",
                                url: "https://www.youtube.com/watch?v=sup2hlWm5yE",
                                createdAt: new Date("2022-11-04T12:06:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 2
                            },
                            create: {
                                id: 14,
                                titulo: "Aprenda a transformar design em código com o Figma",
                                descricao: "A Rafaella Ballerini, instrutora de Front-End na Alura, vem trazer várias dicas pra você transformar o design em código. Aprenda como exportar imagens, ícones e inspecionar os elementos direto do Figma.",
                                url: "https://www.youtube.com/watch?v=sup2hlWm5yE",
                                createdAt: new Date("2022-11-04T12:06:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 2
                            }
                        })];
                case 18:
                    video14 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 15 },
                            update: {
                                id: 15,
                                titulo: "Qual é a diferença entre back-end e front-end?",
                                descricao: "Afinal, existe diferença entre back-end e front-end? Nesse Alura+, o nosso instrutor Vinícius Dias vai responder a essa questão tão recorrente no mundo do desenvolvimento.",
                                url: "https://www.youtube.com/watch?v=a-l4z6V2yXA",
                                createdAt: new Date("2022-11-04T12:07:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            },
                            create: {
                                id: 15,
                                titulo: "Qual é a diferença entre back-end e front-end?",
                                descricao: "Afinal, existe diferença entre back-end e front-end? Nesse Alura+, o nosso instrutor Vinícius Dias vai responder a essa questão tão recorrente no mundo do desenvolvimento.",
                                url: "https://www.youtube.com/watch?v=a-l4z6V2yXA",
                                createdAt: new Date("2022-11-04T12:07:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            }
                        })];
                case 19:
                    video15 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 16 },
                            update: {
                                id: 16,
                                titulo: "Introdução ao Postman",
                                descricao: "As APIs são muito utilizadas para integrações de sistemas diversos. Mas, como fazer testes com elas sem utilizar um navegador e verificar seu retorno? O Vinicius Dias explica neste vídeo utilizando a ferramenta Postman.",
                                url: "https://www.youtube.com/watch?v=op81bMbgZXs",
                                createdAt: new Date("2022-11-04T12:09:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            },
                            create: {
                                id: 16,
                                titulo: "Introdução ao Postman",
                                descricao: "As APIs são muito utilizadas para integrações de sistemas diversos. Mas, como fazer testes com elas sem utilizar um navegador e verificar seu retorno? O Vinicius Dias explica neste vídeo utilizando a ferramenta Postman.",
                                url: "https://www.youtube.com/watch?v=op81bMbgZXs",
                                createdAt: new Date("2022-11-04T12:09:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            }
                        })];
                case 20:
                    video16 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 17 },
                            update: {
                                id: 17,
                                titulo: "O que é ORM?",
                                descricao: "Afinal, o que é, como funciona e para que serve um ORM? O instrutor Guilherme Lima explica neste Alura+ com exemplos práticos e simplificados.",
                                url: "https://www.youtube.com/watch?v=x39vqeBTUmE",
                                createdAt: new Date("2022-11-04T12:10:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            },
                            create: {
                                id: 17,
                                titulo: "O que é ORM?",
                                descricao: "Afinal, o que é, como funciona e para que serve um ORM? O instrutor Guilherme Lima explica neste Alura+ com exemplos práticos e simplificados.",
                                url: "https://www.youtube.com/watch?v=x39vqeBTUmE",
                                createdAt: new Date("2022-11-04T12:10:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 3
                            }
                        })];
                case 21:
                    video17 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].video.upsert({
                            where: { id: 18 },
                            update: {
                                id: 18,
                                titulo: "O que é Deep Learning?",
                                descricao: "Afinal, o que é Deep Learning e onde se aplica? O Gui Silveira explica neste vídeo além de outros conceitos que rodeiam este tema como as redes neurais densas, estimadores, classificadores e mais.",
                                url: "https://www.youtube.com/watch?v=kryIBKPVZ7A",
                                createdAt: new Date("2022-11-04T12:12:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 4
                            },
                            create: {
                                id: 18,
                                titulo: "O que é Deep Learning?",
                                descricao: "Afinal, o que é Deep Learning e onde se aplica? O Gui Silveira explica neste vídeo além de outros conceitos que rodeiam este tema como as redes neurais densas, estimadores, classificadores e mais.",
                                url: "https://www.youtube.com/watch?v=kryIBKPVZ7A",
                                createdAt: new Date("2022-11-04T12:12:00"),
                                updatedAt: null,
                                deletedAt: null,
                                categoriaId: 4
                            }
                        })];
                case 22:
                    video18 = _a.sent();
                    return [4 /*yield*/, prisma_1["default"].user.upsert({
                            where: { id: 1 },
                            update: {
                                id: 1,
                                username: 'admin',
                                password: 'parangaricotirimirruaru'
                            },
                            create: {
                                id: 1,
                                username: 'admin',
                                password: 'parangaricotirimirruaru'
                            }
                        })];
                case 23:
                    user1 = _a.sent();
                    console.log({ categoria1: categoria1, categoria2: categoria2, video1: video1, video2: video2, video3: video3, user1: user1 });
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1["default"].$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })["catch"](function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma_1["default"].$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=seed.js.map