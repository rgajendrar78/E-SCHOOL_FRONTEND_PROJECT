import { Component } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { TimetableService } from 'src/app/services/timetable.service';

@Component({
  selector: 'app-uview-timetable',
  templateUrl: './uview-timetable.component.html',
  styleUrls: ['./uview-timetable.component.css']
})
export class UviewTimetableComponent {

  timeList:any=[{headerName: 'CLASS', field: 'classs' },
  {headerName: 'SEM', field: 'sem' },
  {headerName: 'SUBJECT', field: 'subject' },
  {headerName: 'START TIME', field: 'starttime' },
  {headerName: 'END TIME', field: 'endtime' },
  

  ];
  columnDefs =[{headerName: 'CLASS', field: 'classs' },
  {headerName: 'SEM', field: 'sem' },
  {headerName: 'SUBJECT', field: 'subject' },
  {headerName: 'START TIME', field: 'starttime' },
  {headerName: 'END TIME', field: 'endtime'},
  

  ];
  test: any;
constructor(private _timetable:TimetableService){}
  ngOnInit(): void {
  
    this._timetable.timeTables().subscribe((data:any)=> {
      console.log('Response',data);
      //css
      this.timeList=data;
      console.log('tests',this.timeList);
    },
    (error)=>{
      //
      console.log(error);
      alert("server error");
      
    }
    );
}
}
