import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(private http: HttpClient) { }

  //register
  regiter(data:any) {
    this.http.post(this.apiUrl + '/register', data).subscribe((result:any) => {
      localStorage.setItem("token", result.access_token);
		})
  }
  
  //get token
  getToken(data:any) {
    this.http.post(this.apiUrl + '/token', data).subscribe((result:any) => {
      localStorage.setItem("token", result.access_token);
		})
  }

  //get all users
  getUsers():Observable<any> {
    let token   = localStorage.getItem("token");
    let headers = new HttpHeaders({
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    });

    return this.http.post(this.apiUrl + '/users', {}, {headers})
    .pipe(catchError((err) => of(err)));
  }

  //find user posts
  findPosts(id:number):Observable<any> {
    let token   = localStorage.getItem("token");
    let headers = new HttpHeaders({
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    });

    return this.http.post(this.apiUrl + '/posts?userId=' + id, {}, {headers})
    .pipe(catchError((err) => of(err)));
  }

  //find post comments
  findComments(id:number):Observable<any> {
    let token   = localStorage.getItem("token");
    let headers = new HttpHeaders({
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    });

    return this.http.post(this.apiUrl + '/comments?postId=' + id, {}, {headers})
    .pipe(catchError((err) => of(err)));
  }
}
