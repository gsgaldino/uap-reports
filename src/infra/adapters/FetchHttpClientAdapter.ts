import {
  HttpClient,
  HttpClientGenericParams,
  HttpClientResponse
} from '@/infra/interfaces'

export class FetchHttpClientAdapter implements HttpClient {
  async get(
    url: string,
    headers?: HttpClientGenericParams
  ): Promise<HttpClientResponse> {
    const response = await fetch(url, {
      method: 'GET',
      headers,
    })
    const json = await response.json()
    return json
  }

  async post(
    url: string,
    body?: HttpClientGenericParams,
    headers?: HttpClientGenericParams
  ): Promise<HttpClientResponse> {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
    const json = await response.json()
    return json
  }
}
