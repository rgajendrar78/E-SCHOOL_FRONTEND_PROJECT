import { Component } from '@angular/core';
import { TestresultService } from 'src/app/services/testresult.service';

@Component({
  selector: 'app-uview-testresult',
  templateUrl: './uview-testresult.component.html',
  styleUrls: ['./uview-testresult.component.css']
})
export class UviewTestresultComponent {
  testList:any=[{headerName: 'ROLL NO', field: 'user.id'},
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
  testList1={
    email:''
    }
constructor(private _testResult:TestresultService){}
  ngOnInit(): void {
  
    this._testResult.findTest(this.testList1).subscribe((data:any)=> {
      console.log('Response',data);
      //css
      this.testList=data;
      console.log('Test',this.testList);
      

    },
    (error)=>{
      //
      console.log(error);
      alert("server error");
      
    }
    );
  }

}
