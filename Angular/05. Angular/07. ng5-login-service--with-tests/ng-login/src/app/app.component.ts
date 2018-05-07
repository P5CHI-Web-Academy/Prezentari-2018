import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  logined: boolean = false;
  sampleContent: string = '';
  globalError: Error = null;
  auth = {
    username : '',
    password : ''
  }

  constructor(private authService: AuthService, private http: HttpClient) {

  }

  getData() {
    this.http.get('http://localhost:8080/user/content', {
      headers: new HttpHeaders().set('auth-token', this.authService.getToken()),
      responseType: "text"
    }).toPromise().then((content) => {
      this.sampleContent = content;
      this.globalError = null;
    }, (err) => {
      this.globalError = err;
    });
  }

  login() {
    this.authService.login(
      this.auth.username,
      this.auth.password
    ).then(() => {
      this.logined = true;
      this.globalError = null;
      
      this.getData();
    }, (err) => {
      this.globalError = err;
      this.logined = false;
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.logined = false;
      this.globalError = null;      
    }, (err) => {
      this.globalError = err;
    })
  }
}
