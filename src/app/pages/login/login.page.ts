import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {throwError} from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = {
    username : '',
    first_name:'',
    last_name:'',
    password:'',
  } ;
  submitted=false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    
  }
 loginUser(){
  const data = {
    username : this.user.username, 
    first_name: this.user.first_name,
    last_name:this.user.last_name,
    password:this.user.password,
  };
   this.authService.logUser(data).subscribe(response=>{
     console.log('response', response)
     alert('User logged in successfully.')
     this.router.navigateByUrl('/reminder');
   },error=>{
     console.log(error)
   }
   );
 }
  
 
}

