import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }

  loginDetails(details: any) : Observable<any> {
    debugger
    return this.http.post<any>(environment.apiUrl +'/auth/login', details);
  }
}
