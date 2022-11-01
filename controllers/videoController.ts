import prisma from "../assets/prisma";
import validation from "../assets/validation";
// Uso de req, res e next com typescript:
// import { Request, Response, NextFunction } from 'express';
import { Request, Response, NextFunction } from "express";

interface Data {
  titulo?: string;
  descricao?: string;
  url?: string;
}

const videoController = {
  list: async (req: Request, res: Response) => {
    try {
      const videos = await prisma.video.findMany({
        where: {
          deletedAt: null,
        },
        include: {
          categoria: true,
        },
      });

      return res.status(202).json({ videos });
    } catch (error) {
      console.log(error);
      return res.status(404).send(`Ocorreu um problema. Erro: ${error}`);
    }
  },

  selectVideo: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const video = await prisma.video.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          categoria: true,
        },
      });

      // console.log(video);

      if (video == null) {
        return res.status(404).send("Vídeo não cadastrado.");
      }

      return res.status(202).json(video);
    } catch (error) {
      console.log(error);
      return res.status(404).send(`Ocorreu um problema. Erro: ${error}`);
    }
  },

  addVideo: async (req: Request, res: Response) => {
    const { titulo, descricao, url } = req.body;

    if (!(validation(titulo) && validation(descricao) && validation(url))) {
      return res
        .status(412)
        .send("Os dados enviados não passaram nos testes de validação");
    }

    try {
      const videoAdd = await prisma.video.create({
        data: {
          titulo: titulo,
          descricao: descricao,
          url: url,
        },
      });

      // console.log(videoAdd);

      return res.status(202).json(videoAdd);
    } catch (error) {
      console.log(error);
      return res.status(404).send(`Ocorreu um problema. Erro: ${error}`);
    }
  },

  updateVideo: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { titulo, descricao, url } = req.body;

    let dadosAlterados: Data = {};

    if (validation(titulo)) {
      dadosAlterados.titulo = titulo;
    }

    if (validation(descricao)) {
      dadosAlterados.descricao = descricao;
    }

    if (validation(url)) {
      dadosAlterados.url = url;
    }

    if (!(validation(titulo) || validation(descricao) || validation(url))) {
      return res
        .status(412)
        .send("Os campos de alteração não podem ser vazios ou indefinidos.");
    }

    try {
      const videoUpdated = await prisma.video.update({
        where: {
          id: Number(id),
        },
        data: dadosAlterados,
      });

      //   console.log(videoUpdated);

      return res.status(202).json(videoUpdated);
    } catch (error) {
      console.log(error);
      return res.status(404).send(`Ocorreu um problema. Erro: ${error}`);
    }
  },

  deleteVideo: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const videoSelected = await prisma.video.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (videoSelected == null) {
        return res.status(404).send("Vídeo não cadastrado.");
      }

      const videoDeleted = await prisma.video.update({
        where: {
          id: Number(id),
        },
        data: {
          deletedAt: new Date(),
        },
      });

      return res.status(204).send("Vídeo deletado com sucesso.");
    } catch (error) {
      console.log(error);
      return res.status(404).send(`Ocorreu um problema. Erro: ${error}`);
    }
  },
};

export default videoController;
