import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http'
import { UserModel } from '../../Models/UserModel';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){ }

  authApiURL = environment.apiUrl + '/v2/auth'


  logIn(inputdata:any){
    return this.http.post(`${this.authApiURL}/login`, inputdata)
  }

  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }

  getToken(){
    return localStorage.getItem('token')!=null?localStorage.getItem('token'):'';
  }

  addUser(inputdata:any){
    return this.http.post(`${this.authApiURL}/register`, inputdata)
  }

  getUserByID(inputdata:any): Observable<UserModel>{
    return this.http.get<UserModel>(`${this.authApiURL}/getUser/${inputdata}`)
  }

  getPrivelegeLevel(){

  }

  getID(){
    const token = this.getToken();
    const parts = token!.split('.');
    const payload = JSON.parse(atob(parts[1]));
    const userID = parseInt(payload.id);
    return userID;
  }

  getTalentUserIdNames(){
    return this.http.get(`${this.authApiURL}/getTalentUserIdNames`)
  }


}
