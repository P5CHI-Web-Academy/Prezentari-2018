import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: []
})
export class LoginComponent implements OnInit {

  error: Error = null
  username: string = ''
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.username = '';
  }

  userAuth() {
    if (this.auth.auth(this.username)) {
      this.error = null;
    } else {
      this.error = Error("invalid credentials")
    }
  }

}
