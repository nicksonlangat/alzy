import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseUrl: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  loginUser(userData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'authenticate', userData);
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'api/users', userData);
  }
}