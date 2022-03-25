import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/interfaces/post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  get user(): IUser | undefined { return this._user; }
  set user(user: IUser | undefined) {
    this._user = user;
    this.dataService.getUserPosts(this.user!.id).subscribe(posts => this._user!.posts = posts);
  }
  private _user: IUser | undefined;
  minPostsNumber = 10;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  selectUser(): void {
    const selectedUser = this.dataService.selectedUser;
    if (selectedUser.getValue() !== this.user) {
      selectedUser.next(this.user);
    }
  }

  hasFewPosts(): boolean {
    return (this.user?.posts !== undefined && this.user?.posts.length < this.minPostsNumber);
  }
}
