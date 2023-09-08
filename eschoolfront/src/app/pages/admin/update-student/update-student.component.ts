import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor( private userservice:UserService){}

  public user={
    fname:'',
    lname:'',
    email:'',
    mobileno:'',
    isenable:'',

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
    // const obj={
    //   id:2,
    //   isenable:true

    // }

    //addUser: userservice
    this.userservice.updateUser(this.user).subscribe(
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
