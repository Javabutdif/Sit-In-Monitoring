import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messageSubject = new BehaviorSubject<string>(''); // Default empty message
  private usersSubject = new BehaviorSubject<any>(null); // Default empty
  private loginSubject = new BehaviorSubject<string>(''); // Default empty login value

  constructor(private api: ApiService) {
    // Subscribe to API calls and update the BehaviorSubjects
    this.fetchDataMessage();
    this.fetchUsers();
    this.fetchLogin();
  }

  // Fetch message from API and update the messageSubject
  fetchDataMessage(): void {
    this.api.getHello().subscribe({
      next: (res) => {
        this.messageSubject.next(res); // Update the BehaviorSubject with new data
      },
      error: (err) => {
        console.error('Error fetching message:', err);
      },
    });
  }

  // Fetch users and update the usersSubject
  fetchUsers(): void {
    this.api.getUsers().subscribe({
      next: (res) => {
        this.usersSubject.next(res);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      },
    });
  }

  // Fetch login and update the loginSubject
  fetchLogin(): void {
    this.api.getLogin().subscribe({
      next: (res) => {
        this.loginSubject.next(res);
      },
      error: (err) => {
        console.error('Error fetching login:', err);
      },
    });
  }

  // Expose the subjects as observables
  getMessage(): Observable<string> {
    return this.messageSubject.asObservable();
  }

  getUsers(): Observable<any> {
    return this.usersSubject.asObservable();
  }

  getLogin(): Observable<string> {
    return this.loginSubject.asObservable();
  }
}
