import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TimetableService } from 'src/app/services/timetable.service';

@Component({
  selector: 'app-super-addtimetable',
  templateUrl: './super-addtimetable.component.html',
  styleUrls: ['./super-addtimetable.component.css']
})
export class SuperAddtimetableComponent {

  time={
    classs:"",
    sem:"",
    subject:"",
    starttime:'',
    endtime:"",
  };
  User=[{
    id:1,
    fname:'gajendra'
  }];


constructor(
  private _timetable:TimetableService,
  private _snack:MatSnackBar){}
ngOnInit(): void {}

formSubmit(){


  this._timetable.addTimeTable(this.time).subscribe((data:any)=>{
    alert("data insert successfully");
  },
  (error)=>{
    console.log(error);
    alert('server error');
  }
  );
  
}
}
