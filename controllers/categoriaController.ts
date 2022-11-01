import prisma from "../assets/prisma";
import validation from "../assets/validation";
import { Request, Response, NextFunction } from "express";

interface Data {
  titulo?: string;
  cor?: string;
}

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

    selectCategoria: async (req: Request, res: Response) => {
      const {id} = req.params;

      try {
        const categoria = await prisma.categoria.findUnique({
          where: {
            id: Number(id),
          }
        })

        if (categoria == null) {
          return res.status(404).send("Categoria não cadastrada.");
        }
  
        return res.status(202).json(categoria);

      } catch (error) {
        console.log(error);
        return res.status(404).send(`Ocorreu um problema. Erro: ${error}`);
      }
    },
    
    addCategoria: async (req:Request, res:Response) => {
      const {titulo, cor} = req.body;

      console.log(cor)

      if (!validation(titulo)) {
        return res
          .status(412)
          .send("O campo de título não pode ser vazio.");
      }
      
      if (!validation(cor)) {
        return res
          .status(412)
          .send("O campo cor não pode ser vazio.");
      }

      try {
        const categoriaAdded = await prisma.categoria.create({
          data: {
            titulo: titulo,
            cor: cor,
          }
        })

        return res.status(202).json(categoriaAdded);

      } catch (error) {
        console.log(error);
        return res.status(404).send(`Ocorreu um problema. Erro: ${error}`);
      }
    },

    updateCategoria: async (req: Request, res: Response) => {
      const { id } = req.params;
      const { titulo, cor } = req.body;
  
      let dadosAlterados: Data = {};
  
      if (validation(titulo)) {
        dadosAlterados.titulo = titulo;
      }
  
      if (validation(cor)) {
        dadosAlterados.cor = cor;
      }
  
      if (!(validation(titulo) && validation(cor))) {
        return res
          .status(412)
          .send("Os campos de alteração não podem ser vazios ou indefinidos.");
      }
  
      try {
        const categoriaUpdated = await prisma.categoria.update({
          where: {
            id: Number(id),
          },
          data: dadosAlterados,
        });
  
        return res.status(202).json(categoriaUpdated);

      } catch (error) {
        console.log(error);
        return res.status(404).send(`Ocorreu um problema. Erro: ${error}`);
      }
    },

    deleteCategoria: async (req: Request, res: Response) => {
      const { id } = req.params;
  
      try {
        const categoriaSelected = await prisma.categoria.findUnique({
          where: {
            id: Number(id),
          },
        });
  
        if (categoriaSelected == null) {
          return res.status(404).send("Categoria não cadastrada.");
        }
  
        const categoriaDeleted = await prisma.categoria.delete({
          where: {
            id: Number(id),
          },
        });
  
        return res.status(204);

      } catch (error) {
        console.log(error);
        return res.status(404).send(`Ocorreu um problema. Erro: ${error}`);
      }
    },

    selectVideosByCategoria:async (req:Request, res:Response) => {
      const {id} = req.params;

      try {
        const videosByCategoria = await prisma.video.findMany({
          where: {
            categoriaId: Number(id),
          },
          include:{
            categoria: true,
          },
        })

        if (videosByCategoria.length == 0) {
          return res.status(404).send("Não existem vídeos cadastrados nesta categoria.")
        }

        return res.status(202).json(videosByCategoria);

      } catch (error) {
        console.log(error);
        return res.status(404).send(`Ocorreu um problema. Erro: ${error}`);
      }
    },
      
}

export default categoriaController;