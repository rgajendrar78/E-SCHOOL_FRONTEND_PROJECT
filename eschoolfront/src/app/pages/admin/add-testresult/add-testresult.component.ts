import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestresultService } from 'src/app/services/testresult.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-testresult',
  templateUrl: './add-testresult.component.html',
  styleUrls: ['./add-testresult.component.css']
})
export class AddTestresultComponent {
  test={
    classs:"",
    sem:"",
    testdate:"",
    sub:'',
    mark:"",
    result:"",
    user:{
      id:''
    }
  };
  users=[{
    id:'',
     fname:''
  }];


constructor(
  private _testresult:TestresultService,
  private _snack:MatSnackBar,
  private _user:UserService){}


ngOnInit(): void {

  this._user.users().subscribe((data:any)=>{
    this.users=data;
    console.log(this.users);
  },
  (error)=>{

    console.log(error);
    alert("server error");
  }
  );
}
formSubmit(){


  this._testresult.addTestResult(this.test).subscribe((data:any)=>{
    alert("data insert successfully");
  },
  (error)=>{
    console.log(error);
    alert('server error');
  }
  );
  
}
}
