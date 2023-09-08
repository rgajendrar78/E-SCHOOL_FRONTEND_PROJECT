import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  public baseUrl = 'http://localhost:9090';
  public student_id:any
  
  constructor(private http: HttpClient) { }

  //add user

  public addUser(user: any){

    return this.http.post(this.baseUrl+'/'+'user',user);
  }

  public users(){
    return this.http.get(this.baseUrl+'/'+'users');
  }

  public updateUser(user1: any){

    return this.http.put(this.baseUrl+'/'+'user'+'/'+user1.id,user1);
  }

  public findUser(user:any){
    return this.http.get(this.baseUrl+'/'+'user'+'/'+user.name);
  }

  public findUserProfile(user:any){
    return this.http.get(this.baseUrl+'/'+'getMyProfile'+'/'+user.email);
  }

}
