import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user';
import { IPost } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly URL = "https://jsonplaceholder.typicode.com";
  selectedUser = new BehaviorSubject<IUser | undefined>(undefined);

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.URL + '/users');
  }

  getUserPosts(userId: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.URL}/user/${userId}/posts`);
  }

  deletePost(post: IPost): Observable<void> {
    let posts = this.selectedUser.getValue()?.posts;
    posts?.splice(posts.indexOf(post), 1);
    return this.http.delete<void>(`${this.URL}/posts/${post.id}`);
  }
}
