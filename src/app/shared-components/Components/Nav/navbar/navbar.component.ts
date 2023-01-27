import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginform : FormGroup; 


  constructor(private fb : FormBuilder,private loginservice: LoginService,private router: Router) { }
  ngOnInit() {
    this.loginform = this.fb.group({
      Username : [{value:"",disabled:false},],
      Password : [{value:"",disabled:false},],
    });
  }
  onSubmit()
  {
    this.loginservice.login(this.loginform.value).subscribe(
      (data) =>{
        console.log(data);
      },(error) =>{
        console.log(error);
      },() =>{
        console.log("completed");
      }
    )
    this.router.navigate(['/welcome'],{ queryParams: { Username: this.loginform.controls.Username.value} });

  }
  loggedIn()
  {
    return this.loginservice.loggedIn();
   
  }

}
