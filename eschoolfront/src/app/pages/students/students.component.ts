import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  userList:any=[{headerName: 'NAME', field: 'fname' },
  {headerName: 'EMAIL', field: 'email' },
  {headerName: 'MOBILE NO', field: 'mobileno'}];

  columnDefs = [{headerName: 'NAME', field: 'fname' },
{headerName: 'EMAIL', field: 'email' },
{headerName: 'MOBILE NO', field: 'mobileno'},
{headerName: 'ACTIVE', field: 'isenable'}
]; 

  user={
    name:''
  }
 
constructor(private _user:UserService){}
  
ngOnInit(): void {
  
    this._user.users().subscribe((data:any)=> {
      console.log('Response',data);
      //css
      this.userList=data;
      console.log('users',this.userList);
      

    },
    (error)=>{
      //
      console.log(error);
      alert("server error");
      
    }
    );
}


  findUser(){

    if(this.user.name=='' || this.user.name==null){

      alert('user is required !!');
      return;
    }


  this._user.findUser(this.user).subscribe((data:any)=> {
    console.log('Response',data);
    //css
    this.userList=data;
    console.log('user',this.user);
  },
  (error)=>{
    //
    console.log(error);
    alert("server error");
    
  }
  );
}



}
