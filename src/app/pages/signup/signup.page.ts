import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user: User = {
    username : '',
    first_name:'',
    last_name:'',
    password:'',
  } ;
  submitted=false;

  constructor( private authService:AuthService) { }

  ngOnInit() {
  }
  registerUser():void{
    const data = {
      username : this.user.username, 
      first_name: this.user.first_name,
      last_name:this.user.last_name,
      password:this.user.password,
    };
    this.authService.create(data).subscribe(res=>{
      console.log(res);
      this.submitted = true;
    },
    err=>{
      console.log(err);
    }
    );
  }
  
  newUser(): void {
    this.submitted = false;
    this.user = {
      username: '',
      first_name:'',
      last_name:'',
      password:'',
    };
  }
}
