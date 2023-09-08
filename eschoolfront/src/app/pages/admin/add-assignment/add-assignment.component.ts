import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AssignmentService } from 'src/app/services/assignment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit{

  users=[{
    id:'1',
    fname:''
  }];

    assignment={
      title:'',
      description:'',
      user:{
        id:'',}
    };


  constructor(
    private _assignment:AssignmentService,private _user:UserService,
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

    this._assignment.addAssignment(this.assignment).subscribe((data:any)=>{
      alert("data insert successfully");
    },
    (error)=>{
      console.log(error);
      alert('server error');
    }
    );
    
  }
    }
  

