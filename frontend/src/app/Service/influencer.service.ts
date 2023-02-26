import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http'
import {InfluencerModel} from "../Model/InfluencerModel"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class InfluencerService{

  constructor(private http:HttpClient){}

  influencerApiURL = 'http://localhost:3000/api/influencers'

  addInfluencer(inputdata:any){
    return this.http.post(`${this.influencerApiURL}/addInfluencer`, inputdata)
  }

  getInfluencers():Observable<InfluencerModel[]>{
    return this.http.get<InfluencerModel[]>(`${this.influencerApiURL}/getInfluencers`)
  }

  deleteInfluencer(inputdata:any){
    return this.http.delete(`${this.influencerApiURL}/deleteInfluencer/${inputdata}`)
  }

  getInfluencer(inputdata:any):Observable<InfluencerModel>{
    return this.http.get<InfluencerModel>(`${this.influencerApiURL}/getInfluencer/${inputdata}`)
  }

  updateInfluencer(inputdata:any, id:any){
    return this.http.patch(`${this.influencerApiURL}/updateInfluencer/${id}`, inputdata)
  }

  getInfluencerNames(){
    return this.http.get(`${this.influencerApiURL}/getInfluencerNames`)
  }
}
