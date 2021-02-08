import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-uploadlist',
  templateUrl: './uploadlist.page.html',
  styleUrls: ['./uploadlist.page.scss'],
})
export class UploadlistPage implements OnInit {
   images;
  constructor(private api:ApiService, private router: Router) { }

  ngOnInit() {
    this.api.getImages().subscribe((data)=>{
      console.log(data);
      this.images = data;
    });
  };
  
  btnNav(){
    this.router.navigate(['/uploadlist']);
    error=>console.log(error)
    
  }
  

}
