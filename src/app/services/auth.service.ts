import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StorageService } from './storage.service'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private subject = new Subject<boolean>();

    constructor(private storage: StorageService, private http: HttpClient, private router: Router) { }

    isUserAuth() {
        this.subject.next(this.storage.getToken() ? true : false)
    }

    auth() {
        this.http.post('https://reqres.in/api/register',
            {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }).subscribe(data => {
                this.storage.setToken(data.token)
                console.log(data.token)
                this.subject.next(this.storage.getToken() ? true : false)
                this.router.navigate([''])
            }, error => {
                console.log(error)
            })

        // localStorage.setItem('token', '23123123')
        // this.subject.next(true)
    }

    unAuth() {
        localStorage.removeItem('token')
        this.subject.next()
    }

    getIsAuth() {
        return this.subject.asObservable()
    }

}
