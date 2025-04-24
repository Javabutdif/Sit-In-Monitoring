import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHello() {
    return this.http.get(this.apiUrl + '/hello', { responseType: 'text' });
  }
  getUsers() {
    return this.http.get(this.apiUrl + '/users', { responseType: 'json' });
  }
  getLogin() {
    return this.http.get(this.apiUrl + '/login', { responseType: 'text' });
  }
}
