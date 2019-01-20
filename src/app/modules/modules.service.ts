import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser as User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsersFromApi(): Observable<object> {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users'

    return this.httpClient.get(usersUrl);
  }

  getPostsFromApi(): Observable<object> {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

    return this.httpClient.get(postsUrl);
  }

  postNewUser(body: User): Observable<object> {
    const newUserUrl = 'https://jsonplaceholder.typicode.com/users'

    return this.httpClient.post(newUserUrl, body);
  }
}
