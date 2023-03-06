import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http'
import { LogModel } from '../../Models/LogModel';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

  logApiURL = environment.apiUrl + '/logs'

  
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
