import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(loginData:any){
    const formData=new FormData();
    formData.append('username',loginData.username);
    formData.append('password',loginData.password);
    
   return  this.http.post('http://localhost:9090/login',formData);
  
  }
  isLogin(userInContext:any){
    return  this.http.get('http://localhost:9090/findUserByFname?username='+userInContext);
  }

}
