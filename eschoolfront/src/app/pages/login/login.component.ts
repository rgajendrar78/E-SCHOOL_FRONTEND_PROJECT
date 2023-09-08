import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalMapService } from 'src/app/services/GlobalMapService.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginData={username:'',
password:''}

 constructor(private login:LoginService,  private router: Router,private route:ActivatedRoute,private gmap:GlobalMapService) {}
  ngOnInit(): void {
    }
    formSubmit(){
      
    this.login.login(this.loginData).subscribe((data:any)=> {
    console.log('loginResponse',data);
    console.log("login button click");
    next: () => {
    }
  },
  (error)=>{ 
   alert("Incorrect Username And Password")
  }
  );

  this.login.isLogin(this.loginData.username).subscribe((response:any)=>{
    console.log("islogin",response);
    this.gmap.setItem('user',this.loginData);
    const role=response.role;
    this.router.navigateByUrl(role);
  });
}
}
