import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

import { tokenNotExpired } from 'angular2-jwt'

const TOKEN_ITEM_NAME = 'access_token';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  login(username: string, password: string) {
    let endpoint = 'http://localhost:3000/login';

    let payload = JSON.stringify({ username, password });

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(endpoint, payload, { headers })
      .map(response => response.json())
      .map(response => {
        if (!response.success) {
          return false;
        }

        localStorage.setItem(TOKEN_ITEM_NAME, response.token);

        return true;
      });
  }

  logout() {
    localStorage.removeItem(TOKEN_ITEM_NAME);
  }

  isLoggedIn() {
    return tokenNotExpired(TOKEN_ITEM_NAME);
  }

}
