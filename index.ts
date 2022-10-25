import express  from 'express';
import videoRouter from './routes/videoRouter';

const app = express();
app.use(express.json());

app.use('/videos', videoRouter);

app.listen(3333, () => {
    console.log("App rodando em http://localhost:3333/")});