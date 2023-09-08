import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor( private userservice:UserService){}

  public user={
    fname:'',
    lname:'',
    email:'',
    password:'',
    mobileno:'',
    role:'',
    isenable:''

  };
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');

    
  }

  formSubmit()
  {
     
    console.log(this.user);
    if(this.user.fname=='' || this.user.fname==null){

      alert('user is required !!');
      return;
    }

    //addUser: userservice
    this.userservice.addUser(this.user).subscribe(
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
