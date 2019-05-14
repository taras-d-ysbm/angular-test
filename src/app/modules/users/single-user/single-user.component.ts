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

  @Input() first_name: string
  @Input() last_name: string
  @Input() image: string
  @Input() email: string

  @Output() editUser = new EventEmitter()

  firstName = new FormControl('');
  lastName = new FormControl('');
  emailControl = new FormControl('');

  toggleEdit() {
    this.editing = !this.editing
  }

  save() {
    console.log(this.first_name)
  }

  userEdited() {
    const user = {
      first_name: this.firstName.value ? this.firstName.value : this.first_name,
      last_name: this.lastName.value ? this.lastName.value : this.last_name,
      email: this.emailControl.value ? this.emailControl.value : this.email
    }
    this.first_name = this.firstName.value ? this.firstName.value : this.first_name
    this.last_name = this.lastName.value ? this.lastName.value : this.last_name
    this.email = this.emailControl.value ? this.emailControl.value : this.email
    this.editUser.emit(user)
    this.toggleEdit()
  }



}
