import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  providers: []
})
export class HeaderComponent implements OnInit {

  identified: boolean = false;

  constructor(private auth: AuthService, private activeRoute: ActivatedRoute, private router: Router ) {

  }

  ngOnInit() {
    this.auth.authState().subscribe(params => {
      if (("user" in params) && params.user === null) {
        this.identified = false;
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['messages/all']);
        this.identified = false;
      }
    })
  }

  userLogout() {
    this.auth.auth(null);
  }

}
