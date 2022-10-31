import prisma from "../assets/prisma";
import { Request, Response, NextFunction } from "express";

const categoriaController = {
    list: async (req: Request, res: Response) => {
      try {
        const categorias = await prisma.categoria.findMany({});
  
        return res.status(202).json({ categorias });
      } catch (error) {
        console.log(error);
        return res.status(404).send(`Ocorreu um problema. Erro: ${error}`);
      }
    },
}

export default categoriaController;