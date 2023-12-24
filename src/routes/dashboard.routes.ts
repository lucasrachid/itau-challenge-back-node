import express, { Router, Request, Response } from 'express';
import { DashboardService } from '../services/dashboard/dashboardService';
import { DashboardServiceImpl } from '../services/dashboard/dashboardServiceImpl';
import { ConstantsRoutes } from './constantsRoutes';

const dashBoardRoutes: Router = express.Router();
const dashboardService: DashboardService = new DashboardServiceImpl();

dashBoardRoutes.post(ConstantsRoutes.DASHBOARD, async (req: Request, res: Response) => {
    try {
        await dashboardService.createDashboardRecord({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            participation: req.body.participation
        });

        res.json({
            message: 'Operações de dashboard realizadas com sucesso!'
        });

    } catch (error) {
        console.error('Erro ao processar a rota /dashboard:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

export default dashBoardRoutes;