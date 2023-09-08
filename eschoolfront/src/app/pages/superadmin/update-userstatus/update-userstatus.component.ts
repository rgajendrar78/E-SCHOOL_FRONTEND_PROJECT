import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-userstatus',
  templateUrl: './update-userstatus.component.html',
  styleUrls: ['./update-userstatus.component.css']
})
export class UpdateUserstatusComponent {
  constructor( private userservice:UserService){}

  user1={
    id:'',
    isenable:""
  };
  users1=[{
    id:'',
     fname:''
  }];

  active=[{
    id:1,
    isenable:true,
  },
  {
    id:2,
    isenable:false,
  },


]

  
  
  ngOnInit(): void {
    this.userservice.users().subscribe((data:any)=>{
      this.users1=data;
      console.log(this.users1);
    },
    (error)=>{
  
      console.log(error);
      alert("server error");
    }
    );
  }
  
  formSubmit()
  {
    
    console.log("User data ",this.user1);
    if(this.user1.id=='' || this.user1.id==null){

      alert('user is required !!');
      return;
    }

    this.userservice.updateUser(this.user1).subscribe(

      (data)=>{
        //success
        console.log(data)
        alert("success");

      },
      (error)=>{

        //error
        console.log(error);
        alert('something went wrong');
      }
    );
  }
}
