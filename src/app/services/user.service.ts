import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(private httpClient: HttpClient) { }

  //get all users
  getUsers():Observable<any> {
    return this.httpClient.get(this.apiUrl + '/users')
    .pipe(catchError((err) => of(err)));
  }

  //find user posts
  findPosts(id:number):Observable<any> {
    return this.httpClient.get(this.apiUrl + '/posts?userId=' + id)
    .pipe(catchError((err) => of(err)));
  }

  //find post comments
  findComments(id:number):Observable<any> {
    return this.httpClient.get(this.apiUrl + '/comments?postId=' + id)
    .pipe(catchError((err) => of(err)));
  }
}
