import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // apiUrl = 'https://localhost:7012';


  constructor(private http: HttpClient) { }

  registrationDetails(user: any) {
    debugger
    return this.http.post(environment.apiUrl + '/auth/register', user);
  }

  //   registrationDetails(details: any) : Observable<any> {
  //   debugger;
  //   return this.http.post<any>(`${this.apiUrl}/auth/register`, details);
  // }
}
