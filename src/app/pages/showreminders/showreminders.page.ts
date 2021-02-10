import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-showreminders',
  templateUrl: './showreminders.page.html',
  styleUrls: ['./showreminders.page.scss'],
})
export class ShowremindersPage implements OnInit {
 reminders;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getReminders().subscribe((data)=>{
      console.log('reminders', data);
      this.reminders = data;
    });
  };

}
