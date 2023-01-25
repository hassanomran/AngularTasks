import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Client } from '../interfaces/clients';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
public Url = environment.publicUrl+'Auth/Login';
constructor(private http:HttpClient) { }
login(client : Client)
{
  return this.http.post(this.Url,client);
}
}
