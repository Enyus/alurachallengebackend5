import prisma from "../assets/prisma";
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const userController = {
    list: async (req: Request, res: Response) => {
        try {
            const users = await prisma.user.findMany({});
      
            return res.status(202).json({ users });
          } catch (error) {
            console.log(error);
            return res.status(404).send(`Ocorreu um problema. Erro: ${error}`);
          }
    },

    login: async (req:Request, res: Response) => {
        const { username, password } = req.body;
        const PRIVATE_KEY = process.env.PRIVATE_KEY;

        try {
            const userFromDB = await prisma.user.findFirst({
                where: {
                    username: username,
                }
            })
            // console.log(userFromDB);

            if (userFromDB == null) {
                return res.status(404).send("Usuário não encontrado")
            }

            if ( password != userFromDB?.password) {
                return res.status(404).send("Senha inválida")
            }

            const token = jwt.sign(
                { user: username },
                PRIVATE_KEY as string,
                { expiresIn: '60d'}
            )

            // console.log(token);
            
            return res.status(202).json({ token });
        } catch (error) {
            console.log(error);
            return res.status(404).send(`Ocorreu um problema. Erro: ${error}`);
        }
    }
}

export default userController;
