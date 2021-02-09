import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { GlobalService } from 'src/app/services/global.service';


@Component({
  selector: 'app-taker',
  templateUrl: './taker.page.html',
  styleUrls: ['./taker.page.scss'],
})
export class TakerPage implements OnInit {

  account: User = new User();
  userSub: Subscription;

  constructor(private global: GlobalService, private router: Router,) { }

  ngOnInit() {
    this.userSub = this.global.user.subscribe(
      me => this.account = me
    );
    if ( localStorage.getItem('token') && localStorage.getItem('account')) {
      this.global.me = JSON.parse(localStorage.getItem('account'));
     
    } else {
      this.router.navigate(['/login']);
    }
  }
  
  
  logoutClicked() {
    this.global.me = new User();
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    this.router.navigate(['/login']);
  }

}
