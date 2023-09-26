export type HttpClientGenericParams = {
  [key: string]: string
}

export type HttpClientResponse = HttpClientGenericParams | HttpClientGenericParams[]

export interface HttpClient {
  post(
    url: string,
    body?: HttpClientGenericParams,
    headers?: HttpClientGenericParams
  ): Promise<HttpClientResponse>
  get(
    url: string,
    headers: HttpClientGenericParams
  ): Promise<HttpClientResponse>
}
