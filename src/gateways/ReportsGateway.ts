import { IReport } from '@/types'

export interface ReportsGateway {
  findAll(): Promise<IReport[]>
  findOneById(reportId: string): Promise<IReport | null>
}
