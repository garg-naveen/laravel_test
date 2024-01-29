import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  isAuthentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient, private router:Router) {
    const token = this.getAuthToken()
    if (token) {
      this.updateToken(true);
    }
  }

  updateToken(status: boolean) {
    this.isAuthentication.next(status);
  }

  //get token
  getToken(data:any){
    this.http.post(this.apiUrl + '/token', data)
    .pipe(share())
    .subscribe((result:any) => {
      this.updateToken(true);
      localStorage.setItem("token", result.access_token);
		})
  }

  getAuthToken(){
    return localStorage.getItem("token");
  }

  logout(){
    this.updateToken(false);
    localStorage.removeItem("token");

    this.router.navigate(['login']);
  }

  //register
  regiter(data:any) {
    return this.http.post(this.apiUrl + '/register', data).subscribe((result:any) => {
      return result;
		})
  }
}
