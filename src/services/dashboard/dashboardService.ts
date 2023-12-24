import { DashboardDTO } from "../../dto/dashboard/dashboard.dto";

export interface DashboardService {

    createDashboardRecord(data: DashboardDTO): Promise<DashboardDTO>;

    findAll(): Promise<DashboardDTO[]>;
}