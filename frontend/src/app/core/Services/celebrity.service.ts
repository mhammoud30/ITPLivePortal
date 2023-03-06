import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http'
import {InfluencerModel} from "../../Models/InfluencerModel"
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class CelebrityService {

  constructor(private http:HttpClient){}


  celebrityApiURL = environment.apiUrl + '/celebrities'

  addCelebrity(inputdata:any){
    return this.http.post(`${this.celebrityApiURL}/createCelebrity`, inputdata)
  }

  getCelebrities():Observable<InfluencerModel[]>{
    return this.http.get<InfluencerModel[]>(`${this.celebrityApiURL}/getCelebrities`)
  }

  deleteCelebrity(inputdata:any){
    return this.http.delete(`${this.celebrityApiURL}/deleteCelebrity/${inputdata}`)
  }

  getCelebrity(inputdata:any):Observable<InfluencerModel>{
    return this.http.get<InfluencerModel>(`${this.celebrityApiURL}/getCelebrity/${inputdata}`)
  }

  updateCelebrity(inputdata:any, id:any){
    return this.http.patch(`${this.celebrityApiURL}/updateCelebrity/${id}`, inputdata)
  }


}
