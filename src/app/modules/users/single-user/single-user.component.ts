import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router'
import { Observable } from 'rxjs'
import { filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent {
  editing: boolean = false

  // @Input() first_name: string
  // @Input() last_name: string
  // @Input() image: string
  // @Input() email: string

  @Input() user

  @Output() editUser = new EventEmitter()

  firstName = new FormControl('');
  lastName = new FormControl('');
  emailControl = new FormControl('');

  toggleEdit() {
    this.editing = !this.editing
  }

  save() {
    console.log(this.user.first_name)
  }

  userEdited() {
    const user = {
      first_name: this.firstName.value ? this.firstName.value : this.user.first_name,
      last_name: this.lastName.value ? this.lastName.value : this.user.last_name,
      email: this.emailControl.value ? this.emailControl.value : this.user.email,
      id: this.user.id
    }
    this.user.first_name = this.firstName.value ? this.firstName.value : this.user.first_name
    this.user.last_name = this.lastName.value ? this.lastName.value : this.user.last_name
    this.user.email = this.emailControl.value ? this.emailControl.value : this.user.email
    this.editUser.emit(user)
    this.toggleEdit()
  }



}
