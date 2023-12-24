import express from 'express';
import dashBoardRoutes from './routes/dashboard.routes';
import { ConstantsRoutes } from './routes/constantsRoutes';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(ConstantsRoutes.API, dashBoardRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});