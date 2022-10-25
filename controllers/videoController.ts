import prisma from '../assets/prisma';
// Uso de req, res e next com typescript:
// import { Request, Response, NextFunction } from 'express';
import { Request, Response, NextFunction } from 'express'

const videoController = {

    list: async (req: Request, res:Response) => {
        const videos = await prisma.video.findMany();

        res.status(202).json({videos});
    },

};

export default videoController;