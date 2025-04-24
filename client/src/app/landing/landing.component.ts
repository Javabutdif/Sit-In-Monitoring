import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  message: string = '';
  login: string = '';
  users: any = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMessage().subscribe((message) => {
      this.message = message;
    });

    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
      console.log('Users:', this.users);
    });

    // Automatically update login when the service updates it
    this.dataService.getLogin().subscribe((login) => {
      this.login = login;
    });
  }
}
