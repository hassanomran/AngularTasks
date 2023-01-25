import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginform : FormGroup; 


  constructor(private fb : FormBuilder,private loginservice: LoginService) { }
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
  }

}
