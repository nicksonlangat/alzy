import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  //variables
  name:string;
  image:File;

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
  }
//watch for any changes in name and update DOM
  onNameChanged(event:any){
    this.name=event.target.value;
  }

  //watch for any changes in image and update DOM
  onImageChanged(event:any){
    this.image=event.target.files[0];//pick the first image..leave the rest ;)
  }

  newImage(){
    const upload_url='http://localhost:8000/upload';
    const uploadData=new FormData();
    uploadData.append('name',this.name);
    uploadData.append('image',this.image);
    //send it to server
    this.http.post(upload_url,uploadData).subscribe(
     response=>{
       console.log(response)
       alert('Image uploaded')
       this.router.navigateByUrl('/uploadlist');
     },
     error=>{
       console.log(error)
     }
    );
  }
  

}
