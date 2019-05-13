import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nggg7';

  isLogged: boolean = false

  messages: any[] = []
  subscribtion: Subscription

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.subscribtion = this.auth.getIsAuth().subscribe(val => {
      this.isLogged = val
    })
    this.auth.isUserAuth()


  }

  login() {
    this.auth.auth()
  }
  logout() {
    this.auth.unAuth()
  }
}
