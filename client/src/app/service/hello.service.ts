import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHello() {
    return this.http.get(this.apiUrl + '/hello', { responseType: 'text' });
  }
}
