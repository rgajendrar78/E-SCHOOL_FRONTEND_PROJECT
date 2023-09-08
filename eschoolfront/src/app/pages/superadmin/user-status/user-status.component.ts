import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css'],
  
})
export class UserStatusComponent {
  userList:any=[{headerName: 'NAME', field: 'fname' },
  {headerName: 'EMAIL', field: 'email' },
  {headerName: 'MOBILE NO', field: 'mobileno'},
  ];
  user: any;
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

columnDefs = [{headerName: 'NAME', field: 'fname' },
{headerName: 'EMAIL', field: 'email' },
{headerName: 'MOBILE NO', field: 'mobileno'},
{headerName: 'ACTIVE', field: 'isenable'},
]; 
}
