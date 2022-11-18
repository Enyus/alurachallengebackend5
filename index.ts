import express  from 'express';
import cors from 'cors';
import videoRouter from './routes/videoRouter';
import categoriaRouter from './routes/categoriaRouter';
import userRouter from './routes/userRouter';
import categoriaApiRouter from './routes/categoriaApiRouter';
import videosApiRouter from './routes/videosApiRouter';

const app = express();
app.use(express.json());
app.use(cors(
    /* {
        origin: "http://www."
        Só aceita requisições deste front-end
    }
    */
))
app.set('view engine', 'ejs');

app.use('/users', userRouter);
app.use('/videos', videoRouter);
app.use('/categorias', categoriaRouter);
app.use('/categoriasapi', categoriaApiRouter);
app.use('/videosapi', videosApiRouter);
app.use('/', (req, res) => {res.render('home')})

app.listen(3333, () => {
    console.log("App rodando em http://localhost:3333/")});
