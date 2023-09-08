import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestresultService {

  test() {
    throw new Error('Method not implemented.');
  }
  public baseUrl = 'http://localhost:9090';

  constructor(private _http:HttpClient) { }
  //load all the attendance
  public tests(){
    return this._http.get(this.baseUrl+'/'+'tests');
    
  }
    public addTestResult(test: any){
      return this._http.post(this.baseUrl+'/'+'test',test);
    }

    public findTest(test:any){

      return this._http.get(this.baseUrl+'/'+'getMyTest'+'/'+test.email);
    }
  }  

