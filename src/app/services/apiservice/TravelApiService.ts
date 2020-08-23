import ApiService from './apiservice'
import { AxiosResponse } from 'axios'

interface Travel {
  name: string,
  phone: string,
  origin: string,
  destination: string,
  datefrom: string,
  dateto: string,
  travelers: number,
}

class TravelApiService extends ApiService {

  constructor() {
    super('/')
  }

  save( travel: Travel ):Promise<AxiosResponse<any>>{
    return this.post('travel', travel)
  }


}

export default TravelApiService