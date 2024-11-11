import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://lumistore-production.up.railway.app/api/auth'
  // private apiUrl = 'http://localhost:3000/api/auth'


  constructor() { }

  login(user: string, password: string){
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ correo: user, contraseña: password })
    })
    .then(response => response.json())
    .then(data => {
      if(data.tokenAcceso){
        sessionStorage.setItem('token', data.tokenAcceso);
        return true;
      }
      return false;
    });
  }
}
