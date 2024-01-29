import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1';
  session: any;

  constructor(private http: HttpClient) {
    let session = localStorage.getItem("token");
    if (session) this.session = session
  }

  //get token
  getToken(data:any) {
    this.http.post(this.apiUrl + '/token', data)
    .pipe(share())
    .subscribe((result:any) => {
      this.session = result;
      localStorage.setItem("token", result.access_token);
		})
  }

  logout(){
    this.session = undefined
    localStorage.removeItem("token");
  }

  //register
  regiter(data:any) {
    return this.http.post(this.apiUrl + '/register', data).subscribe((result:any) => {
      return result;
		})

    // return this.http.post(this.apiUrl + '/register', data)
    // .pipe(catchError((err) => of(err)));
  }
}
