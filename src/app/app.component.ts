import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'User Viewer';
  users: Observable<IUser[]> | undefined;

  constructor(private dataService: DataService) {
    this.users = this.dataService.getUsers();
  }
}
