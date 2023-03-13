import { Injectable } from '@angular/core';
import  { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment} from '../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'max-age=600', // set the cache time-to-live to 60 seconds
    }),
  };

  constructor(private http: HttpClient) { }

  taskApiURL = environment.apiUrl + '/v1/tasks'


  createTask(inputdata:any){
    return this.http.post(`${this.taskApiURL}/createTask`, inputdata)
  }


  getUnfinishedTasks(inputdata:any){
    return this.http.get(`${this.taskApiURL}/getUnfinishedTasks/${inputdata}`, this.httpOptions)
  }


  getMyTasks(inputdata:any){
    return this.http.get(`${this.taskApiURL}/getMyTasks/${inputdata}`, this.httpOptions)
  }

  updateStatus(inputdata:any){
    return this.http.post(`${this.taskApiURL}/updateStatus`, inputdata)
  }

}
