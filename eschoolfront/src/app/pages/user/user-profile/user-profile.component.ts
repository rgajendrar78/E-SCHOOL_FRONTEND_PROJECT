import { Component } from '@angular/core';
import { GlobalMapService } from 'src/app/services/GlobalMapService.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  loginData:any=[{headerName: 'NAME', field: 'fname' },
  {headerName: 'EMAIL', field: 'email' },
  {headerName: 'MOBILE NO', field: 'mobileno'}];

  columnDefs = [{headerName: 'NAME', field: 'fname' },
{headerName: 'EMAIL', field: 'email' },
{headerName: 'MOBILE NO', field: 'mobileno'},
{headerName: 'ACTIVE', field: 'isenable'}
]; 

loginData1={
email:''
}

  constructor(private map:GlobalMapService ,private _user:UserService ){}
  ngOnInit(): void{
    // this.loginData=this.map.getItem('user');
    // console.log("currentuser",this.loginData);

    this._user.findUserProfile(this.loginData1).subscribe((data:any)=> {
      console.log('Response',data);
      //css
      this.loginData=data;
      console.log('users',this.loginData);
      

    },
    (error)=>{
      //
      console.log(error);
      alert("server error");
      
    }
    );
}
    
  }

