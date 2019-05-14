import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  users: [] = []

  constructor(private usersService: UsersService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
      console.log(data.data)
      this.users = data.data
    })
  }

  displayUser(user) {
    console.log(user)
    this.http.put(`https://reqres.in/api/users/${user.id}`, { user }).subscribe(res => console.log(res))
  }

}
