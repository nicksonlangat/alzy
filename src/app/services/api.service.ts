import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const api_url ='http://localhost:8000/reminders'

const upload_url='http://localhost:8000/upload'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  createReminder(data: any): Observable<any>{
    return this.http.post(api_url, data);
  };

  public upload(formData) {
    return this.http.post<any>(upload_url, formData);
  }

  public getImages(){
    return this.http.get(upload_url);
  }

}
