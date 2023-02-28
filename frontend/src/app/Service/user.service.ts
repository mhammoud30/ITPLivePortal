import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http'
import { UserModel } from '../Model/UserModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){ }


  authApiURL = 'http://localhost:3000/api/auth';



  logIn(inputdata:any){
    return this.http.post(`${this.authApiURL}/signin`, inputdata)
  }

  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }

  getToken(){
    return localStorage.getItem('token')!=null?localStorage.getItem('token'):'';
  }

  addUser(inputdata:any){
    return this.http.post(`${this.authApiURL}/signup`, inputdata)
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

  getUserNames(){
    return this.http.get(`${this.authApiURL}/getUserIdNames`)
  }


}
