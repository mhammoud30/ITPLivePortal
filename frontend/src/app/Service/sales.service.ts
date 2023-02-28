import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class SalesService {


  constructor(private http: HttpClient) { }

  salesApiURL = 'http://localhost:3000/api/sales'

  createBrief(inputdata:any){
    return this.http.post(`${this.salesApiURL}/createSalesBrief`, inputdata)
  }

  getSalesBriefsNotViewedByTalent(){
    return this.http.get(`${this.salesApiURL}/getSalesBriefsNotViewedByTalent`)
  }
  getAllBriefs(){
    return this.http.get(`${this.salesApiURL}/getAllSalesBriefs`)
  }
  viewedByTalent(id:any){
    return this.http.get(`${this.salesApiURL}/viewedByTalent/${id}`)
  }

  getSalesBrief(id:any){
    return this.http.get(`${this.salesApiURL}/getSalesBrief/${id}`)
  }

  assignSalesBrief(inputdata:any){
    return this.http.post(`${this.salesApiURL}/createTask/`, inputdata)
  }
}
