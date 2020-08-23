import  axios, { AxiosInstance, AxiosResponse } from 'axios'

const httpClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

class ApiService {
  
  private apiurl: string

  constructor( apiurl: string ){
    this.apiurl = apiurl
  }

  post( url: string, object: Object ): Promise<AxiosResponse> {
    return httpClient.post( `${this.apiurl}${url}`, object )
  }
}

export default ApiService