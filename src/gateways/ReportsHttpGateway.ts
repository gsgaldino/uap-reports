import { IReport } from '@/types'
import { HttpClient, HttpClientGenericParams } from '@/infra/interfaces'
import { ReportsGateway } from './ReportsGateway'

export class ReportsHttpGateway implements ReportsGateway {
  private baseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL
  private apiKey: string = process.env.NEXT_PUBLIC_SUPABASE_API_KEY
  private headers: HttpClientGenericParams = {
    apiKey: this.apiKey,
    Authorization: `Bearer ${this.apiKey}`
  }

  constructor(private readonly httpClient: HttpClient) {}

  async findOneById(reportId: string): Promise<IReport | null> {
    const url = `${this.baseUrl}/reports?select=*&id=eq.${reportId}`
    const response: any = await this.httpClient.get(url, this.headers)
    return response[0] as unknown as IReport
  }

  async findAll(): Promise<IReport[]> {
    console.log('{ URL }', { url: this.baseUrl, key: this.apiKey })
    const url = `${this.baseUrl}/reports`
    const response = await this.httpClient.get(url, this.headers)
    return response as unknown as IReport[]
  }
}
