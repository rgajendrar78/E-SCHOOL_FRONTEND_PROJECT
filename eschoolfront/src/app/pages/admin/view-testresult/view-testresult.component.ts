import { Component } from '@angular/core';
import { TestresultService } from 'src/app/services/testresult.service';

@Component({
  selector: 'app-view-testresult',
  templateUrl: './view-testresult.component.html',
  styleUrls: ['./view-testresult.component.css']
})
export class ViewTestresultComponent {
  testList:any=[
  {headerName: 'ROLL NO', field: 'user.id'},
  {headerName: 'CLASS', field: 'classs' },
  {headerName: 'SEM', field: 'sem' },
  {headerName: 'TEST DATE', field: 'testdate' },
  {headerName: 'SUBJECT', field: 'sub' },
  {headerName: 'MARK', field: 'mark'},
  {headerName: 'RESULT', field: 'result'},
  ];
  columnDefs =[{headerName: 'ROLL NO', field: 'user.id'},
  {headerName: 'CLASS', field: 'classs' },
  {headerName: 'SEM', field: 'sem' },
  {headerName: 'TEST DATE', field: 'testdate' },
  {headerName: 'SUBJECT', field: 'sub' },
  {headerName: 'MARK', field: 'mark'},
  {headerName: 'RESULT', field: 'result'},
  ];
  test: any;
constructor(private _testResult:TestresultService){}
  ngOnInit(): void {
  
    this._testResult.tests().subscribe((data:any)=> {
      console.log('Response',data);
      //css
      this.testList=data;
      console.log('tests',this.testList);
    },
    (error)=>{
      //
      console.log(error);
      alert("server error");
      
    }
    );
  }
}
