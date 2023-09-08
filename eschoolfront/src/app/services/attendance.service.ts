import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  public baseUrl = 'http://localhost:9090';

  constructor(private _http:HttpClient) { }
  //load all the assignment
  public attendances(){
    return this._http.get(this.baseUrl+'/'+'attendances');
  }

  //add new assignment

  public addAttendance(attendance: any){
    return this._http.post(this.baseUrl+'/'+'attendance',attendance);
  }
}

