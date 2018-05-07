import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class AuthService {

  token: string = '';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:8080/auth',
        'user=' + encodeURIComponent(username) + '&' +
        'password=' + encodeURIComponent(password), {
          responseType: 'json'
        }
      ).toPromise().then(
        (data) => {
          if (data["status"] === "ok" && typeof(data["data"]["token"]) === "string") {
            this.token = data["data"]["token"];
            return resolve();
          }

          reject(Error(data["message"] || "unknown error"));
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  isLogined() {
    return !!this.token;
  }

  logout() {
    this.token = '';
    return Promise.resolve();
  }

  getToken():string {
    return this.token;
  }

}
