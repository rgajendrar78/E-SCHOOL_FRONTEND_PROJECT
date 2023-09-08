import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  attendances() {
    throw new Error('Method not implemented.');
  }
  public baseUrl = 'http://localhost:9090';

  constructor(private _http:HttpClient) { }
  //load all the attendance
  public timeTables(){
    return this._http.get(this.baseUrl+'/'+'timetables');
  }

  //add new attendance

  public addTimeTable(timetable: any){
    return this._http.post(this.baseUrl+'/'+'timetable',timetable);
  }
}
