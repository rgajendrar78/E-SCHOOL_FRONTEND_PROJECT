import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AttendanceService } from 'src/app/services/attendance.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent {
  users=[{
    id:'1',
    fname:''
  }];
  attendanceData={
    
    attendancedate:'',
    ispresent:'',
    user:{
      id:'',}

  };


constructor(
  private _user:UserService,
  private _attendance:AttendanceService,
  private _snack:MatSnackBar){}
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
//   if(this.assignment.title.trim()=='' || this.assignment.title==null){
//   this._snack.open('Title Required !!', '',{

//     duration:2000,
//   });
//   return;
// }
//   //add




  this._attendance.addAttendance(this.attendanceData).subscribe((data:any)=>{
    alert("data insert successfully");
  },
  (error)=>{
    console.log(error);
    alert('server error');
  }
  );
  
}
  }

