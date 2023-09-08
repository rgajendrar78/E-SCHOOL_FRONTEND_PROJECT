import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  // assignments() {
  //   throw new Error('Method not implemented.');
  // }
  public baseUrl = 'http://localhost:9090';

  constructor(private _http:HttpClient) { }
  //load all the assignment
  public assignments(){
    return this._http.get(this.baseUrl+'/'+'assignments');
  }

  //add new assignment

  public addAssignment(assignment: any){
    return this._http.post(this.baseUrl+'/'+'assignment',assignment);
  }

  public findAssignment(assignment:any){

    return this._http.get(this.baseUrl+'/'+'getMyAssignment'+'/'+assignment.email);
  }
}
