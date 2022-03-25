import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { IPost } from '../interfaces/post';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-posts-tab',
  templateUrl: './posts-tab.component.html',
  styleUrls: ['./posts-tab.component.scss']
})
export class PostsTabComponent {
  posts?: Observable<IPost[] | undefined>;
  inputControl: FormControl = new FormControl();
  filterInput: string = "";

  constructor(public dataService: DataService) {
    this.posts = this.dataService.selectedUser.pipe(
      tap(() => this.inputControl.setValue("")),
      map(user => user?.posts)
    );

    this.inputControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => this.filterInput = value);
  }

  postMatches(post: IPost, input: string): boolean {
    let query = input.toUpperCase();
    return Object.values(post).slice(1).some(value => String(value).toUpperCase().includes(query));
  }

  deletePost(post: IPost): void {
    if (window.confirm("Are you sure? this action cannot be undone")) {
      this.dataService.deletePost(post).subscribe();
    }
  }
}
