import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Client } from '../interfaces/clients';
import {JwtHelperService} from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
public Url = environment.publicUrl+'Auth/Login';

jwtHelper = new JwtHelperService();
constructor(private http:HttpClient) { }
login(client : Client)
{
  return this.http.post(this.Url,client)
  .pipe(
    map((response :any) =>{
      const user = response;
      if(user){
        localStorage.setItem('token',user.token);
      }
    })
  );
}
loggedIn()
{
  const token = localStorage.getItem('token');
  return this.jwtHelper.isTokenExpired(token);
}
loggOut()
{
  return localStorage.clear();
}
}
