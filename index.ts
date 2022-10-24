import express  from 'express';

import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json());

const prisma = new PrismaClient({
    log: ['query']
});

app.get('/videos', async (request, response) => {
    const videos = await prisma.video.findMany();

    return response.status(202).json(videos);
})

app.listen(3333, () => {
    console.log("App rodando em http://localhost:3333/")});