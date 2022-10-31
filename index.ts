import express  from 'express';
import cors from 'cors';
import videoRouter from './routes/videoRouter';
import categoriaRouter from './routes/categoriaRouter';

const app = express();
app.use(express.json());
app.use(cors(
    /* {
        origin: "http://www."
        Só aceita requisições deste front-end
    }
    */
))

app.use('/videos', videoRouter);
app.use('/categorias', categoriaRouter);

app.listen(3333, () => {
    console.log("App rodando em http://localhost:3333/")});
