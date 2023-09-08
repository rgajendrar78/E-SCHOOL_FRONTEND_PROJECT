import { Component } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent {
  _attendanceList:any=[{headerName: 'NAME', field: 'user.fname' },
  {headerName: 'DATE', field: 'attendancedate' },
  {headerName: 'PRESENT', field: 'isenable' },
  ];
  columnDefs = [{headerName: 'NAME', field: 'user.fname' },
  {headerName: 'DATE', field: 'attendancedate' },
{headerName: 'PRESENT', field: 'ispresent' },

];
  attendance: any;
constructor(private _attendance:AttendanceService){}
  ngOnInit(): void {
  
    this._attendance.attendances().subscribe((data:any)=> {
      console.log('Response',data);
      //css
      this._attendanceList=data;
      console.log('assignments',this._attendanceList);
    },
    (error)=>{
      //
      console.log(error);
      alert("server error");
      
    }
    );
  }


}
