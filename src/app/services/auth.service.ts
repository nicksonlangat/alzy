import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from 'src/app/models/user.model';

const api_endpoint = "http://localhost:8000/apiusers";
const auth_endpoint='http://localhost:8000/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  create(data: any): Observable<any>{
    return this.http.post(api_endpoint, data);
  };

  logUser(data: any): Observable<any>{
    return this.http.post(auth_endpoint, data);
  }
}








