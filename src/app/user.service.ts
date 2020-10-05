import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  header: HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.header.set('Content-Type', 'application/json; charset=utf-8');
  }

  signUp(body): Promise<any> {
    const result = this.http.post(`${environment.BLOG_SERVICE_BASE}/signup`, body, { headers: this.header }).toPromise();
    return result;
  }

  login(body): Promise<any> {
    const result = this.http.post(`${environment.BLOG_SERVICE_BASE}/login`, body, { headers: this.header }).toPromise();
    return result;
  }

}
