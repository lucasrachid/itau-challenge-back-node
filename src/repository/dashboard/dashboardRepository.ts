import { PrismaClient } from '@prisma/client';
import { DashboardDTO } from '../../dto/dashboard/dashboard.dto';
const prisma = new PrismaClient();

export class DashboardRepository {

    async createDashboardRecord(dashboardDTO: DashboardDTO): Promise<DashboardDTO> {
        await prisma.dashboard.create({
            data: {
                firstName: dashboardDTO.firstName,
                lastName: dashboardDTO.lastName,
                participation: dashboardDTO.participation
            },
        });
        return dashboardDTO;
    };


    async findAllDashboardRecord (): Promise<DashboardDTO[]> {
        return await prisma.dashboard.findMany();
    };

}