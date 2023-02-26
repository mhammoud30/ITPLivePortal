import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http'
import { LogModel } from '../Model/LogModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }


  logApiURL = 'http://localhost:3000/api/logs'

  addLog(inputdata:any){
    return this.http.post(`${this.logApiURL}/addLog`, inputdata)
  }
  getAllLogs():Observable<LogModel>{
    return this.http.get<LogModel>(`${this.logApiURL}/getLogs`)
  }

  getInfluencerLogs(inputdata:any):Observable<LogModel>{
    return this.http.get<LogModel>(`${this.logApiURL}/getInfluencerLogs/${inputdata}`)
  }
}
