import { DashboardDTO } from '../../dto/dashboard/dashboard.dto';
import { DashboardRepository } from '../../repository/dashboard/dashboardRepository';
import { DashboardService } from './dashboardService';

export class DashboardServiceImpl implements DashboardService {

    private readonly dashboardRepository = new DashboardRepository();

    async createDashboardRecord(dashboardDTO: DashboardDTO): Promise<DashboardDTO> {
        await this.dashboardRepository.createDashboardRecord(dashboardDTO);
        return dashboardDTO;
    }

    async findAll(): Promise<DashboardDTO[]> {
        return [];
    }
}
