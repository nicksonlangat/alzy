import { Component, OnInit } from '@angular/core';
import { Reminder } from 'src/app/models/reminder.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage implements OnInit {

  reminder: Reminder = {
    title:'',
    details:'',
    deadline:'',
  } ;
  submitted=false;

  constructor( private apiService:ApiService) { }
  ngOnInit() {
  }

  saveReminder():void{
    const data = {
      title : this.reminder.title, 
      details: this.reminder.details,
      deadline:this.reminder.deadline,
      
    };
    this.apiService.createReminder(data).subscribe(res=>{
      console.log(res);
      this.submitted = true;
    },
    err=>{
      console.log(err);
    }
    );
  }

}
