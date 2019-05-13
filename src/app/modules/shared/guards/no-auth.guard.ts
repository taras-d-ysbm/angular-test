import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Router, CanActivate } from '@angular/router';
import { StorageService } from '../../../services/storage.service'

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard {

  constructor(private router: Router, private storage: StorageService) { }

  canActivate(): Observable<boolean> {
    if (this.storage.getToken()) {
      this.router.navigate(['']);
      return of(false);
    }
    return of(true);
  }

}
