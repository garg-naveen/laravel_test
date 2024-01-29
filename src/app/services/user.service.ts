import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  // session: any;

  constructor(private http: HttpClient) {
    // let session = localStorage.getItem("token");
    // if (session) this.session = JSON.parse(session)
  }

  //get all users
  getUsers():Observable<any> {
    /* is now in interceptor*/
    let token   = localStorage.getItem("token");
    let headers = new HttpHeaders({
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    });

    return this.http.post(this.apiUrl + '/users', {}, {/*headers*/})
    .pipe(catchError((err) => of(err)));
  }

  //find user posts
  findPosts(id:number):Observable<any> {

    return this.http.post(this.apiUrl + '/posts?userId=' + id, {}, {})
    .pipe(catchError((err) => of(err)));
  }

  //find post comments
  findComments(id:number):Observable<any> {

    return this.http.post(this.apiUrl + '/comments?postId=' + id, {}, {})
    .pipe(catchError((err) => of(err)));
  }
}
